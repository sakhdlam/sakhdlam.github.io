MenuController = function() {}

/**
 * Shows up the menu by setting the visibility of the menu to visible.
 */
MenuController.prototype.showMenu = function() {
  var menu = document.getElementsByClassName('menu');
  menu.style.visibility = "visible";
}
