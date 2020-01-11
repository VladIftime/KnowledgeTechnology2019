// points are calculated here and then the answer is infered

//Areas for printing the answer
const resultsContainer = document.getElementById('Result');
const submitButton = document.getElementById("submit");


//Scores for areas and the total sccore
var scores = {
    communication:Number(0),
    orientation:Number(0),
    movement:Number(0),
    vital:Number(0),
    grooming:Number(0),
    eatDrink:Number(0),
    excretion:Number(0),
    dress:Number(0),
    restSleep:Number(0),
    keepBusy:Number(0),
    feelings:Number(0),
    safeEnviroment:Number(0),
    socialLife:Number(0),
    existential:Number(0)
}
var totalScore = Number(0);
var apply = 'No';
// Tresholds
const shouldApplyTreshold = 20;
const maybeApplyTreshold = 10;
const areaTreshold = 7;

//Calculate the score of a given question
function scoreOfQuestion(questionId) {
    let options = document.getElementsByName(questionId);
    for (let i = 0; i < options.length; i++) {
        if(options[i].checked){
            return options[i].value;
        }
    }
    return Number(0);
}
//Calculate the total score as well as the score for each area
function calculateScores() {
    totalScore = Number(0);
    for (const area in scores) {
        if (scores.hasOwnProperty(area)) {
            let areaScore = Number(0);
            const questions = document.getElementsByClassName(area);
            for (let i = 0; i < questions.length; i++) {
                const question = questions[i];
                areaScore += scoreOfQuestion(question.id);
            }
            totalScore += Number(areaScore);
            scores[area] = Number(areaScore)
        }
    }
    
}

//Based on the scores calcluated above infere the best option for the user
function inference(){
    calculateScores();
    const applyNo = 'Based on the given answers you would most likely not obtain care.';
    const applyMaybe = 'Based on the given answers you should consider going to a proffesional to see if you could obtain outpatient care.';
    const applyYes = 'Based on the given answers you would most likely obtain outpatient care. Please contact a professional to help you with the procedure.';
    console.log(totalScore);
    
    //Determine if the patient suffers in one area enough to be consider for care
    for (const area in scores) {
        if (scores.hasOwnProperty(area)) {
            const element = scores[area];
            if(element > areaTreshold)
                apply = 'maybe';
        }
    }
    
    
    if(totalScore >= maybeApplyTreshold)
        apply = 'maybe';

    if(totalScore >= shouldApplyTreshold)
        apply = 'yes';

    switch (apply) {
        case 'maybe':
            resultsContainer.innerHTML = applyMaybe;
            break;
        case 'yes':
            resultsContainer.innerHTML = applyYes;
            break;
        default: resultsContainer.innerHTML = applyNo;
            break;
    }
}

submitButton.addEventListener("click", inference);
