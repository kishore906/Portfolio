"use strict";

// step 1
document.querySelector(".nav_links").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);
  console.log(e.target.classList);

  // step 2
  // Matching Strategy
  if (e.target.classList.contains("nav_link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
