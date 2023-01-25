const alfabeto = 26;
const codigoAscii = 65;

const cipher = {
  encode: function encode(offset, string) {
    if (offset !== "number" || string !== "string") {
      throw new TypeError("Escolha um número de deslocamento");
    }

    let resultadoCifra = "";
    for (let i = 0; i < String.length; i++) {
      const char = string[i];
      const codificar =
        ((char.charCodeAt(0) - codigoAscii + offset + alfabeto) % alfabeto) +
        codigoAscii;
      resultadoCifra += String.fromCharCode(codificar);
    }
    return resultadoCifra;
  },

  decode: function decode(offset, string) {
    if (typeof offset !== "number" || typeof string !== "string") {
      throw new TypeError("Escolha um número de deslocamento");
    }

    let resultadoDecifra = "";
    for (let i = 0; i < String.length; i++) {
      const char2 = string[i];
      const decodificar =
        ((char2.charCodeAt(0) + codigoAscii - offset + alfabeto) % alfabeto) +
        codigoAscii;
      resultadoDecifra += String.fromCharCode(decodificar);
    }
    return resultadoDecifra;
  },
};

export default cipher;
