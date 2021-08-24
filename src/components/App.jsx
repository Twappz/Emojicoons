import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function showEmojis(emojipedia) {
  return (
    <Entry
      id={emojipedia.id}
      key={emojipedia.id}
      name={emojipedia.name}
      emoji={emojipedia.emoji}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
       <div class = "emojicontainer">
      {emojipedia.map(showEmojis)}
      </div>
    </div>
  );
}
export default App;
