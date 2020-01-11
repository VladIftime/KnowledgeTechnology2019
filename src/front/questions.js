// Question class and objects
let areas = ['communication','orientation','movement','vital','grooming',
             'eat-drink','excretion','dress','rest-sleep','keep-busy',
             'feeling-man-woman','safe-enviroment','social-life','existential'];


function createSections() {
    let sec = document.getElementById('HealthAreas');
    for (let index = 0; index < areas.length; index++) {
        const element = areas[index];
        let title = element;
        //title[0].toUpperCase();
        sec.innerHTML+='<section id ='+ element + '> <button type="button" class="collapse">'+title+'</button> <div class="collapse-content"> </div> </section>'
    }
}

createSections();

class Question {
    constructor(question, hint, choices, points, classOfQuestion, name) {
        this.question = question;
        this.hint = hint;
        this.choices = choices;
        this.classOfQuestion = classOfQuestion;
        this.name = name;
    }

    showQuestion() {
        let sec = document.getElementById(this.classOfQuestion).getElementsByClassName('collapse-content')[0];        
        sec.innerHTML+= '<div class = q-grid><p>' + this.question + '</p></div>' + '<div class='+this.classOfQuestion+' id='+this.name+'></div>';
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