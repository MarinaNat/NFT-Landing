const burgerTrigger = document.querySelector('.header__burger'),
	burgerClose = document.querySelector('.header__burger_close'),
	burgerItem = document.querySelector('.header__inner'),
	body = document.querySelector('body'),
	heaerLink = document.querySelectorAll('.header__link');

burgerTrigger.addEventListener('click', (e) => {
	toggleBurger()
});

burgerClose.addEventListener('click', (e) => {
	toggleBurger()
});

heaerLink.forEach(item => {
	item.addEventListener('click', (e) => {
		toggleBurger()
	})
})

function toggleBurger() {
	burgerItem.classList.toggle('active');
	body.classList.toggle('active');
	burgerTrigger.classList.toggle('active');
	burgerClose.classList.toggle('active');
}

