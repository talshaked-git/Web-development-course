import './App.css';
import contacts from './contacts.js';
import Card from './Card.js';
import Avatar from './Avatar.js';


function App3() {
    return (
      <div className="App3">
        <h1 className="heading">My Contacts</h1>
        <Avatar imgURL="https://www.foodandwine.com/thmb/4qg95tjf0mgdHqez5OLLYc0PNT4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" />
        {/* lesson 17*/}  
        {contacts.map(contact => (
          <Card 
            key={contact.id}
            id={contact.id}
            name={contact.name}
            imgURL={contact.imgURL}
            phone={contact.phone}
            email={contact.email}
          />
          )
        )}
          
          {/*//lesson 16 <Card 
            name={contacts[0].name}
            imgURL={contacts[0].imgURL}
            phone={contacts[0].phone}
            email={contacts[0].email}
          />
          <Card 
            name={contacts[1].name}
            imgURL={contacts[1].imgURL}
            phone={contacts[1].phone}
            email={contacts[1].email}
          />
          <Card 
            name={contacts[2].name}
            imgURL={contacts[2].imgURL}
            phone={contacts[2].phone}
            email={contacts[2].email}
          />   */}
          {/*//lesson 14-15 <Card name="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" alt="avatar_img" tel="+123 456 789" email="b@beyonce.com"/>
          <Card name="Jack Bauer" img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" alt="avatar_img" tel="+987 654 321" email="jack@nowhere.com"/>
          <Card name="Chuck Norris" img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" alt="avatar_img" tel="+918 372 574" email="gmail@chucknorris.com" /> */}
      </div>
    );
  }
  

  export default App3;
  