const btn_ocultar = document.querySelector(".btn-ocultar");

btn_ocultar.addEventListener("click", () => {
    document.body.classList.toggle("fechar");
});