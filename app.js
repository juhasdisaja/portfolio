const express = require('express');
const path = require('path');

//const mysql = require('mysql');

const app = express();
app.use(express.static(path.join(__dirname + '/public')));
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'db_privacy'
// });
// connection.connect((err) => {
//     if (err) {
//         console.log('Gagal menghubungkan database: ' + err.stack);
//         return;
//     }
//     console.log('Sukses menghubungkan database! ');
// });

app.get('/', (req, res) => {

    res.render('index.ejs');
    // connection.query(
    //     'SELECT * FROM user',
    //     (error, results) => {
    //         res.render('hallo.ejs', { data: results });
    //     }
    // );
});

app.listen(3000);