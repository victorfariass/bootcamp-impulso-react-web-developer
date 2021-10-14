const alunosAprovados = (arr, med) => {
  let aprovados = [];
  for (let i = 0; i < arr.length; i += 1) {
    const {nota, nome} = arr[i]
    if (nota >= med) {
      aprovados.push(nome)
    }
  }
  return aprovados
}