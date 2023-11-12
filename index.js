const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

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

// Serve the initial login/registration page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/style.css', (req, res) => {
    res.sendFile('style.css', {root: __dirname});
});

app.get('/script.js', (req, res) => {
    res.sendFile('script.js', {root: __dirname});
});

// Registrazione
app.post('/register', (req, res) => {
    const { email, nickname, password } = req.body;
    const insertQuery = "INSERT INTO users (email, nickname, password) VALUES (?, ?, ?)";
    db.query(insertQuery, [email, nickname, password], (err, result) => {
        if (err) {
            return console.log(err.message);
        }
        console.log(`Utente registrato con l'ID: ${result.insertId}`);
        res.redirect('/');
    });
});

// Login and redirect to the chosen game
app.post('/login', (req, res) => {
    const { email, password, redirectOption } = req.body;
    const selectQuery = "SELECT * FROM users WHERE email = ? AND password = ?";
    
    db.query(selectQuery, [email, password], (err, result) => {
        if (err) {
            return console.error(err.message);
        }

        if (result.length > 0) {
            const nickname = result[0].nickname;

            // Serve specific game files based on user's choice
            if (redirectOption === 'tris') {
                res.sendFile('TrisGioco/Tris.html', { root: __dirname });
            } else if (redirectOption === 'canvas') {
                res.sendFile('CanvasGioco/Canvas.html', { root: __dirname });
            } else if (redirectOption === 'snake') {
                res.sendFile('SnakeGioco/Snake.html', { root: __dirname });
            } else {
                res.send(`Benvenuto ${nickname}!`);
            }
        } else {
            res.send('Credenziali errate. Riprova!');
        }
    });
});

// Serve static files for Tris
app.use('/TrisGioco', express.static(__dirname + '/TrisGioco'));

// Serve static files for Canvas
app.use('/CanvasGioco', express.static(__dirname + '/CanvasGioco'));

// Serve static files for Snake
app.use('/SnakeGioco', express.static(__dirname + '/SnakeGioco'));

app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});
