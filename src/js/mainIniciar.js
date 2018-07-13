
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
function observ(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log( ' El usuario existe');
            ver()
          var displayName = user.displayName;
          var email = user.email;
        // console.log(user)
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
        } else {
          // User is signed out.
          console.log(' El usuario no existe');
        }
      });
}
observ();
function ver(){
    let pag = document.getElementById('pag');
    pag.innerHTML = `
    <p> Iniciaste Sesión </p>
    <button onclick="cerrarSesion()">Cerrar Sesión</button>
    `;
}
function cerrarSesion(){
    firebase.auth().signOut()
    .then(function(){
        console.log('Cerrando sesión....');
        pag.innerHTML= '';
    })
    .catch(function(error){
            console.log(error);
    })
}