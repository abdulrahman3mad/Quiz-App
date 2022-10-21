import Question from "./question.js"

export default class Quiz {
    constructor(questions = []) {
        this.questions = questions;
        this.quizHTML = document.getElementById("quiz");

        this.state = {
            score: 0,
            counter: 0,
        }
    }

    async startQuiz() {
        this.setQuestions();
        this.next();

        let that = this;
        this.quizHTML.addEventListener("click", function (e) {

            if (e.target.classList.contains("answer")) {
                if (e.target.innerText == that.questions[that.state.counter].correctAnswer)
                    that.state.score++;

                that.state.counter++;
                if (that.state.counter >= that.questions.length) {
                    that.displayScore();
                    return;
                }

                that.next();
            }

        })
    }

    async setQuestions() {
        this.questions = this.questions.map((question, index) => {
            let answers = [...question.incorrectAnswers];
            answers.splice(Math.random() * answers.length , 0, question.correctAnswer)
            return new Question(question.question, question.correctAnswer, answers);
        })
    }

    next() {
        this.quizHTML.innerHTML = Question.setQuestionHTML(this.questions[this.state.counter], this.state.counter + 1);
    }

    displayScore() {
        this.quizHTML.innerHTML = `<p class="score">Your Score is ${this.state.score}/${this.questions.length}</p>`
    }

    appendQuestion(questions) {
        questions.forEach((q) => {
            this.questions.push(q);
        })
    }
}

