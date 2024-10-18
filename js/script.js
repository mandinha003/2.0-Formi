let alunos = [];

function AddAluno(){
    aluno = {
        "nome": document.getElementById("name").value,
        "nasc": document.getElementById("nasc").value,
        "email": document.getElementById("email").value,
        "curso": document.getElementById("curso").value
    }

    alunos.push(aluno);
    limparCampos();
    
    
}

function ViewAlunos(){
console.log(aluno);
}

function limparCampos(){
    document.getElementById("name").value = "";
    document.getElementById("nasc").value = "";
    document.getElementById("email").value = "";
    document.getElementById("curso").value = "";
}

function ViewName(){
    for(let i = 0; i < alunos.length; i++){
        console.log(alunos[i].nome);
    }
}

function UpdateCurso(){
    for(let i = 0; i < alunos.length; i++){
        alunos[i].curso = "informática";
    }

}

