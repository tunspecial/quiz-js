const form = document.querySelector(".quiz-form")
const result = document.querySelector(".result")
const correctAnswer = ["C", "D", "B", "D", "C", "A", "A", "B", "B", "C"]
const question = document.querySelectorAll(".question")

form.addEventListener("submit", event => {
    event.preventDefault()
    let userAnswer = [
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value,
        form.q5.value,
        form.q6.value,
        form.q7.value,
        form.q8.value,
        form.q9.value,
        form.q10.value

    ]

    let score = 0
    userAnswer.map((answer, index) => {
        if (answer === correctAnswer[index]) {
            score++
            question[index].classList.add("correct")
        }
        else {
            question[index].classList.add("wrong")
        }
    })
    scrollTo(0, 0)
    result.classList.remove("hide")
    result.querySelector("p").textContent = `Your Score ${score}/10!`

})