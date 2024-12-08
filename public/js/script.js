window.addEventListener('scroll', AOS.refresh);
let lastScrollY = window.scrollY;
const navbar = document.querySelector('nav');
const mobile_navbar = document.querySelector('.mobile-navigation');
// const topMenuHeight = document.querySelector('#top-nav').offsetHeight;
let isNavbarVisible = true;


window.addEventListener('scroll', () => {
	const currentScrollY = window.scrollY;
  
	// If the scroll position is more than 50px
	if (currentScrollY > 50) {

		navbar.classList.add('nav-active');
        mobile_navbar.classList.add('nav-active');
	}else {
		navbar.classList.remove('nav-active');
        mobile_navbar.classList.remove('nav-active');
    // mobile_navbar.style.position = `relative`;
	}
  
	lastScrollY = currentScrollY;
  });



// Open the mobile menu
const menuToggle = document.getElementById('menuToggle');
const menuToggleScroll = document.getElementById('menuToggleScroll');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const mobileLogo = document.getElementById('mobile-logo');

menuToggleScroll.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    mobileLogo.style.opacity= 0;
});

// menuToggle.addEventListener('click', () => {
//     mobileMenu.classList.add('open');
// });

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    mobileLogo.style.opacity = 1;
});

// Toggle Submenu
const submenuItems = document.querySelectorAll('.has-submenu > a, .has-submenu-child > a');

submenuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();  // Prevent page reload
        const parent = item.parentElement;

        // Toggle 'open' class to show/hide the submenu
        parent.classList.toggle('open');
        
        // Toggle "+" to "-" for parent or submenu
        const span = item.querySelector('span');
        if (parent.classList.contains('open')) {
            span.textContent = '-';  // Change "+" to "-"
        } else {
            span.textContent = '+';  // Change back to "+"
        }
    });
});

// Get all the tab buttons and panels
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

// Add click event to each button
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove the active class from all buttons and panels
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));

        // Add the active class to the clicked button and the corresponding panel
        button.classList.add('active');
        const targetPanel = document.getElementById(button.getAttribute('data-target'));
        targetPanel.classList.add('active');
    });
});

$(document).ready(function(){
    $('.course-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
        onInitialized: function() {
            AOS.refresh(); // Refresh AOS on initialization
        },
        onTranslated: function() {
            AOS.refresh(); // Refresh AOS on each carousel item change
        }
    });
});

$(document).ready(function(){
    $('.service-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
        onInitialized: function() {
            AOS.refresh(); // Re-initialize AOS after carousel loads
        }
    });
});

$(document).ready(function(){
    $('.test-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        },
        onInitialized: function() {
            AOS.refresh(); // Refresh AOS on initialization
        },
        onTranslated: function() {
            AOS.refresh(); // Refresh AOS on each carousel item change
        }
    });
});


if(AOS != "null"){
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,  // Animation duration
        once: true       // Only animate once
      });
}