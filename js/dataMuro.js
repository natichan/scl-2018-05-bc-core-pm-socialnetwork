window.onload = () => {
    eventListeners();
    postingMessages();
    deletePost();
};

const postingContainer = document.getElementById('publications'); // contenedor de publicaciones

eventListeners = () => {
     document.getElementById('postMessage').addEventListener('click', addPost); // evento click para enviar publicaciones
     document.addEventListener('click', deletePost); // ejecutar evento borrar local storage
     //document.addEventListener('DOMContentLoaded', savedInlocalStorage); // ejecutar evento de traer los elementos guardados en el dom
}

function postingMessages(message){
    // DOM
    const postingUser = document.createElement('div'); // creo un elemento div
    const paragraph = document.createElement('p'); // creo un elemento parrafo
    const textPost = document.createTextNode(message); // creo el texto de la publicacion obtenido del mensaje escrito del usuario

    // creo los iconos que irán en la publicación
    const likeHeart = document.createElement('i'); // creo un elemento icono
    const iconHeart = document.createTextNode('favorite') // le digo que es un texto para decirle que icono es  
    const editButton = document.createElement('i');
    const iconEdit = document.createTextNode('border_color')
    const commentButton = document.createElement('i');
    const iconComment = document.createTextNode('insert_comment')
    const deleteButton = document.createElement('i');
    const iconTrash = document.createTextNode('delete_forever')

    // atributos de mis elementos
    deleteButton.setAttribute('id', 'delete');
    deleteButton.setAttribute('class', 'btn');
    likeHeart.setAttribute('class', 'material-icons btn-flat');
    deleteButton.setAttribute('class', 'material-icons btn-flat');
    editButton.setAttribute('class', 'material-icons btn-flat ');
    commentButton.setAttribute('class', 'material-icons btn-flat ');
    postingUser.setAttribute('class', 'publicationDom')

    // asigno los hijos al padre. Los entre () son los hijos del primer elemento
    commentButton.appendChild(iconComment); 
    editButton.appendChild(iconEdit);
    likeHeart.appendChild(iconHeart);
    deleteButton.appendChild(iconTrash);
    paragraph.appendChild(textPost);
    postingUser.appendChild(paragraph);
    postingUser.appendChild(commentButton);
    postingUser.appendChild(editButton);
    postingUser.appendChild(likeHeart);
    postingUser.appendChild(deleteButton);
    postingContainer.appendChild(postingUser);

    likeHeart.addEventListener("click", ()=>{
        likeHeart.classList.add("red-text");
    });
}
// función agregar publicación
const postBox = document.getElementById("postBox").value = ''; // mantener el input de publicación vacío
function addPost() {
    const posts = document.getElementById('postBox').value;
    if(posts === ''){ // si ingresa un campo vacio que no se produzca
        // que se active recordar ingresar texto
        createMessageForEmptyField();
    } else {
    document.getElementById("postBox").value = '';
    postingMessages(posts);
    //addPostToLocalStorage(posts);
    }
}
// función eliminar publicación
function deletePost(element) {
    if(element.target.id === 'delete') {
         element.target.parentElement.remove();  
    }
}
// función para crear mensaje de advertencia para que incluya texto en el input
function createMessageForEmptyField() {
    const message = document.createElement('a');
    message.setAttribute("id", "answer");
    const textAnswer = document.createTextNode('Recuerda que debes ingresar un texto o subir imagen')
    message.appendChild(textAnswer);
    postingContainer.appendChild(message);
}




