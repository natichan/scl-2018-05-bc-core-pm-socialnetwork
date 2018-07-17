// se crea una funcion que al pulsar el boton de inicio de sesión  verifica Email y password en firebase
function iniciarSesion(){
  
    const email2 = document.getElementById('email2').value;// input email
    const password2 = document.getElementById('password2').value;// imput contraseña

firebase.auth().signInWithEmailAndPassword(email2, password2)// función de firebase para auntenticar email y contraseña
.catch(function(error) {
    // Se manejan los errores de autenticación.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
  });
}
// funcion para observar si el usuario existe o no
function observ(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // El usuario ha iniciado sesión.
      console.log( ' El usuario existe');
      //ver()
      var displayName = user.displayName;
      var email = user.email;
      console.log(user.emailVerified)
     console.log(user)
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
    } else {
      // El usuario está desconectado
      console.log(' El usuario no existe');
     cerrarSesion();
    }
  });
}

/// funcion para verificar si el usuario inicio sesion correctamente 
/*function ver(){
console.log("pulsaste el botton cerrar sesión");

}*/

//  para autenticar cerrrar sesion 
function cerrarSesion(){
  firebase.auth().signOut()
  .then(function(){
    console.log('Cerrando sesión....');
  
  })
  .catch(function(error){
    console.log(error);
  })
}
//iniciar sesion con google
  function googleLoginWithFirebase(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    }
    
  //facebook
function facebookLoginWithFirebase(){
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  }