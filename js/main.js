import Quiz from "./quiz.js"
import API from "./api.js"

let quiz = new Quiz(await API())
quiz.startQuiz()