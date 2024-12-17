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

function exibirTelefones(telefone1, telefone2) {
    console.log(`Ligar para ${telefone1}`);
    console.log(`Ligar para ${telefone2}`);
}

exibirTelefones(estudante.telefones[0], estudante.telefones[1]);
exibirTelefones(...estudante.telefones);

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}

console.log(dadosEnvio)