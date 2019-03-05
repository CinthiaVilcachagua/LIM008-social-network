import {createCloud, publicarPost} from "../Controller-(Functions)/muro.js" ;
export const clickBtnPostear = () => {
  const postMuro = document.getElementById('post').value;
  createCloud(postMuro);
  publicarPost();
};