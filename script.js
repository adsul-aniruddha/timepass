/*==================================================
  NovaTech Business Website
  script.js
==================================================*/

"use strict";

/*=========================================
 Loader
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 500);

});

/*=========================================
 Scroll Progress Bar
=========================================*/

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

/*=========================================
 Back To Top
=========================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================================
 Sticky Navbar
=========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("shadow");

    } else {

        navbar.classList.remove("shadow");

    }

});

/*=========================================
 Typing Effect
=========================================*/

const typingElement = document.getElementById("typing-text");

const words = [

    "Business",

    "Website",

    "Startup",

    "Success",

    "Future"

];

let wordIndex = 0;

let letterIndex = 0;

let deleting = false;

function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, letterIndex++);

        if (letterIndex > currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1200);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, letterIndex--);

        if (letterIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typingEffect, deleting ? 50 : 120);

}

typingEffect();

/*=========================================
 Counter Animation
=========================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 100;

            const updateCounter = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target;

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*=========================================
 Dark Mode Toggle
=========================================*/

const themeToggle =
    document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon =
        themeToggle.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.className =
            "bi bi-sun-fill";

    } else {

        icon.className =
            "bi bi-moon-stars";

    }

});/*=========================================
 Portfolio Filter
=========================================*/

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active", "btn-primary"));

        filterButtons.forEach(btn =>
            btn.classList.add("btn-outline-primary"));

        button.classList.remove("btn-outline-primary");
        button.classList.add("active", "btn-primary");

        const filter = button.dataset.filter;

        portfolioItems.forEach(item => {

            if (filter === "all" || item.classList.contains(filter)) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});

/*=========================================
 Contact Form Validation
=========================================*/

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !subject || !message) {

            alert("Please fill all fields.");

            return;

        }

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email.");

            return;

        }

        alert("Message sent successfully!");

        contactForm.reset();

    });

}

/*=========================================
 Scroll Reveal Animation
=========================================*/

const revealElements = document.querySelectorAll(
    ".service-card,.feature-card,.team-card,.pricing-card,.portfolio-card,.glass-box,.testimonial-card"
);

revealElements.forEach(el => {

    el.classList.add("fade-up");

});

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach(item => {

    revealObserver.observe(item);

});

/*=========================================
 Active Navigation Highlight
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*=========================================
 Smooth Anchor Scroll
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

/*=========================================
 Bootstrap Testimonial Auto Slider
=========================================*/

const testimonialCarousel =
    document.querySelector("#testimonialCarousel");

if (testimonialCarousel) {

    new bootstrap.Carousel(testimonialCarousel, {

        interval: 3500,

        pause: false,

        ride: "carousel"

    });

}

/*=========================================
 Button Ripple Effect
=========================================*/

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = size + "px";

        ripple.style.left =
            e.clientX - rect.left - size / 2 + "px";

        ripple.style.top =
            e.clientY - rect.top - size / 2 + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/*=========================================
 Mobile Navbar Close on Click
=========================================*/

const navCollapse =
    document.querySelector(".navbar-collapse");

document.querySelectorAll(".navbar-nav .nav-link")
.forEach(link => {

    link.addEventListener("click", () => {

        if (navCollapse.classList.contains("show")) {

            new bootstrap.Collapse(navCollapse).hide();

        }

    });

});

/*=========================================
 Navbar Background Change
=========================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background =
            "rgba(15,23,42,.92)";

    } else {

        navbar.style.background =
            "rgba(15,23,42,.75)";

    }

});

/*=========================================
 Current Year in Footer (Optional)
=========================================*/

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}

/*=========================================
 Console Message
=========================================*/

console.log(
"%c🚀 NovaTech Website Loaded Successfully",
"color:#4F46E5;font-size:16px;font-weight:bold;"
);