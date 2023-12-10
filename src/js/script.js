let scrollPosition = window.scrollY

const header = document.querySelector("header")

//Сколько пикселей нужно проскролить, чтобы добавить класс. Можете изменить значение
const scrollChange = 1

//Отслеживаем событие "скролл"
window.addEventListener('scroll', () => { 
  scrollPosition = window.scrollY;

  //Если прокрутили больше, чем мы указали в переменной scrollChange, то выполняется функция добавления класса
  if (scrollPosition >= scrollChange) { 
    header.classList.add("border")
  } else {
    header.classList.remove("border")
  }
})

// Реализация работы бургера меню на мобильных разрешениях

const menuHamburger = document.querySelector('.menu-hamburger');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

menuHamburger.addEventListener('click', () => {
  menuHamburger.classList.toggle('close');
  header.classList.toggle('white');
  menu.classList.toggle('white');
  overlay.classList.toggle('active');
})

header.querySelector('.logo').addEventListener('click', () => {
  menuHamburger.classList.remove('close');
  header.classList.remove('white');
  menu.classList.remove('white');
  overlay.classList.remove('active');
})

header.querySelector('.btn_close').addEventListener('click', () => {
  menuHamburger.classList.remove('close');
  header.classList.remove('white');
  menu.classList.remove('white');
  overlay.classList.remove('active');
})

menu.childNodes.forEach(node => {
  node.addEventListener('click', () => {
    menuHamburger.classList.remove('close');
    header.classList.remove('white');
    menu.classList.remove('white');
    overlay.classList.remove('active');
  })
})