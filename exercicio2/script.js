const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const contando = minhaString.length
const string2 = "Eu não sou supersticioso, mas sou um pouco ________.";
const contando1 = string2.length

console.log(minhaString+contando)
console.log(string2+contando1)

// Utilizei a cópia da string inicial porque não encontrei uma forma de remover os espaços do FINAL da string. 

const substituindo = (string2.replace("________","sticioso"))
console.log(substituindo)

// Utilizei a cópia da string inicial porque não encontrei uma forma de substituir todos os _ de uma vez na string.  