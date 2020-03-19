import React, { Fragment, useState } from "react";

interface ListProps {
  items: string[];
}

export const List: React.FC<ListProps> = props => {
  const [items, setItems] = useState(props.items);
  const [visible, setVisible] = useState<string[]>([]);
  const [word, setWord] = useState<string>("");

  async function generateWord() {
    const response = await fetch("https://my-memory-app.herokuapp.com/word");
    const data = await response.json();
    if (items.includes(data)) {
      generateWord();
      return;
    }
    setWord(data);
  }

  return (
    <Fragment>
      <button
        disabled={word.trim().length === 0}
        onClick={() => {
          const newItems = [...items, word];
          setItems(newItems);
          localStorage.setItem("my-memory-list", JSON.stringify(newItems));
          generateWord();
        }}
      >
        add
      </button>
      <button onClick={generateWord}>random</button>
      <button
        onClick={() => {
          setWord("");
          setItems([]);
          localStorage.setItem("my-memory-list", "[]");
        }}
      >
        reset
      </button>
      <input value={word} onChange={e => setWord(e.target.value)} />
      <ol>
        {items.map(item => (
          <li
            key={item}
            onClick={() => {
              setVisible(
                visible.includes(item)
                  ? visible.filter(i => i !== item)
                  : [...visible, item]
              );
            }}
          >
            {visible.includes(item) ? item : "*".repeat(item.length)}
          </li>
        ))}
      </ol>
    </Fragment>
  );
};
