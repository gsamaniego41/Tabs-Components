let tweenMenu = TweenMax.fromTo(
  ".dropdown-content",
  0.5,
  { scale: 0, opacity: 0 },
  { scale: 1, opacity: 1 }
).reverse();

class Dropdown {
  constructor(element) {
    // Assign this.element to the dropdown element
    this.element = element;

    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector(".dropdown-button");

    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector(".dropdown-content");

    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener("click", () => {
      this.toggleContent(); // **what is 'this' referring to? this.button or this.element?**
      // TweenMax.from(dropdownContent, 0.2, { y: -50 }).;
      if (!tweenMenu.isActive()) {
        tweenMenu.reversed(!tweenMenu.reversed());
        // menu z-index set to -1000, header set to 5 but menu still goes over the header when animating
        // TweenMax.staggerFromTo(".dropdown-link", 0.3, { x: -30, opacity: .5 }, {x:0, opacity:1} 0.09);
      }
      // TweenMax.staggerFrom(dropdownLink, 0.2, { x: -20 }, 0.09);
    }); // **Also, why not this.content.toggleContent(event)?**
  }

  toggleContent(event) {
    // **still confused about passing in a param here**
    // event.stopPropagation();
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle("dropdown-hidden");
  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll(".dropdown");
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));

// ======== ICON ANIMATION ========
window.addEventListener("load", function() {
  TweenMax.staggerFrom(
    ".fab",
    1,
    { scale: 0, opacity: 0, rotation: -60, delay: 2.2, ease: Elastic.easeOut },
    0.1
  );
});
