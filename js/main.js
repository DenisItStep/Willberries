const mySwiper = new Swiper('.swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});

// cart
const buttonCart = document.querySelector('.button-cart');
const modealCart = document.querySelector('#modal-cart');

buttonCart.addEventListener('click', function (){
	console.log(buttonCart);
});

