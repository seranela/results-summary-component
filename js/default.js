(() => {

let data = {};

const resultScore = document.querySelector('#score-result');
const reaction = document.querySelectorAll('#image-reaction, #score-reaction');
const memory = document.querySelectorAll('#image-memory, #score-memory');
const verbal = document.querySelectorAll('#image-verbal, #score-verbal');
const visual = document.querySelectorAll('#image-visual, #score-visual');

/* --- Data Functions --- */

function renderData() {
	let scoreAverage = 0;
	for (let i = 0; i < data.length; ++i) {
		switch (data[i].category) {
			case 'Reaction':
				reaction[0].src = data[i].icon;
				reaction[1].innerText = data[i].score;
				break;
			case 'Memory':
				memory[0].src = data[i].icon;
				memory[1].innerText = data[i].score;
				break;
			case 'Verbal':
				verbal[0].src = data[i].icon;
				verbal[1].innerText = data[i].score;
				break;
			case 'Visual':
				visual[0].src = data[i].icon;
				visual[1].innerText = data[i].score;
				break;
		}
		scoreAverage += data[i].score;
	}
	resultScore.innerText = Math.round(scoreAverage / 4);
}

function loadJSON() {
	fetch('data.json')
		.then((response) => response.json())
		.then((json) => {
			localStorage.setItem('interactive-comments-section', JSON.stringify(json));
			data = json;
			renderData();
		});
}

loadJSON();

})();