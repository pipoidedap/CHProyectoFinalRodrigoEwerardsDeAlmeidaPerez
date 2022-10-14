/* Declaro todas las variables que voy a utilizar. */
let books = [];
let form;
let inputName;
let inputGenre
let inputAutor;
let inputPrice;
let inputAmount;
let listBooks;
let buttonDeleteAll
let awake
let cashCounter
let cash = 0
let editName
let editGenre
let editAutor
let editPrice
let editAmount
let btnChange
let libroSeleccionado;

/* Declaro la clase que voy a utilizar para crear mis libros. */
class Book {
  constructor(name, genre, autor, price, amount) {
    this.id = books.length + 1
    this.name = name.toUpperCase();
    this.genre = genre;
    this.autor = autor;
    this.price = price;
    this.amount = amount;
  }
}

/* Realizo una funcion para inicializar mis elementos. */
function setUpElement() {
	form = document.getElementById("form")
	inputName = document.getElementById("inputName")
	inputGenre = document.getElementById("inputGenre")
	inputAutor = document.getElementById("inputAutor")
	inputPrice = document.getElementById("inputPrice")
	inputAmount = document.getElementById("inputAmount")
	listBooks = document.getElementById("listBooks")
	buttonDeleteAll = document.getElementById("buttonDeleteAll")
	awake = document.getElementById("awake")
	cashCounter = document.getElementById("cashCounter")
	btnChange = document.getElementById("btn-change")
	editName = document.getElementById("editName")
	editGenre = document.getElementById("editGenre")
	editAutor = document.getElementById("editAutor")
	editPrice = document.getElementById("editPrice")
	editAmount = document.getElementById("editAmount")
}