/* Creo una funcion para ver los libros que existen. */
function showBooks(){
	listBooks.innerHTML = ""
	books.forEach((book) => {
		let list = document.createElement("tr")
		list.id = `list-${book.id}`
		list.innerHTML = `
			<td class="centrado">
				<b>${book.id}</b>
			</td>
			<td class="centrado">
				<b>${book.name}</b>
			</td>
			<td class="centrado">
				<b>${book.genre}</b>
			</td>
			<td class="centrado">
				<b>${book.autor}</b>
			</td>
			<td class="centrado">
				<b>$ ${book.price}</b>
			</td>
			<td class="centrado">
				<b>${book.amount}</b>
			</td>
			<td class="centrado">
				<button class="btn btn-primary" id="buttonAdd-${book.id}">
					+
				</button>
			</td>
			<td class="centrado">
				<button class="btn btn-primary" id="buttonSubtract-${book.id}">
					-
				</button>
			</td>
			<td class="centrado">
				<button class="btn btn-success" id="buttonSell-${book.id}">
					Vender
				</button>
			</td>
			<td class="centrado" id="buttonEdit-${book.id}">
				<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#miModal">
					Editar
				</button>
			</td>
			<td class="centrado">
				<button class="btn btn-danger" id="buttonDelete-${book.id}">
					Eliminar
				</button>
			</td>
		`
		listBooks.append(list)

		let buttonAdd = document.getElementById(`buttonAdd-${book.id}`)
		buttonAdd.onclick = () => addBook(book.id)

		let buttonSubtract = document.getElementById(`buttonSubtract-${book.id}`)
		buttonSubtract.onclick = () => reduceBook(book.id)

		let buttonSell = document.getElementById(`buttonSell-${book.id}`)
		buttonSell.onclick = () => sellBook(book.id)

		let buttonEdit = document.getElementById(`buttonEdit-${book.id}`)
		buttonEdit.onclick = () => editBook(book.id)

		let buttonDelete = document.getElementById(`buttonDelete-${book.id}`)
		buttonDelete.onclick = () => eliminarLibro(book.id)
	})
}

/* Esta funcion rellena el formulario del modal con los datos del libro seleccionado*/
function editBook(idBook) {
	libroSeleccionado = books.find((book) => Number(book.id) === Number(idBook))
	btnChange.onclick = editarLibro;

	editName.value = libroSeleccionado.name
	editGenre.value = libroSeleccionado.genre
	editAutor.value = libroSeleccionado.autor
	editPrice.value = libroSeleccionado.price
	editAmount.value = libroSeleccionado.amount
}