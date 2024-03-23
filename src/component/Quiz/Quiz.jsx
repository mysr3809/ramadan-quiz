import "./Quiz.css";
import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import quizData from "../../questions";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Quiz = ({ finishQuiz }) => {
  const [question, setQuestion] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [givenAnswers, setGivenAnswers] = useState(() => {
    // Load previously given answers from local storage, if any
    const savedAnswers = localStorage.getItem("quizGivenAnswers");
    return savedAnswers ? JSON.parse(savedAnswers) : [];
  });

  // Effect to update local storage whenever givenAnswers changes
  useEffect(() => {
    localStorage.setItem("quizGivenAnswers", JSON.stringify(givenAnswers));
  }, [givenAnswers]);

  const nextQuestion = () => {
    updateGivenAnswers();
    if (question < quizData.length) {
      setSelectedAnswer(null);
      setQuestion(question + 1);
    }
  };

  const previousQuestion = () => {
    if (question > 1) {
      setQuestion(question - 1);
      setSelectedAnswer(givenAnswers[question - 2]);
    }
  };

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
  };

  const updateGivenAnswers = () => {
    const updatedAnswers = [...givenAnswers];
    updatedAnswers[question - 1] = selectedAnswer;
    setGivenAnswers(updatedAnswers);
  };

  const handleFinishQuiz = () => {
    const updatedAnswers = [...givenAnswers];
    updatedAnswers[question - 1] = selectedAnswer;
    setGivenAnswers(updatedAnswers);
    localStorage.setItem("quizGivenAnswers", JSON.stringify(updatedAnswers)); // Ensure local storage is updated
    finishQuiz(updatedAnswers);
  };

  return (
    <div className="quiz" data-aos="fade-up">
      <h3 data-aos="fade-down">
        Question {question} / {quizData.length}
      </h3>
      <div>
        <h4 data-aos="fade-down" className="question-container">
          {quizData[question - 1].question}
        </h4>
        {quizData[question - 1].answers.map((answer, index) => (
          <div
            className={`answer-container ${
              selectedAnswer === index ? "selected" : ""
            }`}
            key={index}
            onClick={() => handleAnswerClick(index)}
          >
            <div className="answer">
              <p className="answer-text">{answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="button-container">
        {question > 1 && (
          <button onClick={previousQuestion} className="previous-btn">
            Previous
          </button>
        )}

        {question < quizData.length && selectedAnswer !== null && (
          <button onClick={nextQuestion} className="next-btn">
            Next
          </button>
        )}

        {question === quizData.length && selectedAnswer !== null && (
          <button onClick={handleFinishQuiz} className="finish-btn">
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

Quiz.propTypes = {
  finishQuiz: PropTypes.func.isRequired,
};

export default Quiz;
