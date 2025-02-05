export default function numeroALetras(numero) {
  if (numero < 1 || numero > 1000) {
      return "Número fuera de rango";
  }

  const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
  const especiales = ["diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];
  const decenas = ["", "diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
  const centenas = ["", "ciento", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];

  if (numero === 1000) return "mil";
  if (numero === 100) return "cien";

  let letras = "";
  let centena = Math.floor(numero / 100);
  let decena = Math.floor((numero % 100) / 10);
  let unidad = numero % 10;

  if (centena > 0) {
      letras += centenas[centena] + " ";
  }

  if (decena === 1 && unidad > 0) {
      letras += especiales[unidad];
  } else {
      if (decena > 0) {
          letras += decenas[decena];
          if (unidad > 0) letras += " y ";
      }
      if (unidad > 0) {
          letras += unidades[unidad];
      }
  }

  return letras.trim();
}
