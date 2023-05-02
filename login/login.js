username = "dhonorato@olmrio.com"
password = "123"

form = document.getElementById("login-form");
form.addEventListener("submit", (event) => 
{
    writtenUsername = document.getElementById("username-input").value;
    writtenPassword = document.getElementById("password-input").value
    if(writtenUsername == username && writtenPassword == password){
        event.preventDefault();
        alert("Correct Credentials")
    }
    else{
        event.preventDefault();
        alertCredentials = document.getElementById("wrong-credentials");
        alertCredentials.style.display = "block";
    }
});