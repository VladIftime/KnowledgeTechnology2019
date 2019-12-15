function Question(question,choices,tag){
    this.question = question;
    this.choices = choices;
    this.tag = tag;
    this.showQuestion = function() {
        document.write('<p>'+this.question+'<p>');
    }
    this.showChoices = function () {
        for (let index = 0; index < this.choices.length; index++) {
            const choice = this.choices[index];
            document.write('<input type=''')
        }
    }
}