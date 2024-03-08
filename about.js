console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Submitted Successfully')
}

function imageAlert(event) {
	alert('You are doing great!')
}
let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);

let image = document.querySelector('img')
image.addEventListener('mouseover',imageAlert)