import {clickBtnRegister,clickBtnIngresar} from "../View-controller/auth-controller.js" ;

/*export const welcomeTmp = () => {
    const divElement = document.createElement('div');
    const welcomeTmp = `
        <img src="../img/58c08bf03adcd.jpg" alt="foto de egresadas en su graduación">
        <div class="contenedor">
            <h2>LABORATORIANS</h2>
            <p>Una red social ideada para la gran comunidad de egresadas y estudiantes de toda Laboratoria (LIM, CHL, BRA y MEX)</p>
        </div>
    `
    divElement.innerHTML = welcomeTmp;
    return divElement;
}*/

export const registerTmp = () => {
    const divCreate = document.createElement('div');
    const registerTmp = `
        <form id="registro" class="form-register">
          <h2>REGISTRO</h2>
          <div class="contenedor-inputs">
            <input type="text" id="usuario" placeholder="Username" required>
            <input id="email" type="email" placeholder="E-mail" required>
            <input id="password" type="password" placeholder="Password" required>
            <button id="btn-registrar" type="button">Registrarse</button>
            <p>¿Ya tienes una cuenta? <a href="#/login">Ingresa aquí</a></p>
          </div>
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
        <form id="ingreso" class="form-ingreso">
          <h2>INGRESO</h2>
          <div class="container-inputs">
            <input type="email" id="email-acces" placeholder="E-mail" required>
            <input type="password" id="password-acces" placeholder="Password" required>
            <button id="btn-ingresar" type="button">Ingresar</button>
          </div>
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
