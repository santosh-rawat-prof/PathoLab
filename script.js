const hamburg = document.querySelector(".nav_toggle");
const navMenu = document.querySelector(".nav_menu");
// const closeBtn = document.querySelector(".closebtn");

hamburg.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// closeBtn.addEventListener("click", () => {
//     navMenu.classList.remove("active");
// })

let slideImg = document.querySelector("#header");

let images = new Array(
  "./images/hero-mobile2.jpg",
  "./images/hero-mobile3.jpg",
  "./images/hero-mobile4.jpg",
  "./images/hero-mobile5.jpg"
);

let len = images.length;
let i = 0;

function slider() {
  if (i > len - 1) {
    i = 0;
  }
  slideImg.style.backgroundImage =
    "linear-gradient(rgba(2, 147, 219, 0.742), rgba(0, 0, 0, 0.413)), url(" +
    images[i] +
    ")";
  i++;
  setTimeout("slider()", 3000);
}

const media = () => {
  let q = matchMedia("(min-width: 769px)");

  if (q.matches) {
    images = new Array(
      "./images/banner_desktop.png",
      "./images/banner_desktop2.jpg",
      "./images/banner_desktop3.jpg",
      "./images/banner_desktop4.jpg"
    );
  } else {
    images = new Array(
      "./images/hero-mobile2.jpg",
      "./images/hero-mobile3.jpg",
      "./images/hero-mobile4.jpg",
      "./images/hero-mobile5.jpg"
    );
  }
};

onresize = media();
