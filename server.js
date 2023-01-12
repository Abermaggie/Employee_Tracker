const express = require('express');
const mysql = require('mysql12');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: flase}));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Rog&Will2020',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);

app.use((req,res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});