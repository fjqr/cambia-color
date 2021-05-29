let blue = document.querySelector(".blue");
let red = document.querySelector(".red");
let green = document.querySelector(".green");
let violet = document.querySelector(".violet");
let pink = document.querySelector(".pink");
let screen = document.querySelector(".screen");

const changer = (color) => {
  screen.style.backgroundColor = color;
  screen.style.transition = "ease-in-out, 2s";
};

cambiaColor = () => {
  [blue, red, green, violet, pink].find((value) => {
    value.addEventListener("click", (e) => {
      switch (e.target) {
        case blue:
          changer("#5858ad");

          break;
        case red:
          changer("#ad5874");
          break;
        case green:
          changer("#58ad71");

          break;
        case violet:
          changer("#8458ad");

          break;
        case pink:
          changer("#eb87d5");

          break;
      }
    });
  });
};

cambiaColor();
