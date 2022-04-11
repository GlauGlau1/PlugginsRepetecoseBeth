window.onload = function(){

document.querySelector("#entrar").addEventListener("click", function(){
        let nome = document.querySelector("#nome");
        function retorno(){
        }
        navigator.notification.alert("Seja muito bem vindo, "+ nome.value  , retorno, "Bem vindo(a)!", "Obrigado");
    });

    document.querySelector("#vibrar").addEventListener("click", function(){
            navigator.vibrate(2000);
                 navigator.app.exitApp(); 
    });

        document.querySelector("#verificar").addEventListener("click", function(){  
        let idade = parseInt(document.querySelector("#idade").value);
        function retorno(){

        }

        if(idade<18){
        
            if(idade<0){
                navigator.vibrate(3000);
            }else{
                navigator.notification.beep(idade);
            }
        
        }else if(idade>=18){
            navigator.notification.confirm("Qual o seu gênero?", onConfirm, "Pergunta 2", ["Homem", "Mulher"]);
            function onConfirm(buttonIndex){
                if(buttonIndex == 1){
                    navigator.notification.alert("Lembre-se de se alistar seu vagabundo, é obrigatorio servir o país!", retorno, "Já avisando!", "Ok, obrigado!");
                } 
                else{
                    navigator.notification.alert("Parabéns, já pode tirar a habilitação", retorno, "Já avisando!", "Ok, obrigada!");
                }
        }
    }
    });
}