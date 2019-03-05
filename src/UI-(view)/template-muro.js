import {clickBtnPostear} from "../View-controller/wall-controller.js";
import { signOut } from "../Controller-(Functions)/muro.js" ;

export const wallTmp = () => {
    const divCreate = document.createElement('div');
    const wall = `
        <section id="muro-principal">
            <h2>Muro</h2>
            <div id="cerrar-sesion" class="contenedor">
                <p> Bienvenido </p>
                <button type="button" id="btn-cerrar">cerrar sesion</button>
            </div>
            <div>
                <input type="text" id="post" placeholder="¿Qué quisieras comparir hoy?">
                <button type="button" id="btn-publicar">publicar</button>
            </div>
        </section>
        <section id="posts">
            <h2>Publicaciones</h2>
            <div id="insert-post">

            </div>
        </section>
    `
    divCreate.innerHTML = wall;
    //INICIALIZANDO LA BASE DE DATOS
    // llamando al boton de publicar post
    const btnPostear = divCreate.querySelector('#btn-publicar');
    btnPostear.addEventListener('click', () => {
        clickBtnPostear();
    });

    //cerrando sesion
    const btnCloseSesion = divCreate.querySelector('#btn-cerrar');
    btnCloseSesion.addEventListener('click' , () => {
        signOut()
        window.location.hash = '#/register';
    });

    return divCreate;
}