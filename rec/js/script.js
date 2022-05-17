function calcularpedido() {
    //entrada
   tipoCorte = document.getElementById('corte')
    modelobarba= document.getElementById('barba')
    batata = document.getElementById('depilacao')
    quantCorte = document.getElementById('corte')
    quantBarba= document.getElementById('barba')
    quantDepilacao = document.getElementById('depilacao')

    //processameno
    //tipo de corte
    if(tipoCorte=="com tesoura") {
        precoCorte = "60.00"
    }
    
    else if(tipoCorte== "com maquina") {
        precoCorte ="45.00"
    }
    else{
        precoCorte="52.00"
    }

    //modelo barba
    if(barba=="simples"){
        precoBarba = "30.00"
    }

    else {
        precoBarba = "45.00"
    }

      //depilacao
    if(depilacao=="cera quente"){
        precoDepilacao = "300.00"
    }

    else if (depilacao == "cera fria"){
        precoDepilacao = "250.00"
    }

    else {
        precoDepilacao = "850.00"
    }
     
    Total = (quantTipocorte*precoCorte) + (quantBarba*precoBarba) + (quantDepilacao*precoDepilacao),
    //saida
}