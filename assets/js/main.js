const backToTopButton = document.querySelector(".back-to-top");
const Year = document.getElementById("js_current_year");

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
}

window.onscroll = function () {
  scrollFunction();
};

function getCurrentYear() {
  Year.innerHTML = new Date().getFullYear();
}

getCurrentYear();
