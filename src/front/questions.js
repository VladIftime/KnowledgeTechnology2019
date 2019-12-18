//Test for the Question class and objects
class Question {
    constructor(question, hint, choices, points, id, name) {
        this.question = question;
        this.hint = hint;
        this.choices = choices;
        this.id = id;
        this.name = name;
    }

    showQuestion() {
        document.getElementById(this.id).innerHTML += '<p'+this.id+'>' + this.question + '</p>';
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
    constructor(question, hint, choices, id, name) {
        super(question, hint, choices, '', id, name);
    }

    showChoices() {
        let htmlString = '<div class = q-wrapper> <div class = q-box>';
        for (let index = 0; index < this.choices.length; index++) {
            htmlString += ('<input type=\'radio\' name=' + this.name + ' value= \''  + index + '\'>'+ this.choices[index] + '<br>');
        }
        document.getElementById(this.id).innerHTML += htmlString + '</div> </div>';
    }
}

class MultipleChoiceImpair extends Question{
    constructor(question, hint, id, name) {
        super(question, hint, ['unimpaired', 'partially impaired', 'impaired'], '', id, name);
    }

    showChoices() {
        let htmlString = '<div class = q-wrapper> <div class = q-box>';
        for (let index = 0; index < this.choices.length; index++) {
            htmlString += ('<input type=\'radio\' name=' + this.name + ' value= \''  + index + '\'>'+ this.choices[index] + '<br>');
        }
        document.getElementById(this.id).innerHTML += htmlString + '</div> </div>';
    }
}

class TickBox extends Question{
    constructor(question, hint, choices, id, name) {
        super(question, hint, choices, '', id, name);
    }

    showChoices() {
        let htmlString = '<div class = q-wrapper> <div class = q-box>';
        for (let index = 0; index < this.choices.length; index++) {
            htmlString += ('<input type=\'checkbox\' name=\'option\' value= \'1\'>' + this.choices[index] + '<br>');
        }
        document.getElementById(this.id).innerHTML += htmlString + '</div> </div>';
    }
}

//const question1 = new MultipleChoice('What is your preferred gender?','Test', ['Male', 'Female', 'Other'], 'gender','question1');
//const question1 = new MultipleChoiceImpair('How well can you eat by yoursef?', 'Think', 'eat');
//const question3 = new TickBox('What fears do you have?', 'Day to day', ['Death', 'Poverty', 'Loneliness', 'Illness'], 'fear');
const question1 = new MultipleChoiceImpair('How is your hearing?','','communication','question1');
const question2 = new MultipleChoiceImpair('How would you describe the eyesight?','','communication','question2');
const question3 = new MultipleChoice('Can talk?','Is your speaking impaired?',['Yes','Sometimes','No'],'communication','question3');
const question4 = new MultipleChoice('Are intentions difficult to express?','',['Yes','Sometimes','No'],'communication','question4');
const question5 = new MultipleChoice('Can walk alone?','',['Yes','Sometimes','No'],'movement','question1');

question2.display();
question3.display();
question4.display();
question1.display();
question5.display();