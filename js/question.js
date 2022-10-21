class Question {
    constructor(text, correctAnswer, choices) {
        this.text = text;
        this.correctAnswer = correctAnswer;
        this.choices = choices;
    }

    checkIfCorrect(answer) {
        return this.correctAnswer == answer
    }

    static setQuestionHTML(question, counter) {
        let answers = question.choices.map((choice) => {
            return `<div class="answer">${choice}</div>`
        })

        answers = answers.join("").split(",");

        return (
            `<div class="question">
                <span class="question-number">${counter}</span>
                <div class="text">${question.text}</div>
                <div class="answers">
                    ${answers}
                </div>
            </div>`
        )
    }
}

export default Question