function Question(question,choices,tag){
    this.question = question;
    this.choices = choices;
    this.tag = tag;
    this.getQuestion = function() {
        document.write('<p>'+this.question+'<p>');
    }
    this.ge
}