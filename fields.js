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

con.connect(function(err) {
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
	//});

	//Make table w/o ID column to add it later

	//var sql = "CREATE TABLE customers (Name VARCHAR(255), Email VARCHAR(255))";
	//con.query(sql, function (err, result) {
		//if (err) throw err;
		//console.log("Table created!");
	
	//});
	//Alter Table to include ID primary key

	//var sql = "ALTER TABLE customers ADD COLUMN ID INT AUTO_INCREMENT PRIMARY KEY";
	//con.query(sql, function (err, result) {
	//	if (err) throw err;
	//	console.log("Table altered");
	//});

	//Insert into #1

	//var sql = "INSERT INTO customers (Name, Email) VALUES ('Marquise Williams', 'marwil96@yahoo.com')";
	//con.query(sql, function (err, result) {
	//	if (err) throw err;
	//	console.log("");
	//});

	//Insert #2

	//var sql = "INSERT INTO customers (Name, Email) VALUES ('John Elder', 'john.elder@gmail.com')";
	//con.query(sql, function (err, result) {
	//	if (err) throw err;
	//	console.log("Data inserted successfully!");
	//});

	//Insert #3

	//var sql = "INSERT INTO customers (Name, Email) VALUES ('Mary Smith', 'marysmith@yahoo.com')";
	//con.query(sql, function (err, result) {
	//	if (err) throw err;
	//	console.log("More data added");
	//});

	//Insert Many
	//var sql = "INSERT INTO customers (name, email) VALUES ?";
	
	//Create array to insert multiple values

	//var values = [
	//	['Tim Rogers', 'trogers@yahoo.com'],
	//	['Sarah Adams', 'sarah85@yahoo.com'],
	//	['Tia Sommers', 'tiasommers@gmail.com'],
	//	['James Campbell', 'jcamp34@yahoo.com'],
	//	['Alejandro Dominguez', 'drobeast@gmail.com'],
	//	['Eric Brown', 'ericbrown@gmail.com'],
	//	['Deandre Holness', 'dre@gmail.com'],

	//]
	//con.query(sql, [values], function (err, result) {
	//	if (err) throw err;
	//	console.log("Additional data added: " + result.affectedRows);
	//});

//var sql = "INSERT INTO customers (Name, Email) VALUES ('Steve Rogers', 'captamerica@gmail.com')";
	//con.query(sql, function(err, result) {
	//	if (err) throw err;
	//	console.log(result);
	//});

	//Select Data

	//var sql = "SELECT * FROM customers";
	//con.query(sql, function (err, result, fields) {
	//	if (err) throw err;
	//	console.log(result[0].Name + " | " + result[0].Email);
	//});

	//Loop Through Selected using for loop

	//var sql = "SELECT * FROM customers";
	//con.query(sql, function (err, result, fields) {
	//	if (err) throw err;
	//	var i;
	//	for(i = 0; i < result.length; i++) {
	//		console.log(result[i].Name + " | " + result[i].Email);
	//	};

	//});


	//Select Specific Data

	//var sql = "SELECT Name FROM customers";
	//con.query(sql, function (err, result, fields) {
	//	if (err) throw err;
	//	console.log(result);
	//});

	//Select Fields

	//var sql = "SELECT Name, ID FROM customers";
	//var sql = "SELECT * FROM customers";
	//con.query(sql, function (err, result, fields) {
	//	if (err) throw err;
	//	console.log(fields[0].name);
	//	console.log(fields[1].name);
	//});

	//Where Clause

	var sql = "SELECT Name FROM customers WHERE ID = 1";
	con.query(sql, function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});



