# JavaScript Quiz App

A simple **Quiz Application** built with **Vanilla JavaScript**, **HTML**, and **CSS**.
Users can answer multiple-choice questions and instantly see their score with visual feedback for correct and wrong answers.

---

## ✨ Features

* 📝 Multiple-choice quiz (10 questions)
* ✅ Highlights correct answers
* ❌ Highlights wrong answers
* 📊 Displays final score instantly
* 🔝 Auto scroll to top after submission
* ⚡ Pure JavaScript (no libraries)

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

---

## 📂 Project Structure

```text
quiz-app/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

---

## 🚀 How It Works

### 1️⃣ Quiz Submission

* User selects answers for all questions
* Quiz form is submitted

### 2️⃣ Answer Validation

* User answers are stored in an array
* Answers are compared with the correct answers array

```js
const correctAnswer = ["C", "D", "B", "D", "C", "A", "A", "B", "B", "C"]
```

### 3️⃣ Scoring Logic

* Each correct answer increases the score by **1**
* Questions are marked:

  * `correct` → correct answer
  * `wrong` → incorrect answer

### 4️⃣ Result Display

* Result section becomes visible
* Final score is shown at the top of the page

---

## 📊 Example Result

```text
Your Score 7/10!
```

---

## ▶️ Usage

1. Clone the repository

```bash
git clone https://github.com/your-username/quiz-app.git
```

2. Open `index.html` in your browser

3. Answer the quiz and submit 🎉

---

## 📌 Future Improvements

* Show correct answer explanations
* Add timer for each quiz
* Store score history
* Randomize questions
* Add progress bar

---

## 👨‍💻 Author

**TUN TUN OO**
Practicing JavaScript DOM & Logic 🚀

---

## 📄 License

This project is open-source and free to use.
