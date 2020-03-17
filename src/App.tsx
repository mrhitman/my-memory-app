import chance from "chance";
import React, { useState } from "react";
import "./App.css";
import { Word, words } from "./words";

const App: React.FC = () => {
  const [word, setWord] = useState<Word>(chance().pick(words));
  const [hidden, setHidden] = useState(true);
  const newWord = () => {
    setWord(chance().pick(words));
    setHidden(true);
  };

  return (
    <div className="App">
      <button onClick={newWord}>Roll</button>
      <h1 style={{ fontSize: "7em" }} onClick={() => setHidden(false)}>
        {word.index}
      </h1>
      <div
        style={{ opacity: hidden ? 0.01 : 1 }}
        onClick={() => setHidden(false)}
      >
        <h2>{word.text}</h2>
        <img src={word.url} alt={word.text} width="500" height="500" />
      </div>
    </div>
  );
};

export default App;
