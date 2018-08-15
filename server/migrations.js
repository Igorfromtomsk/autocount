const pgp = require("pg-promise")(/*options*/);
const db = pgp("postgres://homestead:secret@localhost:5432/autocounter");

const fs = require('fs');
const migrations_dir = './migrations';

fs.readdir(migrations_dir, (err, files) => {
  files.forEach(migration => {
    fs.readFile(migrations_dir + '/' + migration, (err, data) => {
      db
        .query(data.toString())
        .then(data => {
          console.log('Migration '+migration+' added with result', !!data);
        })
        .catch(error => {
          console.log('ERROR: ', error);
        })
    });
  });
});