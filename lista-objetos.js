const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '123456789101',
    turma: 'Java Script',
    bolsista: true,
    telefones: ['2345678', '40028922'],
    enderecos: [{
      rua: 'Flor da Montanha',
      numero: '176',
      complemento: 'apto 43'
    }]
}

estudante.enderecos.push({
    rua: 'Flor Da Serra',
    numero: '69',
    complemento: null
})

//console.log(estudante.enderecos);
//console.log(estudante.enderecos[1]);

const listaEnderecosComComplemento = estudante.enderecos.filter((enderecos) => enderecos.complemento)

console.log(listaEnderecosComComplemento)