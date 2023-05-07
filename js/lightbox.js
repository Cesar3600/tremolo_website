
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
    btnclose.style.display = "none";
    icon_close.style.display = "none";
    btnmenu.style.display = "none";
    icon_menu.style.display = "none";
    image_hero.src = "./images/frontal.jpg"

  } else {
    btnmenu.style.display = "block";
    icon_menu.style.display = "block";
    image_hero.src = "./images/BANDA.jpg"


  }
});



//lightbox

document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.querySelector(".tre__galery--lightbox");
  const lightboxContent = document.querySelector(".tre__galery--lightbox-content img");
  const images = document.querySelectorAll(".tre__galery--albums--items img");

  images.forEach(function (image) {
    image.addEventListener("click", function () {
      lightbox.style.display = "flex";
      lightboxContent.src = this.src;
    });
  });

  lightbox.addEventListener("click", function (e) {
    if (e.target === this || e.target.classList.contains("tre__galery--lightbox-close")) {
      lightbox.style.display = "none";
      lightboxContent.src = "";
    }
  });
});

