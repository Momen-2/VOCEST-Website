const mybutton = document.getElementById("scrollToUpButton");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const loader = document.querySelector(".pre-loader")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}