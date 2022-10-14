/* Realizo una funcion para ingresar un libro en el formulario y sumarlo a la lista de libros existentes. */
function trueForm(event) {
	event.preventDefault()
	let name = inputName.value
	let genre = inputGenre.value
	let autor = inputAutor.value
	let price = parseFloat(inputPrice.value)
	let amount = parseInt(inputAmount.value)
	if(name != ""){
		if(autor != ""){
			if(genre != ""){
				if(!isNaN(amount)){
					if(!isNaN(price)){
						let newBook = new Book(
							name,
							genre,
							autor,
							price,
							amount
						);
						nuevoLibro(newBook)
					}else{formIncomplete()}
				}else{formIncomplete()}
			}else{formIncomplete()}
		}else{formIncomplete()}
	}else{formIncomplete()}
}

/* Realizo una funcion para enviar mi formulario. */
function setUpEvent(){
	form.onsubmit = (event) => trueForm(event)
};

/* Realizo una funcion para que en caso de que el formulario este incompleto, alerte. */
function formIncomplete() {
	awake.innerHTML = 'Olvido ingresar un dato o es invalido, vuelva a revisar el formulario.'
	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
		  toast.addEventListener('mouseenter', Swal.stopTimer)
		  toast.addEventListener('mouseleave', Swal.resumeTimer)
		}
	})
	Toast.fire({
		icon: 'error',
		title: 'No ingreso todos los datos.'
	})
}