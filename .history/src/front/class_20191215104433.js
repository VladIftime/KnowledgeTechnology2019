function Question(question,choices,tag){
    this.question = question;
    this.choices = choices;
    this.tag = tag;
    this.showQuestion = function() {
        document.write('<p>'+this.question+'<p>');
    }
    this.showChoices = function () {
        this.choices.forEach(element => {
            
        });
    }
}