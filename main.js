window.addEventListener("scroll", () => {
  const main = document.querySelector(".great");
  const windowHeight = window.innerHeight;
  const reveal = main.getBoundingClientRect().top;
  const revPoint = 150;

  if (reveal < windowHeight - revPoint) {
    main.classList.add("active");
  } else {
    main.classList.remove("active");
  }
});
