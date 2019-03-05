import { register, signIn } from "../Controller-(Functions)/login.js"
export const clickBtnRegister = () => {
  const nameUser = document.getElementById('usuario').value;
  const email = document.getElementById('email').value; 
  const password = document.getElementById('password').value;
  register(email,password);
};

export const clickBtnIngresar = () => {
  const emailAcces = document.getElementById('email-acces').value;
  const passwordAcces = document.getElementById('password-acces').value;
  signIn(emailAcces, passwordAcces);
}