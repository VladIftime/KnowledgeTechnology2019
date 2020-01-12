// points are calculated here and then the answer is inferred

//Areas for printing the answer
const resultsContainer = document.getElementById('Result');
const submitButton = document.getElementById("submit");


//Scores for areas and the total score
var scores = {
    Communication:Number(0),
    Orientation:Number(0),
    Movement:Number(0),
    Vital:Number(0),
    Grooming:Number(0),
    EatDrink:Number(0),
    Excretion: Number(0),
    Dress: Number(0),
    RestSleep: Number(0),
    KeepBusy: Number(0),
    FeelingManWoman: Number(0),
    SafeEnvironment: Number(0),
    SocialLife: Number(0),
    Existential: Number(0)
}
var totalScore = Number(0)
var apply = 'No'
var warning = false
var areasWithProblems = []
// Thresholds
const shouldApplyThreshold = 20
const maybeApplyThreshold = 10
const areaThreshold = 4

//Go to the questions that are unanswered; open the section and make them red; if this is the first question that is not answered
//we also scroll to it
function goToQuestion(questionId, healthArea){
    let section = document.getElementById(healthArea).getElementsByClassName('collapse')[0]
    section.classList.toggle("collapse-active")
    section.nextElementSibling.style.maxHeight = section.nextElementSibling.scrollHeight + "px";
    let question = document.getElementById(questionId).getElementsByClassName('q-grid')[0].getElementsByClassName('tooltip')[0]
    question.classList.add('warning')
    if(warning == false){
        question.scrollIntoView()
    }
    warning = true
}

//Calculate the score of a given question
function scoreOfQuestion(questionId, healthArea) {
    let options = document.getElementsByName(questionId)
    let sum = Number(0)
    let answered = false
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            let question = document.getElementById(questionId).getElementsByClassName('q-grid')[0].getElementsByClassName('tooltip')[0]
            question.classList.remove('warning')
            sum += Number(options[i].value)
            answered = true
        }
    }
    if(answered)
        return Number(sum)
    goToQuestion(questionId,healthArea)
    return Number(0)
}
//Calculate the total score as well as the score for each area
function calculateScores() {
    totalScore = Number(0)
    for (const area in scores) {
        if (scores.hasOwnProperty(area)) {
            let areaScore = Number(0)
            const questions = document.getElementsByClassName(area);
            for (let i = 0; i < questions.length; i++) {
                const question = questions[i]
                areaScore += scoreOfQuestion(question.id,area)
            }
            totalScore += Number(areaScore)
            scores[area] = Number(areaScore)
        }
    }
    
}

//Based on the scores calculated above infer the best option for the user
function inference(){
    const applyNo = 'Based on the given answers we do not recommend applying for outpatient care.'
    var applyMaybe = 'Based on the given answers '
    var applyYes = 'Based on the given answers you would most likely obtain outpatient care.';
    //Determine if the patient suffers in one area enough to be consider for car
    for (const area in scores) {
        if (scores.hasOwnProperty(area)) {
            const element = scores[area]
            if(element >= areaThreshold){
                apply = 'maybe'
                areasWithProblems.push(area.toString())
                console.log(area);
                console.log(areasWithProblems);
                
            }
        }
    }
    if (areasWithProblems.length >= 3) {
         applyYes = 'Due to severe problems in the following areas: '
         for (let index = 0; index < areasWithProblems.length; index++) {
             const element = areasWithProblems[index];
             applyYes += element + ', '
         }
         applyYes += 'you would most likely obtain outpatient care. Please contact a professional to help you with the procedure.'
    } else if (areasWithProblems.length > 0) {
        applyMaybe = 'Due to sever problems in the following areas: '
        for (let index = 0; index < areasWithProblems.length; index++) {
            const element = areasWithProblems[index];
            applyMaybe += element + ', ' 
        }
        applyMaybe += 'you should consider going to a professional to see if you could obtain outpatient care.'
    }

    
    if(totalScore >= maybeApplyThreshold)
        apply = 'maybe'

    if(totalScore >= shouldApplyThreshold)
        apply = 'yes'

    switch (apply) {
        case 'maybe':
            resultsContainer.innerHTML = applyMaybe;
            break
        case 'yes':
            resultsContainer.innerHTML = applyYes;
            break
        default: resultsContainer.innerHTML = applyNo;
            break
    }
}

function warn(show) {
    var div = document.getElementById('warning');
    div.style.display = show;
}

function warningOrScore() {
    calculateScores();
    if (warning == true) {
        warn('block');
        warning = false;
    }
    else {
        warn('none')
        inference();
    }
}

submitButton.addEventListener("click", warningOrScore);
