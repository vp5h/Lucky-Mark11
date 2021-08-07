let inputDate = document.querySelector("#input-date");
let inputLucky = document.querySelector("#input-lucky");
let formDate = document.querySelector("#form");
let resultDiv = document.querySelector("#result");
let icon = document.querySelector(".fa");
let privacyDiv = document.querySelector(".privacy");



form.addEventListener("submit", (e) => {
	e.preventDefault();
	let sum = 0, rem = 0;

	let date = inputDate.value.split('-').join('');
	while (date !== 0) {
		rem = date % 10;
		sum += rem;
		date = Math.floor(date / 10);
	}

	if (sum % inputLucky.value === 0) {
		resultDiv.style.display = 'block';

		resultDiv.innerText = " Your birthdate is lucky. 😍";
		resultDiv.style.backgroundColor = "#1f1f1f";
	} else {
		resultDiv.style.display = 'block';

		resultDiv.innerText = "Your birthdate is unlucky. 😓";
		resultDiv.style.backgroundColor = "#1f1f1f";
		
	}
});
