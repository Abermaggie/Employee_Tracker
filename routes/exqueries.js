const getDept = () => {
    db.query('SELECT * FROM department', function (err,results) {
    console.log(results);
});
}

