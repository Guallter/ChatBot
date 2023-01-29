const phoneNumberFormatter = function(number) {
  //Retira os caracteres que não são números
  let formatted = number.replace(/\D/g, '');

  // Retira o 0 do inicio (Prefixo)
  // Suubstitui o 0 por 55
  if (formatted.startsWith('0')) {
    formatted = '55' + formatted.substr(1);
  }

  if (!formatted.endsWith('@c.us')) { //Padrão para envio do Whatssap
    formatted += '@c.us';
  }

  return formatted;
}

module.exports = {
  phoneNumberFormatter
}