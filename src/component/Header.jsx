import PropTypes from "prop-types";

const Header = ({ startQuiz }) => {
  return (
    <div>
      <h1>Welcome to Ramadan Quiz</h1>
      <br></br>
      <h3>
        Approximately 1,250,000 Muslims live in the Netherlands, and those
        living in the Netherlands respect the worship and lifestyle of Muslims.
      </h3>
      <br></br>
      <h3>
        With this quiz, we will take a closer look at the lives of Muslims and
        measure how much we know the religion of the people we live with.
      </h3>

      <button onClick={startQuiz} className="start-btn">
        Let&rsquo;s Start
      </button>
    </div>
  );
};

Header.propTypes = {
  startQuiz: PropTypes.func.isRequired,
};

export default Header;
