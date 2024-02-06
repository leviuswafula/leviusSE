/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
document.addEventListener('DOMContentLoaded', function () {
    var text = "Welcome To leviuswafula Website!";
    var index = 0;

    function type() {
        document.getElementById('animated-text').textContent = text.slice(0, index);
        index++;

        if (index > text.length) {
            index = 0;
        }

        setTimeout(type, 150);
    }

    type();
});
  // Show/hide the scroll-to-top button based on scroll position
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }

  // Scroll to the top of the page
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  function downloadCv() {
    // Replace the link with the actual path to your CV file
    window.location.href = 'https://docs.google.com/document/d/1PU2bN-eFyd2YcYQKhLCG93CAim3fznX6KTawSZd48JM/edit';
  }

  // JavaScript to reset animation after it finishes
  const nameContainer = document.getElementById('nameContainer');
  const names = document.querySelectorAll('.name');

  function resetAnimation() {
    names.forEach(name => {
      name.style.animation = 'none';
      name.offsetHeight; // Trigger reflow
      name.style.animation = null;
    });
  }

  // Repeat the animation every 5 seconds
  setInterval(resetAnimation, 5000);
  // Function to update the clock and greeting
  function updateClockAndGreeting() {
    const now = new Date();
    const hours = now.getHours();

    let greeting = '';
    if (hours >= 5 && hours < 12) {
      greeting = 'Good morning!';
    } else if (hours >= 12 && hours < 18) {
      greeting = 'Good afternoon!';
    } else {
      greeting = 'Good evening!';
    }

    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    document.getElementById('greeting').innerText = greeting;
    document.getElementById('clock').innerText = formattedTime;
  }

  // Update the clock and greeting every second
  setInterval(updateClockAndGreeting, 1000);

  // Initial clock and greeting update
  updateClockAndGreeting();
  

