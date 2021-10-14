const verificaPalindromo = (palavra) => {
  if (!palavra) return 'Palabra inexistente';

  return palavra.split("").reverse().join("") === palavra;
}

const verificaPalindromo2 = (palavra) => {
  if (!palavra) return 'Palabra inexistente';

  for (let i = 0; i < palavra.length / 2; i += 1) {
    if (palavra[i] !== palavra[palavra.length - 1 - i]) {
      return false;
    }
  }
  return true
}
