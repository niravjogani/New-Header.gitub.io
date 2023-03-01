// header
	//header-fix
	var className = "fixed-top";
		var scrollTrigger = 60;
		window.onscroll = function() {
			// We add pageYOffset for compatibility with IE.
				let height = document.getElementById('header').offsetHeight;
				if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
					document.getElementsByTagName("header")[0].classList.add(className);
					document.getElementsByTagName("body")[0].style = `padding-top: ${height}px`; 
				} else {
					document.getElementsByTagName("header")[0].classList.remove(className);
					document.getElementsByTagName("body")[0].style = `padding-top: 0px`; 
				}
		};
	// dropdown-open
	const navbarMenu = document.getElementById("navbar");
	const burgerMenu = document.getElementById("burger");
	const overlayMenu = document.querySelector(".overlay");
	const closeMenu = document.querySelector(".close-btn");
	const menuclose = document.querySelector(".menu li");
	// Show and Hide Navbar Function
	const toggleMenu = () => {
		navbarMenu.classList.toggle("active");
		overlayMenu.classList.toggle("active");
	};

	// Fixed Resize Window Function
	const resizeWindow = () => {
		if (window.innerWidth > 992) {
			if (navbarMenu.classList.contains("active")) {
				toggleMenu();
			}
		}
	};

	// Initialize Event Listeners
	burgerMenu.addEventListener("click", toggleMenu);
	overlayMenu.addEventListener("click", toggleMenu);
	closeMenu.addEventListener("click", toggleMenu);
	window.addEventListener("resize", resizeWindow);

	$(document).ready(() => {
		// back to top
		$(document).on('click', 'a[href^="#"]', function(e) {
			let id = $(this).attr('href'), pos = 0;
			if( id != "#" ) {
				let $id = $(id);
				pos = ($id.length === 0) ? 0 : $id.offset().top - 80;
			}
			e.preventDefault();
			$('body, html').animate({scrollTop: pos}, 1200);
		});
		const backToTop = $('#backToTop');
		$(window).scroll(() =>  $(window).scrollTop() >= 300 ? backToTop.fadeIn('fast') : backToTop.fadeOut('fast'))

	});