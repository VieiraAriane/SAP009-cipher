const tamanhoAlfabeto = 26;
const codigoAscii = 65;

const cipher = {
  encode: function encode(offset, string) {
    // alert(typeof offset);
    if (offset === null) {
      throw new TypeError("Escolha um número de deslocamento");
    } else {
      let resultadoCifra = "";
      for (let i = 0; i < string.length; i++) {
        const cifra = string.charCodeAt(i);
        let codificar =
          ((cifra - codigoAscii + offset) % tamanhoAlfabeto) + codigoAscii;
        if (cifra <= 64 || cifra >= 90) {
          codificar = cifra;
        }
        resultadoCifra += String.fromCharCode(codificar);
      }
      return resultadoCifra;
    }
  },
};
// decode: function decode(offset, string) {
//   let resultadoDecifra = "";
//   for (let i = 0; i < string.length; i++) {
//     const char2 = string[i];
//     const decodificar =
//       ((char2.charCodeAt(0) + codigoAscii - offset + tamanhoAlfabeto) %
//         tamanhoAlfabeto) +
//       codigoAscii;
//     resultadoDecifra += String.fromCharCode(decodificar);
//   }
//   return resultadoDecifra;

export default cipher;
