var pgb = require('pg-promise')();
var {pgConnConfig} = require('./pg-promise-config')



var db = pgb(pgConnConfig);

db.query('SELECT * FROM node_table WHERE name=${name}', {
  name: 'Lee'
}).then((data) => {
  console.log(data);
}).catch((err) => {
  console.log('ERROR:', err.message || err);
});

// db.one("insert into node_table(name, age) values($1, $2) returning id", ['Arya', 2])
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log('ERROR:', err.message || err);
//   });

// db.result("delete from node_table where id = $1", 5)
//   .then((data) => {
//     console.log(`${data.rowCount} records deleted`);
//   })
//   .catch((err) => {
//     console.log('ERROR:', err.message || err);
//   })

db.query('SELECT * FROM node_table where name=${name} and age=${age}', {
  name: 'Arya',
  age: 2
}).then((data) => {
  console.log(data);
}).catch((err) => {
  console.log('ERROR:', err.message || err);
})
