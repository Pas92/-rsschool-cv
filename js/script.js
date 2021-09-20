const burgMenuBtn = document.querySelector('.burger-menu button')
const burgMenu = document.querySelector('.burger-menu aside')


burgMenuBtn.addEventListener('click', burgerMenu)
burgMenu.addEventListener('click', burgerMenuAreaClick);



function burgerMenu() {
  if(burgMenuBtn.dataset.status == 'closed') {
    burgMenuBtn.textContent = 'close'
    burgMenuBtn.dataset.status = 'open'
    burgMenu.style.display = 'block'
  } else {
    burgMenuBtn.textContent = 'menu_open'
    burgMenuBtn.dataset.status = 'closed'
    burgMenu.style.display = 'none'
  }
}

function burgerMenuAreaClick(e) {
  if(e.target.localName !== 'a') {
    burgerMenu()
  }
}