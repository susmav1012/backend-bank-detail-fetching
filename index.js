const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');

const app = express();

const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bank',
  password: 'susmav',
  port: 5432,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




// GET /bank-accounts/search?q=<search_term>&limit=<limit>&offset=<offset>
app.get('/bankdetail/search', (req, res) => {
  const searchQuery = req.query.q;
  const limit = parseInt(req.query.limit);
  const offset = parseInt(req.query.offset);
  const sqlQuery = `SELECT * FROM bankdetail
  WHERE  LOWER(city) LIKE $1 or LOWER(branch) LIKE $1 or LOWER(states) LIKE $1 or LOWER(district) LIKE $1 or LOWER(address) LIKE $1  ORDER BY ifsc ASC LIMIT $2 OFFSET $3;`;

  pool.query(sqlQuery, [`%${searchQuery.toLowerCase()}%`, limit, offset], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error searching bank accounts');
    } else {
      res.send(result.rows);
    }
  });
});

///api/branch?q=LONI&limit=1&offset=1
app.get('/bankdetail/branch', (req, res) => {
    const searchQuery = req.query.q;
    const limit = parseInt(req.query.limit);
    const offset = parseInt(req.query.offset);
    const sqlQuery = `SELECT * FROM bankdetail
    WHERE lower(branch) LIKE $1
    ORDER BY ifsc DESC
    LIMIT $2 OFFSET $3;`;
  
    pool.query(sqlQuery, [`${searchQuery.toLowerCase()}`, limit, offset], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error searching bank accounts');
      } else {
        res.send(result.rows);
      }
    });
  });
  





app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
