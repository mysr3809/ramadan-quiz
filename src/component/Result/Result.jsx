import PropTypes from "prop-types";
import "./Result.css";
import quizData from "../../questions"; // Update this path to where your quizData is located

const Result = ({ goHomePage }) => {
  const userAnswers = JSON.parse(localStorage.getItem("quizGivenAnswers"));
  let score = 0;

  if (Array.isArray(userAnswers)) {
    userAnswers.forEach((answerIndex, questionIndex) => {
      const question = quizData[questionIndex];
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
    <div className="result-container">
      <h2>Your Result</h2>
      <h3>
        You scored {score} out of {totalQuestions}.
      </h3>
      {score > 10 ? (
        <img
          className="correct-img"
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDhrNXZmNHl5dmNkNmhqb2RuaGgwZmJibmU1dzU2aGFtcTMwa2g2dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NEvPzZ8bd1V4Y/giphy.gif"
          alt=""
        />
      ) : (
        <img
          className="incorrect-img"
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3hpYWtvZXlub3BidzViMGpmd2FsY240ZnJhMDA0YWprOGg5cDM2MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EXHHMS9caoxAA/giphy.gif"
          alt=""
        />
      )}
      {quizData.map((item, questionIndex) => {
        return (
          <div className="result" key={item.id}>
            <h3>
              {questionIndex + 1}: {item.question}
            </h3>
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
        Try Again
      </button>
    </div>
  );
};

Result.propTypes = {
  goHomePage: PropTypes.func.isRequired,
};

export default Result;
