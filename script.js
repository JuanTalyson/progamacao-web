let dom = document

let titulo = document.getElementById("titulo").value;
let nome = document.getElementById("nome").value;

console.log(titulo); 

function submit(){
    let nome = document.getElementById ("nome").value;
    let cpf = document.getElementById ("idade").value;

    alert("Erro na pagina!");
    console.log(nome);
    console.log(validaCPF(cpf));
}

function validaCPF (cpf) {            
    if(cpf = ""){ 
        alert("Campo CPF não pode ser vazio"); 
        return false; 
    }

    return true; 
}
