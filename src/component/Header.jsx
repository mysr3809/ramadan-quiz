import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ startQuiz }) => {
  return (
    <div className="header-container">
      <h1 data-aos="fade-down">Welcome to Ramadan Quiz</h1>
      <br></br>
      <h3 data-aos="fade-up" data-aos-duration="1000">
        Approximately 1,250,000 Muslims live in the Netherlands, and those
        living in the Netherlands respect the worship and lifestyle of Muslims.
      </h3>
      <br></br>
      <h3 data-aos="fade-up" data-aos-duration="1500">
        With this quiz, we will take a closer look at the lives of Muslims and
        measure how much we know the religion of the people we live with.
      </h3>

      <button
        data-aos="fade-up"
        data-aos-duration="2000"
        onClick={startQuiz}
        className="start-btn"
      >
        Let&rsquo;s Start
      </button>
    </div>
  );
};

Header.propTypes = {
  startQuiz: PropTypes.func.isRequired,
};

export default Header;
