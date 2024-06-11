document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('nav ul li a');
    var logoLight = document.getElementById('logo-light');
    var logoDark = document.getElementById('logo-dark');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'white'; 
            navLinks.forEach(link => {
                link.style.color = 'black'; //making it black
            });

            // LogoChanging on Scroll 
            logoLight.style.display = 'none';
            logoDark.style.display = 'block';

        } else {
            header.style.backgroundColor = 'rgba(51, 51, 51, 0)'; // transparent
            navLinks.forEach(link => {
                link.style.color = 'white'; 
            });

            // Logo Reseting to default on not scrolling 
            logoLight.style.display = 'block';
            logoDark.style.display = 'none';

        }
    });

    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropbtn = document.querySelector('.dropbtn');

    dropbtn.addEventListener('click', function(e) {
        e.preventDefault();
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            dropdownContent.classList.remove('show');
        }
    });
});

/* slideshow script js */

document.addEventListener("DOMContentLoaded", function() {
    const testimonials = document.querySelectorAll(".testimonial");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;
    const intervalTime = 4000; // 4 Seconds Autoslide

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.toggle("active", i === index);
            dots[i].classList.toggle("active", i === index);
        });
    }

    function nextTestimonial() {
        currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
        showTestimonial(currentIndex);
    }

    function prevTestimonial() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
        showTestimonial(currentIndex);
    }

    prevButton.addEventListener("click", prevTestimonial);
    nextButton.addEventListener("click", nextTestimonial);

    
    dots.forEach(dot => {
        dot.addEventListener("click", function() {
            currentIndex = parseInt(this.getAttribute("data-index"));
            showTestimonial(currentIndex);
        });
    });

    // Auto-slide functionality
    setInterval(nextTestimonial, intervalTime);

    showTestimonial(currentIndex);
});
