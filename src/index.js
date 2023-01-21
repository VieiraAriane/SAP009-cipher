import cipher from "./cipher.js";
console.log(cipher);

//Modificações títulos e subtítulo por ID

let titulo = document.querySelector("#titulo");
titulo.innerHTML = "Papo de busão";

let subTitulo = document.querySelector("#subTitulo");
subTitulo.innerHTML =
  "Não corra o risco de ter suas mensagem lida por aqueles que estão ao seu redor no busão. Já viu o tanto de pessoas que tem suas mensagem fotografadas e acabam virando meme?<br> Se sua intenção não é ser famoso dessa forma, use esse App que você ficará seguro quando estiver em locais com muitas pessoas.";

//Evento dos botões
const btn = document.querySelector("#btnCodificar");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  const name = document.querySelector("#codificado");
  const value = name.value;
  //console.log(value);
});

const btn2 = document.querySelector("#btnDecodificar");
btn2.addEventListener("click", function (e) {
  e.preventDefault();
  const name2 = document.querySelector("#decodificar");
  const value2 = name2.value;
  // console.log(value2);
});
