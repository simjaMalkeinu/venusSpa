const llenarProductos = () => {
    fetch('http://localhost/spa/html/data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('data', data);
            const miStorage = window.localStorage;
            console.log(miStorage);
        });
}

llenarProductos();