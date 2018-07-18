function registrar(){
  const email = document.getElementById('email2').value;
  const password= document.getElementById('password2').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)

  .then(listo => {
    verifemail()
  })

  .catch(function(error) {  
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
  });
}

function verifemail(){
  var user = firebase.auth().currentUser;
  user.sendEmailVerification()

  .then(function() {
    // Email sent.
    redirect()
    console.log("se envio Email")
  }).catch(function(error) {
    console.log(error)
  });
  }
  function redirectInicio() {
    location="../src/index.html";
 }
