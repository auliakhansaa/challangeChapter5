const express = require("express");
const logins = require("./data");

const app = express();
const port = 8080;

// Anggap saja sebuah database
const users = [];

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.post("/api/login", (req, res) => {
  // Destructuring
  const { user, pass } = req.body;

  let obj = logins.find(o => o.username === user && o.password === pass);

  if (obj){
      res.status(200).json({
      message: `Login Success`,
    });
  } else {
    res.status(500).json({
      message: `Login failed`,
    });
  }

});

app.get("/api/login/:id",(req,res)=>{
  const login = logins.find((e) => e.id === Number(req.params.id));
  res.status(200).json(login);
})

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/game", (req, res) => {
  res.render("game");
});



app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
