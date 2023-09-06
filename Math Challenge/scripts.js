let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")
let sum = Number(numberOne) + Number(numberTwo)
let sub = Number(numberOne) - Number(numberTwo)
let multi = Number(numberOne) * Number(numberTwo)
let div = Number(numberOne) / Number(numberTwo)
let rest = Number(numberOne) % Number(numberTwo)

let result  = sum % 2

alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${multi}`)
alert(`A divisão dos dois números é: ${div}`)
alert(`O resto da divisão dos dois números é: ${rest}`)

if(result == 0){
  alert(`A soma é par: ${sum}`)
} else {
  alert(`A soma é ímpar: ${sum}`)
}

if(numberOne == numberTwo){
  alert("Os números digitados são iguais!")
} else{
  alert("Os números digitados são diferentes!")
}