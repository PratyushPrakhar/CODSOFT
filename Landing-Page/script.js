// Sticky navbar effect
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Counter Animation
const counters = document.querySelectorAll(".stat h2");

const animateCounter = (counter) => {
    const text = counter.innerText;

    const target = parseInt(text.replace(/\D/g, ""));
    const suffix = text.replace(/[0-9]/g, "");

    let count = 0;

    const increment = Math.ceil(target / 120);

    const update = () => {
        count += increment;

        if (count >= target) {
            counter.innerText = target + suffix;
        } else {
            counter.innerText = count + suffix;
            requestAnimationFrame(update);
        }
    };

    update();
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
});

counters.forEach(counter => observer.observe(counter));

// Reveal animation
const reveals = document.querySelectorAll(
    ".card, .price-card, .testimonial-box"
);

reveals.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.7s";
});

const revealOnScroll = () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Active Navigation Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

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