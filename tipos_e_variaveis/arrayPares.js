const substituiPares = (array) => {
  if (!array) return -1;
  if (!array.length) return -1;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 0) {
      console.log("Você já é zero");
    } else if (array[i] % 2 === 0) {
      array[i] = 0;
    }
  }
  return array;
}

console.log(substituiPares([0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

let a = 0
let b = null;
let c;

console.log(`${a} ${b} ${c}`)

const meuObjeto = {
  chave: "valor"
}
 
 console.log(meuObjeto.chave); 
 console.log(meuObjeto[chave]);