const tamanhoAlfabeto = 26;
const codigoAscii = 65;

const cipher = {
  encode: function encode(offset, string) {
    if (offset === null) {
      throw new TypeError("Erro");
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
  decode: function decode(offset, string) {
    if (offset === null) {
      throw new TypeError("Erro");
    } else {
      let resultadoDecifra = "";
      for (let i = 0; i < string.length; i++) {
        const decifra = string.charCodeAt(i);
        let decodificar =
          ((decifra + codigoAscii - offset) % tamanhoAlfabeto) + codigoAscii;
        if (decifra <= 64 || decifra >= 90) {
          decodificar = decifra;
        }
        resultadoDecifra += String.fromCharCode(decodificar);
      }
      return resultadoDecifra;
    }
  },
};
export default cipher;
