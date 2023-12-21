import "./App6.css";
import Login from "./Login";
import Form from "./Form";

// var isLoggedIn = false;
var userIsRegistered = true;

function App6() {
    return (
      <div className="container">
        {/* {isLoggedIn ? <h1>Hello</h1> : <Login />} */}
        {/* {userIsRegistered ? <Login /> : <Form />} */}
        <Form isRegistered={userIsRegistered}/>
      </div>
    );
  }
  
  export default App6;
  