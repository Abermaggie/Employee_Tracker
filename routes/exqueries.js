const fs = require('fs');
const util = require('util');
const {readFromFile, readAndAppend} = require('../helpers/fsUtils');
const destination = ('./seeds.sql');

const readFile = (req,res) => {
    readFromFile(destination).then((data) => res.json(JSON.parse(data)));
};

/**
 * 
 * @param {string} destination 
 * @param {object} content 
 * @returns {void}
 */

const writeFile = (req, res) => {
    console.log(req);
    if(req) {
        let tableName = req.tableName;
        let deptId = req.deptId;
        let deptName = req.deptName;
        let newNote = rendertable(req);
        fs.writeFile('./sql_folder/seeds.sql', newNote, (err) =>
        err ? console.log(err) : console.log('success!'))
        console.log(newNote);
        readAndAppend(newNote, destination);
        console.log('Success!');
    }
}

let rendertable = ({tableName, deptId, deptName}) =>
`INSERT INTO ${tableName} (id, name)
        VALUES (${deptId}, ${deptName})
        `;

module.exports = {readFile, writeFile};