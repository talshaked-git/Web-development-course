// import logo from './logo.svg';
import './App.css';

const name = "Tal";
const number = 7;
const customStyle = {
  color: "blue",
  fontSize: "50px",
  border: "1px solid white"
}

const customStyle2 = {color: "blue"}
var getYear = new Date().getFullYear();
var getCurrentDay = new Date().getDay();
var getCurrentHour = new Date().getHours();
if (getCurrentDay === 0)
{
  customStyle.color = "red";
}
else
{
  customStyle.color = "blue";
}
var greeting = "";
if (getCurrentHour < 12)
{
  greeting = "Good Morning";
  customStyle2.color = "yellow";
}
else if (getCurrentHour < 18)
{
  greeting = "Good Afternoon";
  customStyle2.color = "orange";
}
else
{
  greeting = "Good Evening";
  customStyle2.color = "purple";
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>JSX Practice</h1>
        <h2 style={customStyle2}>{greeting}</h2>
        <ul>
          <li>My name is {name}</li>
          <li>{name}'s lucky number is: {number}</li>
          <li>The current year is: {getYear}</li>
          <li style={customStyle}>{name}'s 3 favorite dishes:</li>
        </ul>
        <div>
          <img className="food-img" src="https://www.allrecipes.com/thmb/ULiSEmH8Tje7Hh-TW1aN2P8dC98=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/240376-homemade-pepperoni-pizza-Beauty-3x4-1-6ae54059c23348b3b9a703b6a3067a44.jpg" alt="pizza"></img>

          <img className="food-img" src="https://www.mamaslebanesekitchen.com/wp-content/uploads/2011/02/chicken-shawarma-mamaslebanesekitchen1.jpg" alt="shawarma rolls"></img>

          <img className="food-img" src="https://thestayathomechef.com/wp-content/uploads/2017/10/Chicken-and-Rice-Casserole-3.jpg" alt="rice and chicken"></img>

        </div>
        

      </header>
      <footer>
        <p>Created by {name}</p>
      </footer>
    </div>
  );
}

export default App;
