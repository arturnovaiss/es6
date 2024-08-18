// Passo 1: Criar o array de objetos
const alunos = [
    { nome: 'Ana', nota: 7 },
    { nome: 'Bruno', nota: 5 },
    { nome: 'Carlos', nota: 8 },
    { nome: 'Daniela', nota: 6 },
    { nome: 'Eduardo', nota: 4 },
    { nome: 'Fernanda', nota: 9 }
];

// Passo 2: Criar a função que retorna alunos com nota maior ou igual a 6
function filtrarAlunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

// Testando a função
const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);
