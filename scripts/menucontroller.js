MenuController = function() {
}

/**
 * Shows up the menu by setting the visibility of the menu to visible.
 */
MenuController.prototype.showMenu = function() {
  this.menu = document.getElementsByClassName('menu')[0];
  debugger;
  if (!this.menu.style.visibility) {
    this.menu.style.visibility = "visible";
  } else {
    this.menu.style.visibility = "hidden"
  }
}
