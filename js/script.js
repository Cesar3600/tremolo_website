
btnmenu = document.getElementById('menu')
btnmenu.addEventListener("click", mostrar_menu)
icon_menu = document.querySelector("#menu i")


btnclose = document.getElementById('close')
btnclose.addEventListener("click", ocultar_menu)
icon_close = document.querySelector("#close i")

nav = document.getElementById("nav")
image_hero = document.querySelector(".tre__ini--hero img")

function mostrar_menu(event) {
  event.preventDefault();
  nav.style.left = "0%";
  btnmenu.style.display = "none";
  icon_menu.style.display = "none";
  btnclose.style.display = "block";
  icon_close.style.display = "block";
}


function ocultar_menu(event) {
  event.preventDefault();
  nav.style.left = "100%";
  btnclose.style.display = "none";
  icon_close.style.display = "none";
  btnmenu.style.display = "block";
  icon_menu.style.display = "block";
}







window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    console.log("111111111111111111")
    btnclose.style.display = "none";
    icon_close.style.display = "none";
    btnmenu.style.display = "none";
    icon_menu.style.display = "none";
    image_hero.src = "./images/frontal.jpg"



  } else {
    console.log("22222222222222222222")
    btnmenu.style.display = "block";
    icon_menu.style.display = "block";
    image_hero.src = "./images/BANDA.jpg"


  }
});





/* // BOTON DE MENU
btnmenu = document.getElementById('menu')
btnmenu.addEventListener("click", mostrar_menu)


//BOTON DE CERRADO
btnclose = document.getElementById('close')
btnclose.addEventListener("click", ocultar_menu)

//NAVEGADOR
let nav = document.getElementById("nav")


//ACCIONES

function mostrar_menu(e) {
  e.preventDefault()
  console.log("mostrar menu")
  btnmenu.classList.add('hide')
  btnclose.classList.add('show')

}
function ocultar_menu() {
  e.preventDefault()
  console.log("ocultar menu")
  btnmenu.classList.add('show')
  btnclose.classList.add('hide')

}


window.addEventListener('resize', () => {
  if (window.innerWidth > 767) {

    close.classList.add('hide');
    menu.classList.add('hide');
  } else {

    menu.classList.remove('hide');
    close.classList.add('hide');
  }
}); */

