MenuController = function() {
}

/**
 * Shows up the menu by setting the visibility of the menu to visible.
 */
MenuController.prototype.showMenu = function() {
  this.menu = document.getElementsByClassName('menu-container')[0];
  this.menu.classList.toggle('show-menu');
  this.menu.focus();
  document.setAttribute("aria-activedescendant", "menu");
}
