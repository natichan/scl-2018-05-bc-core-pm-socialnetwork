
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


  // Eliminar tareas de Local Storaghttps://github.com/MilelyM/scl-2018-05-bc-core-pm-socialnetwork/pull/21/conflict?name=src%252Fjs%252FlocalStorage.js&ancestor_oid=201e837c9561e5250e45e66f1ec1ab94adae38f5&base_oid=9c9198c5039b717c15655205f744b29ae16559fd&head_oid=d8d0546f120f085ddf8d0dae60e72346ae799a57e
 function deletePostLocalStorage(post) {
    //console.log(post);
    
    
    //la función recibe todo el texto de la tarea más el icono y procede a cortar el texto, dejando solo el texto de la tarea, para eliminarla del localStorage
    let deletePost = post.substring(0, post.length -50); 
    let post = obtenerTareasLocalStorage();
    //en el forEach, compara la tarea recibida con lo existente en local storage y quita la tarea a eliminar
    posts.forEach(function(textoArr, index) {
        if(deletePost === textoArr) {
              posts.splice(index, 1);
              //console.log(posts);
               
        }
    })
    //convierte el arreglo nuevo (con la tarea eliminada) en string para volver a guardarlo en local storage
    localStorage.setItem('posts', JSON.stringify(posts));
  }


