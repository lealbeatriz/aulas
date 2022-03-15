function fechar () {
    document.getElementById('popup').style.display = "none"
}

function log (){
    let login = document.form.login.value;
    let senha = document.form.senha.value;

    if (login == "admin" && senha == "admin" ) {
        fechar();
    }
    else{
        document.getElementById("msg").style.display ="block";
    }
} 