const USER_NAME = 'Jeka'

document.getElementById("menu__icon").onclick = function() {open()};

function open() {
    document.getElementById("menu__links").classList.toggle("show");
}