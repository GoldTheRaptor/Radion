function closeHeader(){
    let header = document.getElementById("news-header")
    header.style.display = "none";
}

function checkLoginHeader(){
    let username = localStorage.getItem("username")
    let navBarUsername = document.getElementById("navBarUsername")


    if(checkLogin() === true){
        closeHeader()
    }

    if(checkLogin() === true){  
        navBarUsername.innerHTML = username
    }
}





window.onload = function(){
    checkLoginHeader()
}