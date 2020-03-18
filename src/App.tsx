import React, { useState } from "react";
import "./App.css";
import { getRandomWord, Word } from "./words";
import { List } from "./List";

const App: React.FC = () => {
  const MAX = 40;
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(MAX);
  const [word, setWord] = useState<Word>(getRandomWord(min, max));
  const [hidden, setHidden] = useState(true);
  const newWord = () => {
    setWord(getRandomWord(min, max));
    setHidden(true);
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row"
        }}
      >
        <div style={{ flexGrow: 2 }} />
        <div style={{ flexGrow: 7 }}>
          <button onClick={newWord}>Roll</button>
          <input
            type="number"
            value={min.toString()}
            min="1"
            max={(max - 1).toString()}
            onChange={e => {
              const value = +e.target.value;
              setMin(isNaN(value) || value < 1 || value > max ? 1 : value);
            }}
          />
          <input
            type="number"
            value={max.toString()}
            min={(min + 1).toString()}
            max="30"
            onChange={e => {
              const value = +e.target.value;
              setMax(isNaN(value) || value > MAX || value < min ? MAX : value);
            }}
          />
        </div>
        <div style={{ flexGrow: 1 }}>
          <List items={[]} />
        </div>
      </div>
      <h1 style={{ fontSize: "8em" }} onClick={() => setHidden(false)}>
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
