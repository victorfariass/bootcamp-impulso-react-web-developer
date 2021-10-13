const comparaNumeros = (num1, num2) => {
  const soma = num1 + num2;
  let frase1 = '';
  let frase2 = ''
  if (num1 == num2) {
    frase1 = `Os números ${num1} e ${num2} são iguais.`;
  } else {
    frase1 = `Os números ${num1} e ${num2} não são iguais.`;
  }

  if (soma < 10) {
    frase2 = `Sua soma é ${soma}, que é menor que 10 e menor que 20.`;
  } else if (soma > 10 && soma < 20) {
    frase2 = `Sua soma é ${soma}, que é maior que 10 e menor que 20.`;
  } else if (soma > 20) {
    frase2 = `Sua soma é ${soma}, que é maior que 10 e maior que 20.`;
  }

  console.log(`${frase1} ${frase2}`)
}

comparaNumeros(12, 9)