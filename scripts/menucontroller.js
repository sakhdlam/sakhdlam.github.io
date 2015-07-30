MenuController = function() {
  debugger;
  this.menu = document.getElementsByClassName('menu');
}

/**
 * Shows up the menu by setting the visibility of the menu to visible.
 */
MenuController.prototype.showMenu = function() {
  this.menu[0].style.visibility = "visible";
}
