document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");
  const currentUrl = window.location.pathname.split("/").pop();

  links.forEach((link) => {
    const linkUrl = link.getAttribute("href");
    if (
      linkUrl === currentUrl ||
      (linkUrl === "index.html" && currentUrl === "")
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

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

// swiper slider
var swiper = new Swiper(".swiper", {
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
      swiper.slideTo(this.clickedIndex);
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
