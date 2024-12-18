(function (global) {
  var dc = {};

  // Mock function to simulate menu loading
  dc.loadMenuItems = function (categoryShortName) {
    console.log("Loading menu items for category: " + categoryShortName);
    // Logic to load menu items dynamically can go here
  };

  // Random category logic
  document.addEventListener("DOMContentLoaded", function () {
    // Fetch the categories dynamically from the server
    var request = new XMLHttpRequest();
    request.open("GET", "https://davids-restaurant.herokuapp.com/categories.json", true);

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        // Parse the categories data
        var categories = JSON.parse(request.responseText);

        // Generate a random category short_name
        var randomCategoryShortName =
          categories[Math.floor(Math.random() * categories.length)].short_name;

        // Replace the onclick attribute for the Specials link
        var specialsLink = document.querySelector("#specials-link");
        if (specialsLink) {
          specialsLink.setAttribute(
            "onclick",
            "$dc.loadMenuItems('" + randomCategoryShortName + "');"
          );
        }
      } else {
        console.error("Error fetching categories.");
      }
    };

    request.onerror = function () {
      console.error("Connection error while fetching categories.");
    };

    request.send();
  });

  global.$dc = dc;
})(window);
