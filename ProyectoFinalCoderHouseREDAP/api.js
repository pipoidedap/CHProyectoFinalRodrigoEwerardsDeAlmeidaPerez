const url = 'https://63449b1bdcae733e8fe226df.mockapi.io/api/v1/'

/* Cargar libros */
const cargarApi = async () => {
	try {
		const response = await fetch (`${url}books`, {
			method: 'GET'
		})
		const data = await response.json()
		books = [...data]
		showBooks()
		console.log(books)
	} catch (error) {
		console.log(error)
	}
} 

/* Cargar un libro nuevo */
const nuevoLibro = async (newBook) => {
	try {
		const response = await fetch (`${url}books`, {
			method: 'POST',
			body: JSON.stringify(newBook)
		})
		awake.innerHTML = ''
		books.push(newBook)
		console.log(response)
		form.reset()
		showBooks()
	} catch (error) {
		console.log(error)
	}
}

/* Eliminar un libro */
const eliminarLibro = async (idBook) => {
	try {
		const response = await fetch (`${url}/books/${idBook}`, {
			method: 'DELETE'
		})
		console.log(response)
		let deleteColumn = document.getElementById(`list-${idBook}`)
		let deleteIndex = books.findIndex((book) => Number(book.id) === Number(idBook))
		books.splice(deleteIndex, 1)
		deleteColumn.remove()
	} catch (error) {
		console.log(error)
	}
}

/* Sumar un libro */
const addBook = async (idBook) => {
	try {
		let bookAdd = books.find((book) => Number(book.id) === Number(idBook))
		bookAdd ? bookAdd.amount++ : null
		const response = await fetch (`${url}/books/${idBook}`, {
			method: 'PUT',
			body: JSON.stringify(bookAdd)
		})
		console.log(response)
		showBooks()
	} catch (error) {
		console.log(error)
	}
}

/* Restar un libro */
const reduceBook = async (idBook) => {
	try {
		let bookReduce = books.find((book) => Number(book.id) === Number(idBook))
		bookReduce.amount > 0 ? bookReduce.amount-- : null
		const response = await fetch(`${url}/books/${idBook}/`, {
			method: 'PUT',
			body: JSON.stringify(bookReduce),
		})
		console.log(response)
		showBooks()
	} catch (error) {
		console.log(error)
	}
}

/* Vender un libro */
const sellBook = async (idBook) => {
	try {
		let bookSell = books.find((book) => Number(book.id) === Number(idBook))
		cash += bookSell.price
		bookSell.amount--
		const response = await fetch (`${url}/books/${idBook}`, {
			method: 'PUT',
			body: JSON.stringify(bookSell)
		})
		cashCounter.innerHTML = `$ ${cash}`
		console.log(response)
		showBooks()
	} catch (error) {
		console.log(error)
	}
}

/* Boton para el modal */
const editarLibro = async () => {
	try {
		const response = await fetch (`${url}books/${libroSeleccionado.id}`, {
			method: 'PUT',
			body: JSON.stringify(
				{
					...libroSeleccionado,
					name: editName.value,
					autor: editAutor.value,
					gerne: editGenre.value,
					price: editPrice.value,
					amount: editAmount.value
				}
			)
		})
		console.log(response)
		showBooks()
	} catch (error) {
		console.log(error)
	}
}