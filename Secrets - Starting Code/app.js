//jshint esversion:6
import 'dotenv/config';
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import localPassport from "passport-local";
import passport from "passport";
import session from "express-session";

const app = express();

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS);

db.connect();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.render("home");
});

app.get("/login", function(req, res){
    res.render("login");
    });

app.get("/register", async function(req, res){
    res.render("register");
    });


app.post("/register", async function(req, res){
  const username = req.body.username;
  const password = req.body.password;

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await db.query("INSERT INTO userdb (username, password) VALUES ($1, $2)", [username, hashedPassword]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
    }
});

app.post("/login", async function(req, res){
  const username = req.body.username;
  const password = req.body.password;

  try {
    const result = await db.query("SELECT * FROM userdb WHERE username = $1", [username]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        res.render("secrets");
      } else {
        res.redirect("/login");
      }
    } else {
      res.redirect("/login");
    }
  } catch (err) {
    console.log(err);
  }
});


app.listen(process.env.PORT, function(){
  console.log(`Server started on port ${process.env.PORT}.`);
});