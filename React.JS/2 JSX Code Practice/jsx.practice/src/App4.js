import "./App4.css";
import Entry from "./Entry.js";
import emojipedia from "./emojipedia";

function createEntry(emoji) {
    return (
        <Entry
            key={emoji.id}
            emoji={emoji.emoji}
            name={emoji.name}
            meaning={emoji.meaning}
        />
    );
}

function App4() {
    return (
        <div>
          <h1>
            <span>emojipedia</span>
          </h1>

          <dl className="dictionary">
            {emojipedia.map(createEntry)}
          </dl>
        </div>
      );
    }



export default App4;