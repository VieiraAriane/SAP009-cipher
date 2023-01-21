const alfabeto = 26;
const codigoAscii = 65;

const cipher = {
  encode: function encode(offset, string) {
    if (offset == null || string) {
      throw new TypeError("Erro");
    }

    let resultadoCifra = "";
    for (let i = 0; i < string.length; i++) {
      const criptar = string.charCodeAt(i);
      let codificar =
        ((criptar - codigoAscii + offset) % alfabeto) + codigoAscii;
      if (codificar <= 64 || codificar >= 91) {
        criptar = codificar;
      }
      resultadoCifra += string.charCodeAt(codificar);
    }
    return resultadoCifra;
  },

  decode: function decode(offset, string) {
    if (offset == null || string) {
      throw new TypeError("Erro");
    }

    let resultadoDecifra = "";
    for (let i = 0; i < string.length; i++) {
      const decriptar = string.charCodeAt(i);
      let decodificar =
        ((decriptar + codigoAscii - offset) % alfabeto) + codigoAscii;
      if (decodificar <= 64 || decodificar >= 91) {
        decriptar = decodificar;
      }
      resultadoDecifra += string.fromCharCode(decodificar);
    }
    return resultadoDecifra;
  },
};

export default cipher;
