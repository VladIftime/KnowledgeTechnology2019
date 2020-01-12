// Question class and objects
let areas = ['Communication','Orientation','Movement','Vital','Grooming',
             'EatDrink', 'Excretion', 'Dress', 'RestSleep', 'KeepBusy',
             'FeelingManWoman','SafeEnvironment','SocialLife','Existential']


function createSections() {
    let sec = document.getElementById('HealthAreas');
    for (let index = 0; index < areas.length; index++) {
        const element = areas[index]
        let title = element.split(/(?=[A-Z])/)
        let l = ''
        for (let index = 0; index < title.length; index++) {
            if(index > 0)
                l += '-'
            const e = title[index];
            l += e
        }
        sec.innerHTML+='<section id ='+ element + '> <button type="button" class="collapse">'+l+'</button> <div class="collapse-content"> </div> </section>'
    }
}

createSections();

class Question {
    constructor(question, hint, choices, points, classOfQuestion, name) {
        this.question = question
        this.hint = hint
        this.choices = choices
        this.classOfQuestion = classOfQuestion
        this.name = name
    }

    showQuestion() {
        let sec = document.getElementById(this.classOfQuestion).getElementsByClassName('collapse-content')[0]       
        if(this.hint != ''){
            sec.innerHTML += '<div class=' + this.classOfQuestion + ' id=' + this.name + '><div class = q-grid><p class=tooltip>' +
                            this.question + '<span class="tooltiptext">' + this.hint + '</span> </p></div></div>'
        } else {
            sec.innerHTML += '<div class=' + this.classOfQuestion + ' id=' + this.name + '><div class = q-grid><p class=tooltip>' +
                this.question + '</p></div></div>'
        }
        }

    showChoices() {
        return null;
    }

    display() {
        this.showQuestion()
        this.showChoices()
    }
}

class MultipleChoice extends Question{
    constructor(question, hint, choices, classOfQuestion, name) {
        super(question, hint, choices, '', classOfQuestion, name);
    }

    showChoices() {
        let htmlString = '<div class = ans-grid> <div class = ans-box>'
        for (let index = 0; index < this.choices.length; index++) {
            htmlString += ('<input type=\'radio\' name=' + this.name + ' value= \''  + index + '\'>' + '<label class=font>' + this.choices[index] + '</label><br>')
        }
        document.getElementById(this.name).innerHTML += htmlString + '</div> </div>';
    }
}

class MultipleChoiceImpair extends MultipleChoice{
    constructor(question, hint, classOfQuestion, name) {
        super(question, hint, ['Unimpaired', 'Partially impaired', 'Impaired'], classOfQuestion, name);
    }
}

class TickBox extends Question{
    constructor(question, hint, choices, classOfQuestion, name) {
        super(question, hint, choices, '', classOfQuestion, name);
    }

    showChoices() {
        let htmlString = '<div class = ans-grid> <div class = ans-box>'
        for (let index = 0; index < this.choices.length; index++) {
            htmlString += ('<input type=\'checkbox\' name=\'option\' value= \'1\'>' + this.choices[index] + '<br>')
        }
        document.getElementById(this.name).innerHTML += htmlString + '</div> </div>'
    }
}
//Communication
const question1 = new MultipleChoiceImpair('Ability to hear:','','Communication','question1')
const question2 = new MultipleChoiceImpair('Ability to see:','','Communication','question2')
const question3 = new MultipleChoiceImpair('Ability to speak:','','Communication','question3')
const question4 = new MultipleChoiceImpair('Ability to express feelings or desires:','','Communication','question4')
//Orientation
const question5 = new MultipleChoiceImpair('Temporal orientation:','Be able to realise when you are supposed to arrive somewhere','Orientation','question5')
const question6 = new MultipleChoiceImpair('Local orientation:','','Orientation','question6')
const question7 = new MultipleChoiceImpair('Personal orientation:','','Orientation','question7')
const question8 = new MultipleChoiceImpair('Situational orientation:','','Orientation','question8')
//Movement 
const question9 = new MultipleChoiceImpair('Ability to walk alone:','','Movement','question9')
const question10 = new MultipleChoiceImpair('Ability to stand alone:','','Movement','question10')
const question11 = new MultipleChoiceImpair('Ability to sit alone:','','Movement','question11')
const question12 = new MultipleChoiceImpair('Ability to lay down alone:','','Movement','question12')
const question13 = new MultipleChoiceImpair('Ability to visit infrastructure:','','Movement','question13')
//Vital functions
const question14 = new MultipleChoiceImpair('Ability to breath:','','Vital','question14')
const question15 = new MultipleChoiceImpair('Cardio-vascular system:','','Vital','question15')
const question16 = new MultipleChoiceImpair('Ability to sense temperature:','','Vital','question16')
//Self Grooming
const question17 = new MultipleChoiceImpair('Ability to shower/bath alone','','Grooming','question17')
const question18 = new TickBox('Body care:','',['Skin','Mouth','Shaving','Hair','Nails','Ears','Nose','Eyes'],'Grooming','question18')
//Eat-Drink
const question19 = new MultipleChoiceImpair('Ability to eat:','','EatDrink','question19')
const question20 = new MultipleChoiceImpair('Ability to drink:','','EatDrink','question20')
const question21 = new MultipleChoiceImpair('Ability to cook:','','EatDrink','question21')
//Excretion
const question22 = new MultipleChoiceImpair('Ability to urinate:','','Excretion','question22')
const question23 = new MultipleChoiceImpair('Ability to defecate','','Excretion','question23')
const question24 = new MultipleChoice('Urinary incontinence','',['No','Yes'],'Excretion','question24')
const question25 = new MultipleChoice('Bowel incontinence','',['No','Yes'],'Excretion','question25')
//Dress
const question26 = new MultipleChoiceImpair('Ability to dress alone:','','Dress','question26')
const question27 = new MultipleChoiceImpair('Ability to undress alone:','','Dress','question27')
const question28 = new MultipleChoiceImpair('Ability to choose appropriate clothing:','','Dress','question28')
//Rest-Sleep
const question29 = new MultipleChoiceImpair('Ability to fall asleep:','','RestSleep','question29')
const question30 = new MultipleChoiceImpair('Ability to stay asleep:','','RestSleep','question30')
const question31 = new MultipleChoice(':','','','RestSleep','question31')
//Keep busy
const question32 = new 
const question33 = new MultipleChoiceImpair('Ability to use media:','Watch TV, read the news, browse the internet etc.','KeepBusy','question33')
const question34 = new MultipleChoiceImpair('Ability to plan a day:','Schedule an appointment/meeting, going to a date etc.','KeepBusy','question34')
//Feeling man-women
const question35 = new MultipleChoice('Can identify as assign gender:','Gender identity disorder',['Yes','No'],'FeelingManWomen','question35')
const question36 = new MultipleChoice('Difficulties in defining self-sexual orientation:','',['No','Yes'],'FeelingManWomen','question36')
const question37 = new MultipleChoiceImpair('Ability to perform sexually:','','FeelingManWomen','question37')
//Safe environment
const question38 = new MultipleChoice('Risk of injury while alone:','Cut, trip, fall, hit etc.',['None','Medium','High'],'SafeEnvironment','question38')
const question39 = new MultipleChoice('Risk of infection while alone:','Skin, blood, eye etc.',['None','Medium','High'],'SafeEnvironment','question39')
const question40 = new MultipleChoice('Risk of intentional self-injury:','Self-endangerment',['None','Medium','High'],'SafeEnvironment','question40')
const question41 = new MultipleChoice('Risk of endangering others:','Putting others\'s lives at risk intentionally/unintentionally',['None','Medium','High'],'SafeEnvironment','question41')
//social 
const question42 = new MultipleChoice('Relationships with neighbors and neighborhood:','',['Good','None','Bad'],'SocialLife','question42')
const question43 = new MultipleChoiceImpair('')
//existentail questions
const question44 = new TickBox('','',[],'Existential','question44')
const question45 = new TickBox('','',['Illness','Hopelessness','Feeling of worthlessness'],'Existential','question45')
const question46 = new TickBox('','',['Dying','Illness','Loneliness','Poverty'],'Existential','question46')

question1.display()
question2.display()
question3.display()
question4.display()
question5.display()
question6.display()
question7.display()
question8.display()
question9.display()
question10.display()
question11.display()
question12.display()
question13.display()
question14.display()
question15.display()
question16.display()
question17.display()
question18.display()
question19.display()
question20.display()
question21.display()
question22.display()
question23.display()
question24.display()
question25.display()
question26.display()
question27.display()
question28.display()
question29.display()
question30.display()
question31.display()
question32.display()
question33.display()
question34.display()
question35.display()
question36.display()
question37.display()
question38.display()
question39.display()
question40.display()
question41.display()
question42.display()
question43.display()
question44.display()
question45.display()
question46.display()



