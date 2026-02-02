const lantern = document.getElementById("lantern");

lantern.addEventListener("mouseenter", () => {
  lantern.classList.add("paused");
});

lantern.addEventListener("mouseleave", () => {
  lantern.classList.remove("paused");
});
