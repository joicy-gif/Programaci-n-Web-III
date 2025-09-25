function obtenerUsuario(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: id, nombre: 'Juan' });
        }, 1000);
    });
}

function obtenerPosts(usuarioId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['Post 1', 'Post 2', 'Post 3']);
        }, 1000);
    });
}

function obtenerComentarios(postId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['Comentario 1', 'Comentario 2']);
        }, 1000);
    });
}
obtenerUsuario(1)
    .then(usuario => {
        console.log('Usuario:', usuario);
        return obtenerPosts(usuario.id);
    })
    .then(posts => {
        console.log('Posts:', posts);
        return obtenerComentarios(posts[0]);
    })
    .then(comentarios => {
        console.log('Comentarios:', comentarios);
    })
    .catch(error => {
        console.error('Error:', error);
    });