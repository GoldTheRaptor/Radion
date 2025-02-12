function login(){
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let confermaPassword = document.getElementById("conferma-password").value;
    let termini = document.getElementById("termini").checked

   if(!username){
        alert("l'username è obbligatorio")
   }else if(!password){
        alert("la password é obbligatoria")
   }else if(confermaPassword != password){
        alert("le password non corrispondono")
   }else if(!termini){
       alert("devi accettare i termini d'uso")
   }else{

    localStorage.setItem("username", username)
    localStorage.setItem("password", password)
    location.reload()
   }
}
function checkLoginValidation(){
    let username = localStorage.getItem("username")
    let loggedIn = document.getElementById("logged-in")
    let notLoggedIn = document.getElementById("login-box")  
    let usernameBox = document.getElementById("username-box")


    if(checkLogin() === true){
        loggedIn.style.display = "flex"
        notLoggedIn.style.display = "none"

        usernameBox.innerHTML = username
    }else{
        loggedIn.style.display = "none"
        notLoggedIn.style.display = "flex"
    }
}


function clearData(){
    localStorage.removeItem("username")
    localStorage.removeItem("password")
    location.reload()
}


window.onload = function(){
   checkLoginValidation() 
} 
