const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '123456789101',
    turma: 'Java Script',
    bolsista: true,
    telefones: ['2345678', '40028922'],
    media: 7.5,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? true : false
    },
    enderecos: [{
      rua: 'Flor da Montanha',
      numero: '176',
      complemento: 'apto 43'
    }]
}


console.log(estudante.estaAprovado(7));