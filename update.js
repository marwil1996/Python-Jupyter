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

	//var sql = "SELECT Name FROM customers WHERE ID = 1";
	//var sql = "SELECT Name FROM customers WHERE ID >= 4";
	//var sql = "SELECT Name FROM customers WHERE Name LIKE 'T%'";
	//var sql = "SELECT Email FROM customers WHERE ID <=8";
	//con.query(sql, function (err, result, fields) {
	//	if (err) throw err;
	//	console.log(result);
	//});

	//AND \ OR

	//var sql = "SELECT *FROM customers WHERE Name LIKE 'T%' OR ID >3";
	//var sql = "SELECT Name FROM customers WHERE Name like 'J%' AND ID = 6";
	
	//Won't return anything since both conditions aren't met. Need Name to start with J and have ID = 6

	//var sql = "SELECT Email FROM customers WHERE Email LIKE 'e%' AND ID = 9";
	//Data shows up since both conditions are met

	//con.query(sql, function(err, result, fields) {
	//	if (err) throw err;
	//	console.log(result);
	//});

	//Where Variables

	//var name_search = 't%';
	//var id_search = 1;
	//var sql = "SELECT * FROM customers WHERE Name LIKE ? or ID = ?";
	
	//Input array of where variables before function call

	//con.query(sql, [name_search, id_search], function(err, result, fields) {
	//	if (err) throw err;
	//	console.log(result);
	//});

	//Order By

	//var sql = "SELECT * FROM customers ORDER BY Name";
	//var sql = "SELECT * FROM customers ORDER BY Email DESC";
	//con.query(sql, function(err, result) {
	//	if (err) throw err;
	//	console.log(result);
	//});

	//Delete Record

	//var sql = "DELETE FROM customers WHERE ID = 11";
	//con.query(sql, function(err, result) {
	//	if (err) throw err;
	//	console.log(result);
	//});

	//Update Records

	//var sql = "UPDATE customers SET Name = 'Marquise R. Williams' WHERE Name = 'Marquise Williams'";
	//con.query(sql, function(err, result) {
	//	if (err) throw err;
	//	console.log(result);
	//});

	var sql = "UPDATE customers SET Email = 'ericbrown893@gmail.com' WHERE ID = 9";
	con.query(sql, function(err, result) {
		if (err) throw err;
		console.log(result);
	});
});



