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
  const offset1 = document.querySelector("#offset1");
  const deslocamento = Number(offset1.value);
  const textoCodificado = cipher.encode(deslocamento, texto1);
  document.querySelector("#texto1").value = textoCodificado;
  document.querySelector("#texto2").value = textoCodificado;
}
codificar.addEventListener("click", btn1);

// Evento botão descriptografar
const decodificar = document.querySelector("#decodificar");
function btn2() {
  const texto2 = document.querySelector("#texto2").value.toUpperCase();
  const offset2 = document.querySelector("#offset2");
  const deslocamento2 = Number(offset2.value);
  const textoDecodificado = cipher.decode(deslocamento2, texto2);
  document.querySelector("#texto2").value = textoDecodificado;
}
decodificar.addEventListener("click", btn2);
