let scrollPosition = window.scrollY

const header = document.querySelector("header")

//Сколько пикселей нужно проскролить, чтобы добавить класс. Можете изменить значение
const scrollChange = 1

//Отслеживаем событие "скролл"
window.addEventListener('scroll', function() { 
  scrollPosition = window.scrollY;

  //Если прокрутили больше, чем мы указали в переменной scrollChange, то выполняется функция добавления класса
  if (scrollPosition >= scrollChange) { 
    header.classList.add("border")
  } else {
    header.classList.remove("border")
  }
})