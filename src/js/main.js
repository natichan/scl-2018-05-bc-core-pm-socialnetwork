
function IniciarSesion(){
    const email2 = document.getElementById('email2').value;
    const password2 = document.getElementById('password2').value;
firebase.auth().signInWithEmailAndPassword(email2, password2)

.catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
  });
}

