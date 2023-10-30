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
  database: '5ai20' 
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

// Gestione delle tre scelte nel login
app.post('/login', (req, res) => {
    const { opzione } = req.body; // Ottieni l'opzione scelta dal form
    switch (opzione) {
        case 'opzione1':
            res.redirect('/loginOpzione1'); // Reindirizza a loginOpzione1
            break;
        case 'opzione2':
            res.redirect('/loginOpzione2'); // Reindirizza a loginOpzione2
            break;
        case 'opzione3':
            res.redirect('/loginOpzione3'); // Reindirizza a loginOpzione3
            break;
        default:
            res.send('Opzione non valida. Riprova!'); // Gestisci opzioni non valide
            break;
    }
});

// Gestione delle tre scelte nel login
app.get('/loginOpzione1', (req, res) => {
    // Reindirizza l'utente alla pagina HTML corrispondente per l'opzione 1
    res.sendFile(__dirname + '/loginOpzione1.html');
});

app.get('/loginOpzione2', (req, res) => {
    // Reindirizza l'utente alla pagina HTML corrispondente per l'opzione 2
    res.sendFile(__dirname + '/loginOpzione2.html');
});

app.get('/loginOpzione3', (req, res) => {
    // Reindirizza l'utente alla pagina HTML corrispondente per l'opzione 3
    res.sendFile(__dirname + '/loginOpzione3.html');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/style.css', (req, res) => {
    res.sendFile('style.css', {root: __dirname});
});

app.get('/script.js', (req, res) => {
    res.sendFile('script.js', {root: __dirname});
});

app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});
