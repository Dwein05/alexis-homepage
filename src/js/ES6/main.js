document.addEventListener('DOMContentLoaded', function () { //call when DOM is ready
    let navigation_menu = document.querySelector('.menu'); //find menu container

    document.querySelector('#menu__icon').addEventListener('click', function () { // find trigger button / add event listener
        navigation_menu.classList.toggle('show'); //add/remove class
        document.body.classList.toggle('mobile_menu_open'); // fix body when menu is open
    })
});
