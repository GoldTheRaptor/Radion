
//la funzione ritorna un valore booleano veri se il username e la password sono presenti nella memoria locale del browser 
function checkLogin(){
    let username = localStorage.getItem("username")
    let password = localStorage.getItem("password")


    if(username == null){
        return false
    }else{
        return true
    }
}
