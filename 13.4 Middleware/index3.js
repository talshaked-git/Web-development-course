import express from "express";

const app = express();
const port = 3000;

app.use(logger);

app.get("/", (req, res) => {
  res.send("test: ", req.url);
  res.send("method: ", req.method);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


function logger(req, res, next){
  console.log("Request method:", req.method);
  console.log("Request URL:", req.url);
  next();
}