const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')

openMenu.addEventListener('click', function() {
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
  });

  closeMenu.addEventListener('click', function() {
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
  });