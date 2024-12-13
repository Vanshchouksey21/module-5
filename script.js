(function (global) {
    var dc = {};
  
    // Mock function to simulate menu loading
    dc.loadMenuItems = function (categoryShortName) {
      console.log("Loading menu items for category: " + categoryShortName);
      // Logic to load menu items dynamically can go here
    };
  
    // Random category logic
    document.addEventListener("DOMContentLoaded", function () {
      var categories = ["L", "D", "S", "SP"];
      var randomCategoryShortName =
        categories[Math.floor(Math.random() * categories.length)];
  
      // Replace {{randomCategoryShortName}} in the Specials link
      var specialsLink = document.querySelector(
        'a[href="#"][onclick*="{{randomCategoryShortName}}"]'
      );
      if (specialsLink) {
        specialsLink.setAttribute(
          "onclick",
          "$dc.loadMenuItems('" + randomCategoryShortName + "');"
        );
      }
    });
  
    global.$dc = dc;
  })(window);
  