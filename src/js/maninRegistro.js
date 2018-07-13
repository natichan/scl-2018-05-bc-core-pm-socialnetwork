function registrar(){
    const email = document.getElementById('email').value;
    const password= document.getElementById('password').value;
     firebase.auth().createUserWithEmailAndPassword(email, password)
     .catch(function(error) {  
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
      });
}