// document.addEventListener("DOMContentLoaded", function () {
//   const links = document.querySelectorAll(".nav-link");
//   const currentUrl = window.location.pathname.split("/").pop();

//   links.forEach((link) => {
//     const linkUrl = link.getAttribute("href");
//     if (
//       linkUrl === currentUrl ||
//       (linkUrl === "index.html" && currentUrl === "")
//     ) {
//       link.classList.add("active");
//     } else {
//       link.classList.remove("active");
//     }
//   });
// })

// lightbox video start
// Function to reveal lightbox and adding YouTube autoplay

function revealVideo(div, video_id) {
  var video = document.getElementById(video_id).src;
  document.getElementById(video_id).src = video + "&autoplay=1"; // adding autoplay to the URL
  document.getElementById(div).style.display = "block";
}

// Hiding the lightbox and removing YouTube autoplay
function hideVideo(div, video_id) {
  var video = document.getElementById(video_id).src;
  var cleaned = video.replace("&autoplay=1", ""); // removing autoplay form url
  document.getElementById(video_id).src = cleaned;
  document.getElementById(div).style.display = "none";
}
// lightbox video end

// login page form icon
function addPasswordShowHide(el) {
  el.querySelector("button").addEventListener("click", function (event) {
    event.preventDefault();
    if (el.querySelector("input").getAttribute("type") == "text") {
      el.querySelector("input").setAttribute("type", "password");
      el.querySelector("i").classList.remove("bi-eye-slash");
      el.querySelector("i").classList.add("bi-eye");
    } else if (el.querySelector("input").getAttribute("type") == "password") {
      el.querySelector("input").setAttribute("type", "text");
      el.querySelector("i").classList.add("bi-eye-slash");
      el.querySelector("i").classList.remove("bi-eye");
    }
  });
}

document.querySelectorAll(".show_hide_password").forEach(addPasswordShowHide);

//coverflow_3d_swiper == swiper slider
var coverflow_3d_swiper = new Swiper(".swiper", {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 2,
  speed: 600,
  preventClicks: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 350,
    modifier: 1,
    slideShadows: true,
  },
  on: {
    click(event) {
      coverflow_3d_swiper.slideTo(this.clickedIndex);
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// see screenshot
const images = [
  { href: "./assets/images/features-01.webp", title: "Image 1" },
  { href: "./assets/images/features-01.webp", title: "Image 2" },
  { href: "./assets/images/features-01.webp", title: "Image 3" },
];

let currentIndex = 0;

const lightbox = GLightbox({
  elements: images,
  openEffect: "zoom",
  closeEffect: "fade",
});

document
  .getElementById("see_screenshot")
  .addEventListener("click", function () {
    lightbox.openAt(currentIndex);
  });

document.body.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    lightbox.openAt(currentIndex);
  }
  if (event.key === "ArrowRight") {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    lightbox.openAt(currentIndex);
  }
});

// Add event listeners for left and right buttons
document.body.addEventListener("click", function (event) {
  if (event.target.id === "prevBtn") {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    lightbox.openAt(currentIndex);
  }
  if (event.target.id === "nextBtn") {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    lightbox.openAt(currentIndex);
  }
});

document
  .getElementById("see_screenshot_two")
  .addEventListener("click", function () {
    lightbox.openAt(currentIndex);
  });

document.body.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    lightbox.openAt(currentIndex);
  }
  if (event.key === "ArrowRight") {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    lightbox.openAt(currentIndex);
  }
});

// Add event listeners for left and right buttons
document.body.addEventListener("click", function (event) {
  if (event.target.id === "prevBtn") {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    lightbox.openAt(currentIndex);
  }
  if (event.target.id === "nextBtn") {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    lightbox.openAt(currentIndex);
  }
});

document.querySelectorAll(".pickMeButton").forEach((button) => {
  button.addEventListener("click", function () {
    var templateSrc = this.getAttribute("data-template");
    document.getElementById("buttonImage").src = templateSrc;
    var modal = bootstrap.Modal.getInstance(
      document.getElementById("templateModal")
    );
    modal.hide();
  });
});
