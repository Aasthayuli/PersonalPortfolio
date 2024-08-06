let menu_icon_box = document.querySelector(".menu-icon-box");
let box = document.querySelector(".box");

menu_icon_box.onclick = function () {
  menu_icon_box.classList.toggle("active");
  box.classList.toggle("active");
};

document.querySelectorAll(".bold-span i").forEach((icon) => {
  icon.addEventListener("mouseover", function () {
    icon.closest(".pr").style.opacity = "0";
  });
  icon.addEventListener("mouseout", function () {
    icon.closest(".pr").style.opacity = "1";
  });
});

let btn = document.querySelector(".btn");

function scrollToSection(id) {
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
}
btn.addEventListener("click", function () {
  btn.onclick = scrollToSection("#contact-id");
});
if (document.referrer !== "") {
  window.location.href = "https://www.example.net"; // redirect to a different page
}
