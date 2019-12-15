function doInsertion(){
    const modifiableObject = document.getElementById("insert")
    modifiableObject.innerHTML = "Power of JavaScript"
}

//Test for the Question class and objects
class Question {
    constructor(question, hint, choices, points, id) {
        this.question = question;
        this.hint = hint;
        this.choices = choices;
        this.id = id;
    }

    showQuestion() {
        document.getElementById(this.id).innerHTML = '<p>' + this.question + '<p>';
    }

    showChoices() {
        return null;
    }

    display() {
        this.showQuestion();
        this.showChoices();
    }
}

class MultipleChoice extends Question{
    constructor(question, hint, choices, id) {
        super(question, hint, choices, '', id);
    }

    showChoices() {
        for (let index = 0; index < this.choices.length; index++) {
            const choice = this.choices[index];
            document.getElementById(this.id).innerHTML += ('<input type=\'radio\' name=' + this.id + ' value= \''  + index + '\'>'+ choice + '<br>');
        }
    }
}

class TickBox extends Question{
    constructor(question, hint, choices, id) {
        super(question, hint, choices, '', id);
    }
    showChoices() {
        for (let index = 0; index < this.choices.length; index++) {
            const choice = this.choices[index];
            document.getElementById(this.id).innerHTML += ('<input type=\'checkbox\' name=\'option\' value= \'1\'>' + choice + '<br>');
        }
    }
}

const question1 = new MultipleChoice('What is your preferred gender?','Test', ['Male', 'Female', 'Other'], 'gender');
const question2 = new MultipleChoice('How well can you eat by yoursef?', 'Think', ['Not Well', 'Fair', 'No problem'], 'eat');
const question3 = new TickBox('What fears so you have?', 'Day to day', ['Death', 'Poverty', 'Loneliness', 'Illness'], 'fear');
question1.display();
question2.display();
question3.display();
