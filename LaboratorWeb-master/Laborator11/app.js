const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mydb'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
  var sql = "SELECT * FROM equipment";
	connection.query(sql, (err, result)=>{
		console.log(result);
}	);
});

