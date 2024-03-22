import "./App.css";
import Header from "./component/Header";

function App() {
  const startQuiz = () => {
    console.log("clicked");
  };
  return (
    <div className="App">
      <div className="container">
        <Header startQuiz={startQuiz} />
      </div>
    </div>
  );
}

export default App;
