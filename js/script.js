
btnmenu = document.getElementById('menu')
btnmenu.addEventListener("click", mostrar_menu)

btnclose = document.getElementById('close')
btnclose.addEventListener("click", ocultar_menu)

nav = document.getElementById("nav")


function mostrar_menu(event) {
  event.preventDefault();
  nav.style.left = "0%";
  btnmenu.style.display = "none";
  btnclose.style.display = "block";
}

function ocultar_menu(event) {
  event.preventDefault();
  nav.style.left = "100%";
  btnclose.style.display = "none"
  btnmenu.style.display = "block"
}