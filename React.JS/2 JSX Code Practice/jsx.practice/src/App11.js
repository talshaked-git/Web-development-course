import React, { useState } from "react";

function App11() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

    function handleChange(event) {
        const {name, value} = event.target;

        setContact(prevValue => {
            if(name === "fName"){
                return {
                    fName: value,
                    lName: prevValue.lName,
                    email: prevValue.email
                };
            }else if(name === "lName"){
                return {
                    fName: prevValue.fName,
                    lName: value,
                    email: prevValue.email
                };
            }else if(name === "email"){
                return {
                    fName: prevValue.fName,
                    lName: prevValue.lName,
                    email: value
                };
            }
        });
    }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" value={contact.fName}/>
        <input onChange={handleChange} name="lName" placeholder="Last Name" value={contact.lName}/>
        <input onChange={handleChange} name="email" placeholder="Email" value={contact.email}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App11;




// import "./App11.css";
// import React, {useState} from "react";

// function App11() {
//     const [fullName, setFullName] = useState({
//         fName: "",
//         lName: ""
//     });

//    function handleChange(event){
//        const {value, name} = event.target;

//        setFullName(prevValue => {
//            if(name === "fName"){
//                return {
//                    fName: value,
//                    lName: prevValue.lName
//                };
//            }else if(name === "lName"){
//                return {
//                    fName: prevValue.fName,
//                    lName: value
//                };
//            }
//        });
//    }

//   return (
//     <div className="container">
//       <h1>Hello {fullName.fName} {fullName.lName}</h1>
//       <form>
//         <input onChange={handleChange} name="fName" placeholder="First Name" value={fullName.fName} />
//         <input onChange= {handleChange}name="lName" placeholder="Last Name" value={fullName.lName}/>
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App11;
