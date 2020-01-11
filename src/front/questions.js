//Test for the Question class and objects
class Question {
    constructor(question, hint, choices, points, classOfQuestion, name) {
        this.question = question;
        this.hint = hint;
        this.choices = choices;
        this.classOfQuestion = classOfQuestion;
        this.name = name;
    }

    showQuestion() {
        let sec = document.getElementById('HealthAreas');
        sec.innerHTML+= '<p >' + this.question + '</p>' + '<div class='+this.classOfQuestion+' id='+this.name+'></div>';
        console.log(this.classOfQuestion+" "+this.name);
        
        
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
    constructor(question, hint, choices, classOfQuestion, name) {
        super(question, hint, choices, '', classOfQuestion, name);
    }

    showChoices() {
        let htmlString = '<div class = ans-grid> <div class = ans-box>';
        for (let index = 0; index < this.choices.length; index++) {
            htmlString += ('<input type=\'radio\' name=' + this.name + ' value= \''  + index + '\'>'+ this.choices[index] + '<br>');
        }
        document.getElementById(this.name).innerHTML += htmlString + '</div> </div>';
    }
}

class MultipleChoiceImpair extends MultipleChoice{
    constructor(question, hint, classOfQuestion, name) {
        super(question, hint, ['unimpaired', 'partially impaired', 'impaired'], classOfQuestion, name);
    }
}

class TickBox extends Question{
    constructor(question, hint, choices, classOfQuestion, name) {
        super(question, hint, choices, '', classOfQuestion, name);
    }

    showChoices() {
        let htmlString = '<div class = ans-grid> <div class = ans-box>';
        for (let index = 0; index < this.choices.length; index++) {
            htmlString += ('<input type=\'checkbox\' name=\'option\' value= \'1\'>' + this.choices[index] + '<br>');
        }
        document.getElementById(this.name).innerHTML += htmlString + '</div> </div>';
    }
}

const question1 = new MultipleChoiceImpair('How is your hearing?','','communication','question1');
const question2 = new MultipleChoiceImpair('How would you describe the eyesight?','','communication','question2');
const question3 = new MultipleChoice('Can talk?','Is your speaking impaired?',['Yes','Sometimes','No'],'communication','question3');
const question4 = new MultipleChoice('Are intentions difficult to express?','',['Yes','Sometimes','No'],'communication','question4');
const question5 = new MultipleChoice('Can walk alone?','',['Yes','Sometimes','No'],'movement','question5');


question1.display();
question2.display();
question3.display();
question4.display();
question5.display();