//Test for the Question class and objects
class Question {
    constructor(question, hint, choices, points, id) {
        this.question = question;
        this.hint = hint;
        this.choices = choices;
        this.id = id;
    }

    showQuestion() {
        document.getElementById(this.id).innerHTML = '<div class = q-grid><p>' + this.question + '</p></div>';
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
        let htmlString = '<div class = ans-grid> <div class = ans-box>';
        for (let index = 0; index < this.choices.length; index++) {
            htmlString += ('<input type=\'radio\' name=' + this.id + ' value= \''  + index + '\'>'+ this.choices[index] + '<br>');
        }
        document.getElementById(this.id).innerHTML += htmlString + '</div> </div>';
    }
}

class MultipleChoiceImpair extends Question{
    constructor(question, hint, id) {
        super(question, hint, ['unimpaired', 'partially impaired', 'impaired'], '', id);
    }

    showChoices() {
        let htmlString = '<div class = ans-grid> <div class = ans-box>';
        for (let index = 0; index < this.choices.length; index++) {
            htmlString += ('<input type=\'radio\' name=' + this.id + ' value= \''  + index + '\'>'+ this.choices[index] + '<br>');
        }
        document.getElementById(this.id).innerHTML += htmlString + '</div> </div>';
    }
}

class TickBox extends Question{
    constructor(question, hint, choices, id) {
        super(question, hint, choices, '', id);
    }

    showChoices() {
        let htmlString = '<div class = ans-grid> <div class = ans-box>';
        for (let index = 0; index < this.choices.length; index++) {
            htmlString += ('<input type=\'checkbox\' name=\'option\' value= \'1\'>' + this.choices[index] + '<br>');
        }
        document.getElementById(this.id).innerHTML += htmlString + '</div> </div>';
    }
}

const question1 = new MultipleChoice('What is your preferred gender?','Test', ['Male', 'Female', 'Other'], 'gender');
const question2 = new MultipleChoiceImpair('How well can you eat by yoursef?', 'Think', 'eat');
const question3 = new TickBox('What fears so you have?', 'Day to day', ['Death', 'Poverty', 'Loneliness', 'Illness'], 'fear');
question1.display();
question2.display();
question3.display();