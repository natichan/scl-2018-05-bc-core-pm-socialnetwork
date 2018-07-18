window.onload = () => {
    showLocalStorage();
}; 
// función para agregar elementos al localStorage
function addPostToLocalStorage(postsMessagesUsers) {
    let posts = getPostInLocalStorage();
    // console.log(posts);
    // agrego la nueva publicación al array
    posts.push(postsMessagesUsers);
    // guardar en local storage como una cadena JSON
    localStorage.setItem('posts', JSON.stringify(posts));    
};

// función para comprobar que hay elementos en localStorage con getItem
function getPostInLocalStorage() {
    let posts;
    // si el valor del dato guardado en la clave de posts del localStorage es igual a null array vacio 
    if(localStorage.getItem('posts') === null) {
         posts = []; 
    } else {
        // devolver los valores del post guardados en el localStorage
         posts = JSON.parse(localStorage.getItem('posts'));
         //console.log(posts); // muestra las publicaciones guardadas en un array
    }
    return posts;
};
// Mostrar datos de localStorage en la página
function showLocalStorage() {
    let posts;
    posts = getPostInLocalStorage();
    //console.log(posts);
    posts.forEach(function(message) {
        //console.log(message);
        postingMessages(message);    
    });
};