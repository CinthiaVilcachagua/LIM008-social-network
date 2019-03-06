import {clickBtnRegister,clickBtnIngresar} from "../View-controller/auth-controller.js" ;

export const welcomeTmp = () => {
    const divElement = document.createElement('div');
    const welcomeTmp = `
        <img>
        <div class="contenedor">
            <h2>LABORATORIANS</h2>
            <p></p>
        </div>
    `
    divElement.appendChild(welcomeTmp);
    return divElement;
}

export const registerTmp = () => {
    const divCreate = document.createElement('div');
    const registerTmp = `
        <h2>REGISTRO</h2>
        <form id="registro">
            <label for="">Usuario</label>
            <input type="text" id="usuario">
            <label for="">E-mail:</label>
            <input id="email" type="email">
            <label for="">Password:</label>
            <input id="password" type="password">
            <button id="btn-registrar" type="button">REGISTRARME</button>
        </form>
    `
    divCreate.innerHTML = registerTmp;
    const btnRegistrar = divCreate.querySelector('#btn-registrar');
    //REGISTRANDOSE
    btnRegistrar.addEventListener('click', () => {
      clickBtnRegister();
    });
    return divCreate;
}

export const signInTmp = () => {
    const divNew = document.createElement('div');
    const loginTmp = `
        <h2>INGRESO</h2>
        <form id="ingreso">
            <label for="">E-mail:</label>
            <input type="email" id="email-acces">
            <label for="">Password:</label>
            <input type="password" id="password-acces">
            <button id="btn-ingresar" type="button">INGRESAR</button>
        </form>
    `
    divNew.innerHTML = loginTmp;
    const btnIngresar = divNew.querySelector('#btn-ingresar');
    //INGRESANDO
    btnIngresar.addEventListener('click', () => {
       clickBtnIngresar();
    });
    return divNew;
}

