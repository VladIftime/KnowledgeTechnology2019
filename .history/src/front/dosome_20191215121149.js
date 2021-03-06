function doInsertion(){
    const modifiableObject = document.getElementById("insert")
    modifiableObject.innerHTML = "Power of JavaScript"
}

class Question {
    constructor(question, choices, tag) {
        this.question = question;
        this.choices = choices;
        this.tag = tag;
    }

    showQuestion() {
        document.getElementById(this.tag).innerHTML = '<p>' + this.question + '<p>';
    }

    showChoices() {
        for (let index = 0; index < this.choices.length; index++) {
            const choice = this.choices[index];
            document.getElementById(this.tag).innerHTML += ('<input type=\'radio\'>' + choice + '<br>');
        }
    }
}

const question1 = new Question('What is your preferred gender?', ['Male', 'Female', 'Other'], 'gender');
question1.showQuestion();
question1.showChoices()