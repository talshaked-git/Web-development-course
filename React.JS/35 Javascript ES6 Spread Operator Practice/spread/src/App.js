import {useState} from "react";
import "./App.css";
import Item from "./components/Item";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function onChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={onChange} type="text" value={inputText}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <ul>
            {items.map((item, index) => ( <Item key={index} id={index} text={item} onChecked={deleteItem}/> ))}
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default App;