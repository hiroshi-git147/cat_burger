
var button = document.querySelector('#cheeseburger');
var remove_button = document.querySelector('#cheeseburgerClear');
var cat = document.querySelector('#cat');


button.addEventListener('click', () => {
	console.log('click');
	var cheeseburger = document.createElement('div');
	// cheeseburger.innerHTML = 'cheeseburger';
	cheeseburger.classList.add('cheeseburger');
	cat.appendChild(cheeseburger);
});

function set_display() {
	var cheeseburgers = document.getElementsByClassName('cheeseburger');
	if(cheeseburgers.length <= 2) {
		remove_button.style.display = "inline-block";
	} else if(cheeseburgers.length == 1) {
		remove_button.style.display = "none";
	}
}

remove_button.addEventListener('click', () => {
	console.log('clicked');
	var cheeseburgers = document.getElementsByClassName('cheeseburger');
	cheeseburgers[0].classList.remove('cheeseburger');
	console.log(cheeseburgers.length);
});

