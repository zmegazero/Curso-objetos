const biblioteca = [
    {id: 1, titulo: 'Ozob', autor: 'Leonel Caldela', anoPublicado: 2015},
    {id: 2, titulo: 'O Crânio e o corvo', autor: 'Leonel Caldela', anoPublicado: 2014},
    {id: 3, titulo: 'Deusa no Labirinto', autor: 'Karen Soares', anoPublicado: 2018}
]

function encontrarLivroPorId(id) {
    return biblioteca.find(livro => livro.id === id) || null;
}