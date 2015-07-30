MenuController = function() {
  this.menu = document.getElementsByClassName('menu')[0];
}

/**
 * Shows up the menu by setting the visibility of the menu to visible.
 */
MenuController.prototype.showMenu = function() {
  this.menu.style.visibility = "visible";
}
