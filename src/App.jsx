import "./App.css";
import Header from "./component/Header";
import Quiz from "./component/Quiz/Quiz";
import Result from "./component/Result/Result";
import { useState } from "react";
function App() {
  const [start, setStart] = useState(false);
  const [result, setResult] = useState(false);
  const startQuiz = () => {
    setStart(true);
  };

  const finishQuiz = () => {
    setStart(false);
    setResult(true);
  };

  const goHomePage = () => {
    setStart(false);
    setResult(false);
  };
  return (
    <div className="App">
      <div className="container">
        {!start && !result && <Header startQuiz={startQuiz} />}
        {start && <Quiz finishQuiz={finishQuiz} />}
        {result && <Result goHomePage={goHomePage} />}
      </div>
    </div>
  );
}

export default App;
