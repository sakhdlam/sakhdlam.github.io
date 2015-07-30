MenuController = function() {
  this.menu = document.getElementsByClassName('menu');
}

/**
 * Shows up the menu by setting the visibility of the menu to visible.
 */
MenuController.prototype.showMenu = function() {
  console.log('i am here');
  menu.style.visibility = "visible";
}
