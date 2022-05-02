function calc(){
    //entrada
    horario = document.formu.horario.value;  //name do formulario. name. value

    //processamento
    if(horario == "premium"){
        valor = 45;
    }
    else if (horario == "plus"){
        valor = 50;
    }
    else{
        valor = 25;
    }
    
    //saída
    document.getElementById('total').value = valor;
    
}

function opcionais(valor,marcado){
    //entrada
    total = document.getElementById('total').value;
    
    //processamento
    if (marcado){
      total = Number(total) + Number(valor);
    }
    else{
      total = Number(total) - Number(valor);
      
    }
    
    //saída
    document.getElementById('total').value = total;
}

function Turma(){
    //entrada
    tema = document.getElementById('tema').value;
    

   
 

    //saída
    document.body.style.backgroundImage = "url(" + newFundo + ")";
    document.getElementById('foto').src = newFoto;
    document.getElementById('titulo').value = titulo;
    document.getElementById('titulo').style.color = cor;
    document.body.style.color = cor;

    document.getElementById('foto').style.height = altura;
    document.getElementById('foto').style.right = right;
    document.getElementById('foto').style.bottom = bottom;

}

function alerta(){
    //entrada
    total = document.getElementById('total').value;

    //processamento
    if (total < 1500){
        msg = "Selecione sua turma."
    }
    else{
        msg = "Obrigada pela Preferêcia. ";
    
        if (total >= 2500) {
            total = total * 0.9;
            msg += "Você recebeu um desconto de 10%. ";
        }
  
        msg += "Valor a Pagar R$ " + total;
  
    }
    
   //saída
   //alert(msg);
    
    document.getElementById('mensagem').value = msg;
    $('#alerta').modal('show');
    
}
