import cipher from "./cipher.js";
console.log(cipher);

//Modificações títulos e subtítulo por ID

const titulo = document.querySelector("#titulo");
titulo.innerHTML = "Papo de busão";

const subTitulo = document.querySelector("#subTitulo");
subTitulo.innerHTML =
  "Não corra o risco de ter suas mensagem lida por aqueles que estão ao seu redor no busão. Já viu o tanto de pessoas que tem suas mensagem fotografadas e acabam virando meme?<br> Se sua intenção não é ser famoso dessa forma, use esse App que você ficará seguro quando estiver em locais com muitas pessoas.";

//Evento botão Criptografar

const codificar = document.querySelector("#codificar");
function btn1() {
  const texto1 = document.querySelector("#texto1").value.toUpperCase();
  const offset = document.querySelector("#offset");
  const textoCodificado = cipher.encode(offset, texto1);
  document.querySelector("#texto1").value = textoCodificado;
}
codificar.addEventListener("click", btn1);

// Evento botão descriptografar

const decodificar = document.querySelector("#decodificar");
function btn2() {
  const texto2 = document.querySelector("#texto2").value.toUpperCase();
  const offset = document.querySelector("#offset");
  const textoDecodificado = cipher.decode(offset, texto2);
  document.querySelector("#texto2").value = textoDecodificado;
}
decodificar.addEventListener("click", btn2);
