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

for (let chave in estudante) {
    const tipo = typeof estudante[chave];
    if (tipo !== 'object' && tipo !== 'function') {
      const texto = `a chave ${chave} tem o valor ${estudante[chave]}`
      console.log(texto);
    } 
}
