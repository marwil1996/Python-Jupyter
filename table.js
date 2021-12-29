var mysql = require('mysql');

console.log('Hello World!');

//Create connection

var con = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database: "nodedb",
})

//Connect to MySQL

con.connect(function(err){
	if (err) throw err;
	console.log("Connected to the database!");

	//Create Database w/ error should one occur
	//con.query("CREATE DATABASE nodeDB", function (err, result) {
		//if (err) throw err;
		//console.log("Database created!");
	//});

	//Create Table
	//var sql = "CREATE TABLE customers (ID INT AUTO_INCREMENT PRIMARY KEY, Name VARCHAR(255), Email VARCHAR(255))";
	//con.query(sql, function (err, result) {
		//if (err) throw err;
		//console.log("Table has been created!");
	//};

	//Make table w/o ID column to add it later
	//var sql = "CREATE TABLE customers (Name VARCHAR(255), Email VARCHAR(255))";
	//con.query(sql, function (err, result) {
		//if (err) throw err;
		//console.log("Table created!");
	
	//});
	//Alter Table to include ID primary key
	var sql = "ALTER TABLE customers ADD COLUMN ID INT AUTO_INCREMENT PRIMARY KEY"
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table altered");
	})
});



