function Question(question,choices,tag){
    this.question = question;
    this.choices = choices;
    this.tag = tag;
    this.showQuestion = function() {
        document.write('<p>'+this.question+'<p>');
    }
    this.showChoices = function () {
        for (const choice in object) {
            if (object.hasOwnProperty(choice)) {
                const element = object[choice];
                
            }
        }
    }
}