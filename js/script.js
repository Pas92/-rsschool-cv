const burgMenuBtn = document.querySelector('.burger-menu button')
const burgMenu = document.querySelector('.burger-menu aside')


burgMenuBtn.addEventListener('click', burgerMenu)
burgMenu.addEventListener('click', burgerMenu);



function burgerMenu() {
  if(burgMenuBtn.dataset.status == 'closed') {
    burgMenuBtn.textContent = 'close'
    burgMenuBtn.dataset.status = 'open'
    burgMenu.style.visibility = 'visible'
    burgMenu.style.left = '0'
    burgMenu.style.opacity = '1'

  } else {
    burgMenuBtn.textContent = 'menu_open'
    burgMenuBtn.dataset.status = 'closed'
    burgMenu.style.visibility = 'hidden'
    burgMenu.style.opacity = '0'
  }
}