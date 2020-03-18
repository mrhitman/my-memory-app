import React, { Fragment, useState } from "react";

interface ListProps {
  items: string[];
}

export const List: React.FC<ListProps> = props => {
  const [items, setItems] = useState(props.items);
  const [visible, setVisible] = useState<string[]>([]);
  const [word, setWord] = useState<string>("");

  return (
    <Fragment>
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
      <button
        onClick={() => {
          setItems([...items, word]);
        }}
      >
        add
      </button>
      <button
        onClick={async () => {
          const response = await fetch("http://localhost:3001/word");
          const data = await response.json();
          setWord(data);
        }}
      >
        random
      </button>
      <input value={word} onChange={e => setWord(e.target.value)} />
    </Fragment>
  );
};
