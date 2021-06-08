M.AutoInit();

const callback = function(entries) {
  entries.forEach(entry => {
    entry.target.classList.add("is-visible");
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".animated");
targets.forEach(function(target) {
  observer.observe(target);
});

var quoteGeneratorGitHub = document.querySelector("#qgGithub")
quoteGeneratorGitHub.href = "https://github.com/diaploblical/Quote-Generator"

var quoteGeneratorGitHub = document.querySelector("#dgGithub")
quoteGeneratorGitHub.href = "https://github.com/diaploblical/Dittogram"