M.AutoInit();

const intersectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
});

const elements = [...document.querySelectorAll(".animated")];

elements.forEach((element) => intersectionObserver.observe(element));

var scrollButton = document.querySelector("#scrollButton");
var portfolioSection = document.querySelector("#portfolio");

function scrollDown(target) {
  target.scrollIntoView(true);
}

scrollButton.addEventListener("click", () => {scrollDown(portfolioSection)});