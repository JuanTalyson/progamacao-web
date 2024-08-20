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

    if(!/^[\d.-]+$/.test(cpf)){
        console.log("O CPF só tem números ou ponto ou hífen");
        return false;
    }

    if(cpf.length != 11 && cpf.length != 14){
        alert("Formarto inválido!");
        return false;
    }
    
    // Interar 9 primeiros dígitos, respeitando a seguinte regra: 
    let soma = 0;

    for(let i = 1; i <=9; i++) {
        // console.log(cpf.charAt(i-1));
        soma = soma + (cpf.charAt(i-1) * (10 - (i-1)));
        // recuperar o caractere i-1 da string cpf
    }
    console.log(soma);
    let resto = soma % 11;
    if(resto < 2 ){
        if(cpf.charAt(9) != 0){
            alert("CPF inválido!");
            return false;
        // verificar se o primeiro digito verificador 
        // (10º digito do cpf) é zero 
        // 10º digito do cpf é recuperado com o cpf.charAt(9)
        }
        return true;
    }

    let digitoVerificador = 1 - resto;

   
    

    // Continuar validção 
    // Formatos CPFs válidos
    // 123.456.789-10
    // 12345678910
    
    return true; 
}
