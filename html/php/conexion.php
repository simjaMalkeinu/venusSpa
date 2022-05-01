<?php

$server = "localhost";
$dbname = "id18866324_spa";
$usuario = "id18866324_spaadmin";
$contraseña = "Adonolam&simja123";

$id = $_GET['id'];
$pass = $_GET['pass'];

try {
    $mdb = new PDO("mysql:host=$server;dbname=$dbname", $usuario, $contraseña);
    $mdb->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = 'SELECT * from usuarios where boleta=' . $id . ' AND pass=' . $pass;
    //echo $sql;
    $query = $mdb->prepare($sql);
    $query->execute();
    $results = $query->fetchAll(PDO::FETCH_OBJ);

    if ($query->rowCount() >= 0) {
        $user = $results[0];

        $user = json_encode($user);

        echo '<script src="../js/user.js"></script>';
    } else {
        echo '<script>window.history.back(); alert("usuario y/o contraseña incorrectos")';
        echo '</script>';
    }

    $mbd = null;
} catch (PDOException $e) {
    print "¡Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>

<script>
    const addUser = login(<?php echo $user ?>);
    window.history.back();
    alert("BIENVENIDO");
</script>