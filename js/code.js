function validate(){
    var user = document.getElementById("name").value;
    var password = document.getElementById("pass").value;
    var modal = document.getElementById("myModal");

    if(user == "patico" && password == "123"){
        modal.style.display = "block";
    }
    else{
        alert("buu bad user or password");
        modal.style.display = "block";
    }
    return false;
};