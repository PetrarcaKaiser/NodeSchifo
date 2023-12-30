const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const session = require('express-session');
const url = require('url');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: 'petrarca',
  resave: true,
  saveUninitialized: true
}));

app.use(express.static(__dirname));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'petrarca'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connesso al database MySQL');
  
  const createTableQuery = "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255), nickname VARCHAR(255), password VARCHAR(255))";
  db.query(createTableQuery, (err, result) => {
    if (err) throw err;
    console.log("Tabella 'users' creata o già esistente");
  });
});

const isAuthenticated = (req, res, next) => {
  if (req.session.email && req.session.nickname) {
    return next();
  }
  res.redirect('/');
};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/register', (req, res) => {
  const { email, nickname, password } = req.body;

  const checkEmailQuery = "SELECT * FROM users WHERE email = ?";
  db.query(checkEmailQuery, [email], (err, result) => {
    if (err) {
      return console.log(err.message);
    }

    if (result.length > 0) {
      return ;
    }

    const insertQuery = "INSERT INTO users (email, nickname, password) VALUES (?, ?, ?)";
    db.query(insertQuery, [email, nickname, password], (err, result) => {
      if (err) {
        return console.log(err.message);
      }
      console.log(`Utente registrato con l'ID: ${result.insertId}`);
      res.redirect('/');
    });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const selectQuery = "SELECT * FROM users WHERE email = ? AND password = ?";
  
  db.query(selectQuery, [email, password], (err, result) => {
    if (err) {
      return console.error(err.message);
    }

    if (result.length > 0) {
      const user = result[0];
      req.session.email = user.email;
      req.session.nickname = user.nickname;
      res.redirect(`/Home/home.html?nickname=${user.nickname}`);
    } else {
      res.redirect(`/login?error=invalid_credentials`);
    }
  });
});

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
    } else {
        res.sendFile(__dirname + '/index.html');
    }
  });
});

const staticRouteWithAuth = (route, path) => {
  app.use(route, isAuthenticated, express.static(__dirname + path));
};

staticRouteWithAuth('/Home', '/Home');
staticRouteWithAuth('/TrisGioco', '/TrisGioco');
staticRouteWithAuth('/CanvasGioco', '/CanvasGioco');
staticRouteWithAuth('/SnakeGioco', '/SnakeGioco');

app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});
