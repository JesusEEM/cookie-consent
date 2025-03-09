const aside = document.querySelector('#aside');
const cerrar = document.querySelector('#span');
const boton = document.querySelector('#boton');
const removerCookies = document.querySelector('#remover');

const cerrarPopup = () => {
    aside.classList.add('unvisible');
    aside.classList.remove('visible');
}

const aceptarCookies = () => {
    cerrarPopup();
    localStorage.setItem('aceptado', 1);
}

function mostrarPopup() {
    if(localStorage.getItem('aceptado')) {
        cerrarPopup();
    }
}

const elimarCookies = () => {
    localStorage.removeItem('aceptado');
    aside.classList.add('visible');
    aside.classList.remove('unvisible');
}

mostrarPopup();

boton.addEventListener('click', aceptarCookies);
cerrar.addEventListener('click', cerrarPopup);
removerCookies.addEventListener('click', elimarCookies);



