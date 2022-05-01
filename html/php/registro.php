<?php

$server = "venusspa.000webhostapp.com/localhost";
$dbname = "id18866324_spa";
$usuario = "id18866324_spaadmin";
$contraseña = "Adonolam&simja123";

//id=&name=&email=&pass=&confirm=

$id = $_GET['id'];
$nombre = $_GET['name'];
$email = $_GET['email'];
$sexo = $_GET['sexo'];
$pass = $_GET['pass'];

try {
    $mdb = new PDO("mysql:host=$server;dbname=$dbname", $usuario, $contraseña);
    $mdb->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "INSERT INTO usuarios (boleta, nombre, email, sexo, pass) VALUES ('$id', '$nombre', '$email', '$sexo', '$pass')";
    //echo $sql;
    $query = $mdb->prepare($sql);
    $query->execute();
    //$results = $query->fetchAll(PDO::FETCH_OBJ);


    $user = array(
        "boleta" => $_GET['id'],
        "nombre" => $_GET['name'],
        "email" => $_GET['email'],
        "sexo" => $_GET['sexo'],
        "pass" => $_GET['pass'],
    );

    $user = json_encode($user);

    echo '<script src="../js/user.js"></script>';


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