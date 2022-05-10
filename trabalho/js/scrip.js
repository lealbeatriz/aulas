function calcularpedido() {
    //entrada
    sanduiche = document.getElementById('sanduiche')
    bebida = document.getElementById('bebida')
    batata = document.getElementById('batata')
    quantSanduiche = document.getElementById('sanduiche')
    quantBebida = document.getElementById('bebida')
    quantBatata = document.getElementById('batata')

    //processameno
    //sanduiche
    if(sanduiche=="Big Mac") {
        precoSanduiche = "14,90"
    }
    
    else if(sanduiche== "Quarteirão") {
        precoSanduiche ="13.90"
    }
    else{
        precoSanduiche="12.90"
    }

    //bebida
    if(bebida=="P"){
        precoBebida = "5.90"
    }

    else if (bebida == "M"){
        precoBebida = "6.90"
    }

    else {
        precoBebida = "7.90"
    }

    //batata
    if(batata=="P"){
        precoBebida = "5.90"
    }

    else if (batata == "M"){
        precoBebida = "6.90"
    }

    else {
        precoBebida = "7.90"
    }
     
    Total = (quantSanduiche*precoSanduiche) + (quantBebida*precoBebida) + (quantBatata*precoBatata),
    //saida
}