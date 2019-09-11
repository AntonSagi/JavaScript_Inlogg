
//  Kolla ifall användaren är inloggad sen tidigare 
window.onload = function(){
    var checkAccess = localStorage.getItem("Access");
    if (checkAccess === "true"){

        var clearLogin = document.getElementById("loginContent");
        clearLogin.style.display = "none";

        this.myLoggedIn();
    }
}


var myUsername = "test"; //Användarnamn
var myPasswd = "1234";  //Lösenord

var myLogin = document.getElementById("loginBtn");

myLogin.addEventListener("click", myAccess)

//Kolla att anv & lösen är korrekt och "generera" ny sida om allt är korrekt
function myAccess(){
    var myUserInput = document.getElementById("username").value;
    var myPasswdInput = document.getElementById("psswd").value;

    if (myUserInput === myUsername && myPasswdInput === myPasswd){
        var clearLogin = document.getElementById("loginContent");
        clearLogin.style.display = "none";
        localStorage.setItem("Access", "true");

        myLoggedIn();
    }

    else {
        var clearLogin = document.getElementById("loginContent");
        clearLogin.style.display = "none";

        var wrongPsswd = document.createElement("h1");
        wrongPsswd.innerHTML = "Du har angivit ett felaktigt lösenord eller användarnamn, vänligen försök igen!";
        document.body.appendChild(wrongPsswd);

        var rtryBtn = document.createElement("button");
        rtryBtn.innerHTML = "Försök igen!";
        document.body.appendChild(rtryBtn);

        rtryBtn.addEventListener("click", function(){
            wrongPsswd.style.display = "none";
            rtryBtn.style.display = "none";
            clearLogin.style.display = "block";
        });
    }
}

//Generera den "inloggade" hemsidan
function myLoggedIn(){
    var myTitle = document.createElement("h1");
        myTitle.innerHTML = "Du är inloggad, Välkommen!";
        document.body.appendChild(myTitle);

    var myLogOut = document.createElement("button");
        myLogOut.innerHTML = "Logga ut";
        myLogOut.id = "myLogOut";
        document.body.appendChild(myLogOut);

    myLogOut.addEventListener("click", function(){
            myTitle.style.display = "none";
            myLogOut.style.display = "none";
            var clearLogin = document.getElementById("loginContent");
            clearLogin.style.display = "block";

            localStorage.clear();
        });
}
