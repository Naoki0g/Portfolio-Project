/********** Carregar Navbar **********/
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('menu-placeholder').innerHTML = data;
    });

/********** Animação de Fundo **********/
fetch('fundo.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('fundo-placeholder').innerHTML = data;
    });