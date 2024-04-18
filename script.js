const btnMenuHamburguesa = document.getElementById("btn_menu_hamburguesa");
const btnCerrarMenu = document.getElementById("btn_cerrar_menu");
const navbar = document.getElementById("navbar");

//funcionalidad menu hamburguesa
btnMenuHamburguesa.addEventListener("click", () => {
	navbar.classList.add("visible");
});

btnCerrarMenu.addEventListener("click", () => {
	navbar.classList.remove("visible");
});


//form ----------------------------------------------------------------------------------------

const submitForm = document.getElementById("form-submit");
const n = document.getElementById("nombre");
const mail = document.getElementById("correo");
const message = document.getElementById("mensaje");
const person = document.getElementById("integrante");
const checkbox = document.getElementById("check");

function errorHandler (value) {
	value.nextElementSibling.textContent= "el campo no puede estar vacio"
	value.classList.remove("rm-error")
	value.classList.add("error")	
}

submitForm.addEventListener("submit", (event) => {
	event.preventDefault();	
	alert('Mensaje enviado con exito...')
	n.value = "";
	errorHandler(n);
	mail.value = "";
	errorHandler(mail);
	message.value = "";
	errorHandler(message);
	person.value = "";
	errorHandler(person);
	checkbox.checked = false;
	errorHandler(checkbox);
});

const camposFormulario = document.querySelectorAll("[required]")

camposFormulario.forEach((campo)=>{
	campo.addEventListener("blur",()=> verificarCampor(campo))
	campo.addEventListener("invalid", evento => evento.preventDefault())
})

function verificarCampor(campo){
	if(campo.validity.valueMissing == false){
		const errorMenssage= campo.nextElementSibling
		errorMenssage.textContent= ""
		campo.classList.remove("error")
		campo.classList.add("rm-error")
		console.log('estoy en valueMissin');
	}else {
		errorHandler(campo)
	}
}