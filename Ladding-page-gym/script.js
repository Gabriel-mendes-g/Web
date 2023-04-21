const btnMobile = document.getElementById("btn-mobile");

function abrir(event) {

    if (event.type === "touchstart") event.preventDefault();
    const divHeader = document.getElementById("div-header");
    divHeader.classList.toggle("active");
}


btnMobile.addEventListener("click", abrir);
btnMobile.addEventListener("touchstart", abrir);