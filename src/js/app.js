const massageDEscriptions = document.querySelectorAll('.services__item-flex');

if (massageDEscriptions && window.innerWidth <= 768) {
    massageDEscriptions.forEach(item => {
        const p = item.querySelector('p');
        item.after(p)
    })
}

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');
const menuClose = document.querySelector('.menu__close');

if (burger) {
    burger.addEventListener('click', function () {
        menu.classList.toggle('_open');
        burger.classList.toggle('_active')
    })
}

if (menuClose) {
    menuClose.addEventListener('click', function () {
        if (menu.classList.contains('_open')) {
            menu.classList.remove('_open');
        }
    })
}

const menuLinks = document.querySelectorAll('.header__menu a');
if (menuLinks) {
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (menu.classList.contains('_open')) {
                menu.classList.remove('_open');
                burger.classList.remove('_active')
            }
        })
    })
}

const toTopButton = document.querySelector('.to-top');
window.addEventListener('scroll', function () {
    if (toTopButton && window.scrollY >= 1000) {
        toTopButton.classList.add('_active');
    }
    else {
        toTopButton.classList.remove('_active');
    }
})