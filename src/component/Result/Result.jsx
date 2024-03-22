import React from "react";
import PropTypes from "prop-types";
import "./Result.css";
import quizData from "../../questions"; // Update this path to where your quizData is located

const Result = ({ goHomePage }) => {
  // Assuming user's answers are stored in local storage with the key "userAnswers"
  const userAnswers = JSON.parse(localStorage.getItem("quizGivenAnswers"));
  let score = 0;

  // Ensure userAnswers is not null and is an array
  if (Array.isArray(userAnswers)) {
    userAnswers.forEach((answerIndex, questionIndex) => {
      const question = quizData[questionIndex];
      // Check if the answer index (converted to string to match correctAnswer's type) matches the correctAnswer
      if (
        question &&
        answerIndex !== null &&
        answerIndex.toString() === question.correctAnswer
      ) {
        score++;
      }
    });
  }

  const totalQuestions = quizData.length;

  return (
    <div>
      <h2>Your Result</h2>
      <p>
        You scored {score} out of {totalQuestions}.
      </p>
      {quizData.map((item, questionIndex) => {
        // const isCorrect =
        //   item.correctAnswer ===
        //   (userAnswers[questionIndex] !== undefined
        //     ? userAnswers[questionIndex].toString()
        //     : null);

        return (
          <div key={item.id}>
            <h3>{item.question}</h3>
            <ul>
              {item.answers.map((answer, answerIndex) => {
                let className = "";
                if (answerIndex.toString() === item.correctAnswer) {
                  className = "correct-answer"; // Correct answer
                } else if (answerIndex === userAnswers[questionIndex]) {
                  className = "incorrect-answer"; // User's incorrect answer
                }

                return (
                  <li key={answerIndex} className={className}>
                    {answer}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      <button className="home-btn" onClick={goHomePage}>
        Home Page
      </button>
    </div>
  );
};

Result.propTypes = {
  goHomePage: PropTypes.func.isRequired,
};

export default Result;
