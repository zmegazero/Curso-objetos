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
    },
    {
      rua: 'Rua Dona Clotilde',
      numero: '71',
      complemento: null
    }]
}

const chavesObjeto = Object.keys(estudante)
console.log(chavesObjeto)

if (!chavesObjeto.includes('enderecos')) {
    console.error('é nescessário ter um endereço cadastrado')
}