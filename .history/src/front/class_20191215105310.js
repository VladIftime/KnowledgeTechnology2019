class Question {
    constructor(question, choices, tag) {
        this.question = question;
        this.choices = choices;
        this.tag = tag;
    }
    showQuestion() {
        document.write('<p>' + this.question + '<p>');
    }
        
    showChoices() {
        for (let index = 0; index < this.choices.length; index++) {
            const choice = this.choices[index];
            document.write('<input type=\'radio\'>' + choice + '<br>');
        }
    }
}

const question1 = new Question('What is your preferred gender?',['Male','Female','Other'])