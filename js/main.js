var questions = [ 
	{
		question: "Which country is the origin of the cocktail Mojito?",
		answer:"cuba"
	},
	{
		question: "From which country does pitta bread originate?",
		answer: "greece"
	},
	{
		question: "Which cheese is traditionally used for pizzas?",
		answer: "mozzarella"
	},
	{
		question: "Finish this sentence: The most famous Mexican beer is ______?",
		answer: "corona"
	},
	{
		question: "In what year was the Berlin wall built?",
		answer: "in the year 1961"
	},
	{
		question: "In which state was George W Bush governor before becoming President of the United States?",
		answer: "Texas"
	},
	{
		question: "What is called a fish with a snake-like body?",
		answer: "eel fish"
	},
	{
		question: "What kind of animal is the largest living creature on Earth ?",
		answer: "whale"
	},
	{
		question: "What is the largest state of the United States?",
		answer: "alaska"
	},
	{
		question: "Which Turkish city has the name of a cartoon character?",
		answer: "batman"
	}

]

for(i = 0; i < questions.length; i++) {
	q = questions[i].question
	document.getElementById('question' + [i]).textContent = q
}

function testResults() {
	var correct = 0;
	var incorrect = 0;
	for(i = 0; i < questions.length; i++) {	
		var answer = questions[i].answer
		var guess = document.getElementById('answer' + [i]).value
		var questionSpot = document.getElementById('question' + [i])
		if(answer == guess) {
			questionSpot.className = 'correct'
			correct++
		} else {
			questionSpot.className = 'incorrect'
			incorrect++
		}
	}
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect
}