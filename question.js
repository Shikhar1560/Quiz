class Question {
    constructor() {
        this.title = createElement('h1')
        this.input1 = createInput("Enter Your Name Here")
        this.input2 = createInput("Enter Correct Option Number")
        this.button = createButton("submit")
        this.question = createElement("h3")
        this.option1 = createElement('h4')
        this.option2 = createElement('h4')
        this.option3 = createElement('h4')
        this.option4 = createElement('h4')
    }
    hide() {
        this.title.hide()
        this.input1.hide()
        this.button.hide()
        this.input2.hide()
    }
    display() {
        this.title.html("Quiz to test IQ")
        this.title.position(350, 0)
        this.question.html("Who is India's Prime Minister")
        this.question.position(150, 80)
        this.option1.html("Rahul Gandhi")
        this.option1.position(150, 100)
        this.option2.html("Narend Modi")
        this.option2.position(150, 120)
        this.option3.html("Donald Trump")
        this.option3.position(150, 140)
        this.option4.html("Mahatma Gandhi")
        this.option4.position(150, 160)
        this.button.position(290,300)
        this.input1.position(150,230)
        this.input2.position(350,230)

        this.button.mousePressed(()=>{
            this.title.hide()
            this.input1.hide()
                this.input2.hide()
            this.button.hide()
            contestant.name=this.input1.value()
            contestant.answer=this.input2.value()
            contestantCount+=1
contestant.index=contestantCount()
contestant.update()
contestant.updateCount(contestantCount)
        })
    }
}