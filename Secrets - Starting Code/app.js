//jshint esversion:6
import 'dotenv/config';
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import passport from "passport";
import session from "express-session";
import LocalStrategy from 'passport-local';
import GoogleStrategy from 'passport-google-oauth20';

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS);

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

db.connect();

passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const res = await db.query('SELECT * FROM userdb WHERE username = $1', [username]);
      if (res.rows.length > 0) {
        const first = res.rows[0];
        const match = await bcrypt.compare(password, first.password);
        if (match) {
          return done(null, first);
        } else {
          return done(null, false, { message: 'Incorrect password.' });
        }
      } else {
        return done(null, false, { message: 'Incorrect username.' });
      }
    } catch (err) {
      return done(err);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const res = await db.query('SELECT * FROM userdb WHERE id = $1', [id]);
    if (res.rows.length > 0) {
      done(null, res.rows[0]);
    } else {
      done(new Error('User not found'), null);
    }
  } catch (err) {
    done(err, null);
  }
});

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/secrets",
  userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
},//function below replaces the "findOrCreate" function provided with 3rd party api (like Mongoose findOrCreate Plugin).
async (accessToken, refreshToken, profile, cb) => {
  try {
    const res = await db.query('SELECT * FROM userdb WHERE googleId = $1', [profile.id]);
    if (res.rows.length > 0) {
      // User exists
      return cb(null, res.rows[0]);
    } else {
      // User doesn't exist, create a new user
      const newUserRes = await db.query('INSERT INTO userdb (googleId, username) VALUES ($1, $2) RETURNING *', [profile.id, profile.displayName]);
      return cb(null, newUserRes.rows[0]);
    }
  } catch (err) {
    return cb(err);
  }
}
));

app.get("/", function(req, res){
  res.render("home");
});

app.get("/login", function(req, res){
    res.render("login");
    });

app.get("/register", async function(req, res){
    res.render("register");
    });

//Registeration and login using passport with bcrypt.
app.post("/register", async function(req, res){
  const username = req.body.username;
  const password = req.body.password;
  const hashedPassword = await bcrypt.hash(password, saltRounds); 

  try {
    await db.query("INSERT INTO userdb (username, password) VALUES ($1, $2)", [username, hashedPassword]);
    res.redirect("/login");
  } catch (err) {
    console.log(err);
    res.redirect("/register");
  }
});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/secrets',
  failureRedirect: '/login',
  failureFlash: false
}));

app.get("/secrets", async function(req, res){
  if (req.isAuthenticated()) {
    try {
      const result = await db.query("SELECT * FROM secrets");
      const secrets = result.rows;
      res.render("secrets", { secrets: secrets });
    } catch (err) {
      console.log(err);
      res.status(500).send("Error retrieving secrets");
    }
  } else {
    res.redirect("/login");
  }
});


// If session is maintained, then only the user can access the protected route, otherwise redirect to login page.
app.get("/protected", (req, res) => {
  if (req.isAuthenticated()) {
    res.send("Welcome to the protected route!");
  } else {
    res.redirect("/login");
  }
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/secrets', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/secrets');
  });

app.get('/logout', function(req, res, next) { 
  req.logout(function(err) {
    if (err) { 
      return next(err); 
    }
    res.redirect('/');
  });
});

app.get("/submit", function(req, res){
  if (req.isAuthenticated()) {
    res.render("submit");
  } else {
    res.redirect("/login");
  }
});

app.post("/submit", function(req, res){
  const submittedSecret = req.body.secret;
  console.log(req.user);
  try {
    db.query("INSERT INTO secrets (secret) VALUES ($1)", [submittedSecret]);
    res.redirect("/secrets");
  } catch (err) {
    console.log(err);
    res.redirect("/submit");
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging
  res.status(500).send('Something broke!'); // Send a generic error response
});

// Registeration and login using just bcrypt.
// app.post("/register", async function(req, res){
//   const username = req.body.username;
//   const password = req.body.password;

//   try {
//     const hashedPassword = await bcrypt.hash(password, saltRounds);
//     await db.query("INSERT INTO userdb (username, password) VALUES ($1, $2)", [username, hashedPassword]);
//     res.redirect("/");
//   } catch (err) {
//     console.log(err);
//     }
// });

// app.post("/login", async function(req, res){
//   const username = req.body.username;
//   const password = req.body.password;

//   try {
//     const result = await db.query("SELECT * FROM userdb WHERE username = $1", [username]);
//     if (result.rows.length > 0) {
//       const user = result.rows[0];
//       const match = await bcrypt.compare(password, user.password);
//       if (match) {
//         res.render("secrets");
//       } else {
//         res.redirect("/login");
//       }
//     } else {
//       res.redirect("/login");
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });


app.listen(process.env.PORT, function(){
  console.log(`Server started on port ${process.env.PORT}.`);
});