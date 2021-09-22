import React, { useState, useEffect } from "react";
import "./App.css";
import { getRandomWord, Word } from "./words";
import { List } from "./List";

const App: React.FC = () => {
  const MIN = 1;
  const MAX = 50;
  const [min, setMin] = useState(MIN);
  const [max, setMax] = useState(MAX);
  const [word, setWord] = useState<Word>(getRandomWord(min, max));
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    fetch("https://my-memory-app.herokuapp.com/word");
  }, []);

  const newWord = () => {
    setWord(getRandomWord(min, max));
    setHidden(true);
  };

  const data = localStorage.getItem("my-memory-list");
  const list = data ? JSON.parse(data) : [];

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
            min={MIN}
            max={(max - 1).toString()}
            onBlur={e => {
              const value = +e.target.value;
              setMin(isNaN(value) || value < 1 || value > max ? 1 : value);
            }}
            onChange={e => {
              const value = e.target.value;
              setMin(+value);
            }}
          />
          <input
            type="number"
            value={max.toString()}
            min={(min + 1).toString()}
            max={MAX}
            onChange={e => {
              const value = +e.target.value;
              setMax(isNaN(value) || value > MAX || value < min ? MAX : value);
            }}
          />
          <h1 style={{ fontSize: "8em" }} onClick={() => setHidden(false)}>
            {word.index}
          </h1>
          <div
            style={{ opacity: hidden ? 0.01 : 1 }}
            onClick={() => setHidden(false)}
          >
            <h2>{word.text}</h2>
            <img src={`/static/${word.url}`} alt={word.text} width="500" height="500" />
          </div>
        </div>
        <div style={{ flexGrow: 1 }}>
          <List items={list} />
        </div>
      </div>
    </div>
  );
};

export default App;
