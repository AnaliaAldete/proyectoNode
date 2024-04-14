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
