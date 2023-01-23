"use strict";
console.log("bankai");

document.querySelector("button").addEventListener("click", function () {
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;
  console.log(password, confirm);
  if (password != confirm) {
    document.querySelector(".pass").classList.remove("hidden");
  }
});

// document.querySelector("input").addEventListener("focus", () => {
//   document.querySelector(".pass").classList.add("hidden");
// });
