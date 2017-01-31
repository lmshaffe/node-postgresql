var pg = require('pg');

// the client will read connection information from
// the same environment variables used by postgres cli tools
var client = new pg.Client();

client.connect((err) => {
  if (err) throw err;

  client.query('SELECT * from public.node_table', (err, result) => {
    if (err) throw err;
    console.log(result.rows);
  //   [ anonymous { id: 1, name: 'Lee', age: 99 },
  //     anonymous { id: 2, name: 'Dex', age: 99 },
  //     anonymous { id: 3, name: 'Amber', age: 27 } ]
  });

  client.query('SELECT * from public.node_table where age = 99', (err, result) => {
    if (err) throw err;
    console.log(result.rows);
  //   [ anonymous { id: 1, name: 'Lee', age: 99 },
  //     anonymous { id: 2, name: 'Dex', age: 99 } ]
  });

  client.query('SELECT age, COUNT(age) from public.node_table group by age', (err, result) => {
    if (err) throw err;
    console.log(result.rows);
  //   [ anonymous { age: 99, count: '2' },
  //     anonymous { age: 27, count: '1' } ]
  });

  client.query('SELECT * from public.node_table where name = \'Amber\'', (err, result) => {
    if (err) throw err;

    console.log(result.rows);
    // [ anonymous { id: 3, name: 'Amber', age: 27 } ]

    client.end((err) => {
      if (err) throw err;
    });
  })
});
