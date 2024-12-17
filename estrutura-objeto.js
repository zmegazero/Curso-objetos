const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '123456789101',
    turma: 'Java Script'
}

console.log(estudante.nome);
console.log(`o nome de estudante é ${estudante.nome}`);
console.log(`os três primeiros numeros do cpf são ${estudante.cpf.substring(0, 3)}`);