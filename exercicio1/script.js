const nome = prompt("Qual é o seu nome?")
const comidas = alert("Digite suas 3 comidas preferidas")
const comida1 = prompt("Qual é sua comida preferida?")
const comida2 = prompt("Qual é sua sobremesa preferida?")
const comida3 = prompt("Qual é sua fruta preferida?")

const stringTemplate = `Estas são as comidas favoritas de ${nome} \n-${comida1} \n-${comida2} \n-${comida3}`
console.log(stringTemplate)

// Utilizei Template String para criar uma lista utilizando as respostas das variáveis.

const frase = ("Estas são as comidas favoritas de "+nome+`\n`+"\-"+comida1+`\n`+"\-"+comida2+`\n`+"\-"+comida3)
console.log(frase)