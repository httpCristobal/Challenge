// Array para almacenar los nombres de los amigos
let listaDeAmigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value.trim(); // Eliminar espacios en blanco

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array
    listaDeAmigos.push(nombre);

    // Actualizar la lista en la interfaz
    actualizarLista();

    // Limpiar el campo de entrada
    inputNombre.value = "";
}

function actualizarLista() {
    // Obtener el elemento de la lista
    let listaHTML = document.getElementById("listaAmigos");

    // Limpiar la lista existente para evitar duplicados
    listaHTML.innerHTML = "";

    // Iterar sobre el array listaDeAmigos y agregar cada amigo como un <li>
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = listaDeAmigos[i]; // Asignar el nombre del amigo
        listaHTML.appendChild(item); // Agregar el <li> a la lista
    }
}

function sortearAmigo() {
    // Verificar si hay amigos en la lista
    if (listaDeAmigos.length === 0) {
        alert("Por favor, agrega al menos un amigo antes de sortear.");
        return;
    }

    // Generar un índice aleatorio basado en la longitud del array
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

    // Obtener el nombre del amigo sorteado
    let amigoSorteado = listaDeAmigos[indiceAleatorio];

    // Mostrar el resultado en la lista de resultados
    let resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = `<li>${amigoSorteado}</li>`;
}


