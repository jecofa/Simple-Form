good = document.getElementsByClassName("loginOk");
bad = document.getElementsByClassName("loginNot");

function validate(){
    var user = document.getElementById("name").value;
    var password = document.getElementById("pass").value;
    var modal = document.getElementById("myModal");
    var closeButton = document.getElementById("close");

    if(user == "patico" && password == "123"){
        modal.style.display = "block";
        good[0].innerHTML = "Bienvenido";
    }
    else{
        modal.style.display = "block";
        bad[0].innerHTML = "Buuu";
    }
    closeButton.onclick = function () {
        modal.style.display = "none";
    }
    $("#access").submit(function(e){
        e.preventDefault();
    });
};

