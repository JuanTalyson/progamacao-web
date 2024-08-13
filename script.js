let dom = document

let titulo = document.getElementById("titulo").value;
let nome = document.getElementById("nome").value;

console.log(titulo); 

function submit(){
    let nome = document.getElementById ("nome").value;
    let idade = document.getElementById ("idade").value;
    let cpf = document.getElementById ("cpf").value;

    
    console.log(nome);
    console.log(validaCPF(cpf));
}

function validaCPF (cpf) {          

    if(cpf == ""){ 
        alert("Campo CPF não pode ser vazio"); 
        return false; 
    }
    
    cpf = cpf.trim();

    if(/[a-zA-Z]/.test (cpf)){
        alert("CPF não pode conter letras");
        return false; 
    }

    if(/[\d.-]+$/.test(cpf)){
        console.log("O CPF só tem números ou ponto ou hífen");
        return true;
    }
    return true; 
}
