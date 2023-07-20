//containers
let id = 0;
const modal = document.getElementById("modal");
const openBtn = document.getElementById("open-modal");
const closeBtn = document.getElementsByClassName("close")[0];
const formElement = document.getElementById('form_add_book');
const bookContainer = document.querySelector(".book-containers")

//global variables
let bookArrays = [];

//Eventos
closeBtn.addEventListener("click", closeModal)

formElement.addEventListener('submit', function (event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let autor = document.getElementById("autor").value;
    let pags = document.getElementById("pags").value;
    let isRead = document.getElementById("isread").checked;
    addBook(nombre, autor, pags, isRead);
    closeModal();
});

window.onclick = function (event) {
    if (event.target == modal) {
        modal.classList.remove("fadeIn"); // Asegúrate de que las clases de animación de entrada estén eliminadas
        modal.classList.add("fadeOut"); // Agregar clase de animación de salida
        setTimeout(function () {
            modal.style.display = "none";
            modal.classList.remove("fadeOut"); // Eliminar clase de animación de salida después de la animación
        }, 300); // Ajusta el tiempo según la duración de la animación
    }
};


main()

//main

function main() {

}


function addBook(nombre, autor, pags, isRead) {
    bookArrays.push(new Book(nombre, autor, pags, isRead))
    printBooks()
}

function addNewBookModal() {
    modal.style.display = "block";
    modal.classList.remove("fadeOut"); // Asegúrate de que las clases de animación de salida estén eliminadas
    modal.classList.add("fadeIn");
}

function closeModal() {
    modal.classList.remove("fadeIn"); // Asegúrate de que las clases de animación de entrada estén eliminadas
    modal.classList.add("fadeOut"); // Agregar clase de animación de salida
    setTimeout(function () {
        modal.style.display = "none";
        modal.classList.remove("fadeOut"); // Eliminar clase de animación de salida después de la animación
    }, 300); // Ajusta el
}

function printBooks() {
    bookContainer.innerHTML = "";

    for (let i = 0; i < bookArrays.length; i++) {
        //crearElementos que usaremos
        const gridItem = document.createElement('div');
        const gridTitle = document.createElement("h3");
        const gridAuthor = document.createElement("p");
        const gridPages = document.createElement("p");
        const gridButtons = document.createElement("div");
        const gridButtonIsRead = document.createElement("button")
        const gridButtonDelete = document.createElement("button")

        //agrego las clases a los elementos
        gridItem.classList.add('book');
        gridButtons.classList.add("buttons");
        gridButtonIsRead.classList.add("buttons-book")
        bookArrays[i].isRead ? gridButtonIsRead.classList.add("button-read") : gridButtonIsRead.classList.add("button-noRead");
        gridButtonDelete.classList.add("buttons-book");

        //arego funciones a los botones
        gridButtonDelete.addEventListener("click", () => deleteBook(bookArrays[i]))
        //agrego LA informacion adentro correspondiente en los contenedores
        gridTitle.innerHTML = bookArrays[i].name
        gridAuthor.gridAuthor = bookArrays[i].author
        gridPages.innerHTML = "Paginas " + bookArrays[i].pages
        gridButtonIsRead.innerHTML = bookArrays[i].isRead ? "Leido" : "No leido";
        gridButtonDelete.innerHTML = "Eliminar"


        //Agrego los hijos a los padres
        gridButtons.appendChild(gridButtonIsRead)
        gridButtons.appendChild(gridButtonDelete)
        gridItem.appendChild(gridTitle)
        gridItem.appendChild(gridAuthor)
        gridItem.appendChild(gridPages)
        gridItem.appendChild(gridButtons)
        bookContainer.appendChild(gridItem);

        /*
        gridItem.innerHTML = numbers2[i].number
        gridItem.setAttribute('id', numbers2[i].value)
        gridItem.addEventListener('click', seleccionarNumero)
        */
    }


}

function deleteBook(element) {
    bookArrays.splice(bookArrays.findIndex(book => book.id === element.id), 1);
    printBooks()

}










//objects
function Book(name, author, pages, isRead) {
    this.id = id++;
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}