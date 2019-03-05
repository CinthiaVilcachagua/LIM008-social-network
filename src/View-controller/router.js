import {signInTmp, registerTmp} from '../UI-(view)/template-login.js'
import {wallTmp} from '../UI-(view)/template-muro.js'
const viewRuta = (hash) => {
    console.log(hash);
    switch(hash) {
        case '' :
        case '#' :
        case '#/' :
        case '#/welcome' : {return viewTmp('welcome')}
        case '#/register' : 
        case '#/login' :
        case '#/muro' : {
            const id = hash.split('/')[1];
            return viewTmp(id);
        }
        default : return viewTmp('404');
    }
};

const viewTmp = (id) => {
    //llamamos al contenedor
    const container = document.getElementById('root');
    container.innerHTML = '';
    switch(id) {
        case 'welcome' : container.appendChild(welcomeTmp());
            break;
        case 'register' : container.appendChild(registerTmp());
            break;
        case 'login' : container.appendChild(signInTmp());
            break;
        case 'muro' : container.appendChild(wallTmp());
            break;
    }
};

export const initRouter = () => {
    window.addEventListener('load', viewRuta(window.location.hash))
    if (("onhashchange" in window)) window.onhashchange = () => viewRuta(window.location.hash)
  };