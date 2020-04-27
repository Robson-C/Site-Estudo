let menu = document.querySelector("#menu")

function abrirMenu() {
    if(menu.classList == "esconde"){
        menu.classList.remove("esconde");
        menu.classList.add("mostra");
    }else if(menu.classList == "mostra"){
        menu.classList.remove("mostra");
        menu.classList.add("esconde");
    }
}