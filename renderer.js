// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


var mysql = require('mysql');
// var bcrypt = require('bcrypt');
var ipc = electron.ipcRenderer


// function createConnection () {

// 	// Add the credentials to access your database
// 	var connection = mysql.createConnection({
// 	    host     : 'localhost',
// 	    user     : 'root',
// 	    password : '', // or the original password : 'apaswword'
// 	    database : 'feed'
// 	});

// 	// connect to mysql
// 	connection.connect(function(err) {
// 	    // in case of error
// 	    if(err){
// 	        console.log(err.code);
// 	        console.log(err.fatal);
// 	    }
// 	});
// 	// Perform a query
// 	$query = 'SELECT * FROM `user` LIMIT 10';

// 	connection.query($query, function(err, rows, fields) {
// 	    if(err){
// 	        console.log("An error ocurred performing the query.");
// 	        console.log(err);
// 	        return;
// 	    }

// 	    console.log("Query succesfully executed", rows);
// 	});

// 	// Close the connection
// 	connection.end(function(){
// 	    // The connection has been closed
// 	});

// }
