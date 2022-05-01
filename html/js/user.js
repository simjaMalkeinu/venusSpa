const login = (usuario) => {
    console.log(usuario);
    localStorage.setItem('usuario', JSON.stringify(usuario));
}

const closeSession = () => {
    localStorage.removeItem("usuario");
    validate();
}

const addCartShop = (iteamShop) => {

    const data = [
        {
            "id": 1,
            "nombre": "CREMA CORPOTAL DE BABA DE CARACOL",
            "precio": 289.90
        },
        {
            "id": 2,
            "nombre": "JABON CORPORAL EXFOLIANTE CAFÉ Y AVENA",
            "precio": 89.90
        },
        {
            "id": 3,
            "nombre": "JABON CORPORAL RELAJANTE DE COCOL",
            "precio": 89.90
        },
        {
            "id": 4,
            "nombre": "JABON CORPORAL CICATRIZANTE DE AVENA Y MANZANILLA",
            "precio": 89.90
        },
        {
            "id": 5,
            "nombre": "JABON CORPORAL HIDRATANTE DE AVENA CON MIEL",
            "precio": 89.90
        },
        {
            "id": 6,
            "nombre": "EXFOLIANTE RELAJANTE DE LAVANDA",
            "precio": 89.90
        },
        {
            "id": 7,
            "nombre": "JABON FACIAL HIDRATANTE Y ANTIEDAD COLAGENO, ROSA DE CASTILLA Y AVENA",
            "precio": 99.90
        },
        {
            "id": 8,
            "nombre": "EXFOLIANTE RELAJANTE DE FRUTOS ROJO",
            "precio": 89.90
        }
    ];

    var carrito = JSON.parse(localStorage.getItem('carrito'));

    console.log(carrito);
    data.forEach(item => {
        if(item.id === iteamShop){
            carrito.push(item);
            localStorage.setItem('carrito', JSON.stringify(carrito));
        }
    });
}

const validate = () => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const name = document.getElementById('login');
    // console.log(usuario);
    if (usuario === null) {
        name.innerHTML = `<a href="./iniciarSecion.html">Iniciar Sesion</a>`;
    } else {
        name.innerHTML = `<li id="usuario">${usuario.nombre}
                                <ul>
                                    <li><button onclick="closeSession()">CERRAR SESION</button></li>
                                </ul>
                            </li>`;
    }

}

const llenarCarrito = () => {
    var carrito = JSON.parse(localStorage.getItem('carrito'));

    const cart = document.getElementById("carrito");
    carrito.forEach(item => {
        cart.innerHTML += `<div class="cart-item">
                                <p>${item.nombre}</p>
                                <label><i class="fa-solid fa-money-check-dollar"></i><span>$${item.precio}</span></label>
                            </div>`;
    });
}

const pagar = () => {
    const array = [];
    localStorage.setItem('carrito', JSON.stringify(array));
    const cart = document.getElementById("carrito");
    cart.innerHTML = "<h2>Aun no agregas nada a tu carrito<h2>";
}

validate();

if (localStorage.getItem('carrito') === null) {
    const array = [];
    localStorage.setItem('carrito', JSON.stringify(array));
}