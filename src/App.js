import "./styles.css";
import { useState } from "react";

//defining emoji data
const emojiList = {
  "️☺️": "Smiling Face",
  "🔥": "Fire",
  "🚀": "Rocket",
  "😂": "Face with Tears of Joy",
  "😭": "Loudly Crying Face",
  "🥹": "Face Holding Back Tears",
  "🥰": "Smiling Face with Hearts",
  "😑": "Expressionless Face"
};

//getting keys
const emojiKeys = Object.keys(emojiList);

// console.log(emojiKeys);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Meaning will appear here...");

  const handleInput = (e) => {
    const err = "Sorry! we could not recognise this emoji 🥹";
    if (e.target.value in emojiList) {
      setMeaning(emojiList[e.target.value]);
    } else if (e.target.value === "") {
      setMeaning("Meaning will appear here...");
    } else {
      setMeaning(err);
    }
  };

  const handleEmojiClick = (e) => {
    setMeaning(emojiList[e.target.innerHTML]);
  };
  return (
    <div className="App">
      <h1>Emoji interpreter</h1>
      <input
        onChange={handleInput}
        style={{ width: "75%" }}
        placeholder="Place an emoji to get the meaning..."
      />

      <div className="wrapper">{meaning}</div>
      <div className="wrapper">
        <div className="wrapper_emoji">
          {emojiKeys.map((element, idx) => (
            <span
              onClick={handleEmojiClick}
              key={idx}
              style={{ cursor: "pointer" }}
            >
              {element}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
