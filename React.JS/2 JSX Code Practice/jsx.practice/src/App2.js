import { add, multiply, subtract, divide } from "./calc.js";
function App2() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>JSX Practice</h1>
          <ul>
            <li>2 + 3 = {add(2, 3)}</li>
            <li>2 * 3 = {multiply(2, 3)}</li>
            <li>2 - 3 = {subtract(2, 3)}</li>
            <li>2 / 3 = {divide(2, 3)}</li>
          </ul>
        </header>
        <footer>
          <p>Created by Tal</p>
        </footer>
      </div>
    );
  }
  

  export default App2;
  