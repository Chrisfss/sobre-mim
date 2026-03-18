    
    
    document.getElementById("formContato").addEventListener("submit", function(event){

    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let mensagem = document.getElementById("msg");

    if(nome.value.trim()== "" || email.value.trim()== "" || mensagem.value.trim()== ""){
        alert("Preencha todos os campos!");
        return;
    }

    alert("Mensagem enviada com sucesso!");

});