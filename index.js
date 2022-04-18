const express = require("express");
const logins = require("./data");
const games = require("./game");
const router = express.Router()

const app = express();
const port = 8080;

// Anggap saja sebuah database
const users = [];

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
});

//API 
app.post("/api/login", (req, res) => {
  // Destructuring
  const { username, password } = req.body;

  let obj = logins.find(o => o.username === username && o.password === password);

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

app.post("/api/signIn", (req, res) => {
  // Destructuring
  const { username, password } = req.body;

  // Dapatkan ID dari item terakhir
  const lastId = logins[logins.length - 1].id;
  const newId = lastId + 1;

  const login = {
    id: newId,
    username: username,
    password: password,
  };

  logins.push(login);

  res.status(201).json(login);
});

// Home
app.get("/", (req, res) => {
  res.render("index");
});

//Router Game
app.use("/game", games);


app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
