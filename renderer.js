// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


var mysql = require('mysql');
// var bcrypt = require('bcrypt');
var ipc = electron.ipcRenderer



$( ".goNewEmployee" ).click(function() {
	$("#navigation").load("EmployeeForm	.html");
});

$( ".goEmployeeMain" ).click(function() {
	$(".container").load("templates/employeeMain.html");
	console.log(123)
});

// $( ".goNewEmployee" ).click(function() {
// 	$("#navigation").load("EmployeeForm	.html");
// });

// $( ".goNewEmployee" ).click(function() {
// 	$("#navigation").load("EmployeeForm	.html");
// });

// $( ".goNewEmployee" ).click(function() {
// 	$("#navigation").load("EmployeeForm	.html");
// });




var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '', // or the original password : 'apaswword'
    database : 'bills'
});

// connect to mysql
connection.connect(function(err) {
    // in case of error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});


var app = angular.module('myApp', []);

function createConnection () {


	// Perform a query
	$query = 'SELECT * FROM `user`';

	connection.query($query, function(err, rows, fields) {
	    if(err){
	        console.log("An error ocurred performing the query.");
	        console.log(err);
	        return;
	    }

	    console.log("Query succesfully executed", rows);
	});

	// Close the connection
	connection.end(function(){
	    // The connection has been closed
	});

}


function addEmployee(){
    var email = document.getElementById("employeeEmail").value
    var first = document.getElementById("employeeFistName").value
    var last = document.getElementById("employeeLastName").value
	$query = "INSERT INTO `employee` VALUES ('"+ email + "','"+ first +"', '"+ Last+"');";

	connection.query($query, function(err, rows, fields) {
	    if(err){
	        console.log("An error ocurred performing the query.");
	        console.log(err);
	        return;
	    }
	    alert("Employee Succesfully Created!")
	    $("#navigation").load("EmployeeMain.html");
	});
}


function deleteEmployee(email){
	$query = "DELETE FROM `employee` WHERE `email` = '"+  email  +"'";

	connection.query($query, function(err, rows, fields) {
	    if(err){
	        console.log("An error ocurred performing the query.");
	        console.log(err);
	        return;
	    }
	    alert("Employee Succesfully Deleted!")
	    $("#navigation").load("EmployeeMain.html");
	});
}


app.controller('getAllEmployees', function($scope) {
	$query = "SELECT * FROM `employees`";

	connection.query($query, function(err, rows, fields) {
	    if(err){
	        console.log("An error ocurred performing the query.");
	        console.log(err);
	        return;
	    }
	    
	    $scope.employees = rows;
	});
});


// STILL TO DECIDE WHAT TO INCLUDE HERE
app.controller('getEmployee', function($scope) {
	$query = "SELECT * FROM `employees` where ";

	connection.query($query, function(err, rows, fields) {
	    if(err){
	        console.log("An error ocurred performing the query.");
	        console.log(err);
	        return;
	    }
	    
	    $scope.employees = rows;
	});
});




function updateEmployee(email, first, last, oldemail){
// UPDATE table_name SET field1 = new-value1, field2 = new-value2
// [WHERE Clause]


	$query = "UPDATE `employee` SET `email` = '"+  email  +"', firstname = '"+  first  +"', lastname = '"+  last  +"' where `email` = '"+  oldemail  +"'";

	connection.query($query, function(err, rows, fields) {
	    if(err){
	        console.log("An error ocurred performing the query.");
	        console.log(err);
	        return;
	    }
	    alert("Employee Succesfully Deleted!")
	    $("#navigation").load("EmployeeMain.html");
	});


}














function addHouse(){
    var billno = document.getElementById("houseBillNo").value
    var compno = document.getElementById("houseCompNo").value
    var unitid = document.getElementById("houseUnitId").value
    var vacant = document.getElementById("houseVacant").value
	$query = "INSERT INTO `house` VALUES ('"+ billno + "','"+ compno +"', '"+ unitid+"', '"+ vacant+"');";

	connection.query($query, function(err, rows, fields) {
	    if(err){
	        console.log("An error ocurred performing the query.");
	        console.log(err);
	        return;
	    }
	    alert("House Succesfully Added!")
	    $("#navigation").load("HouseMain.html");
	});
}


function deleteHouse(unitid){
	$query = "DELETE FROM `employee` WHERE `email` = '"+  unitid  +"'";

	connection.query($query, function(err, rows, fields) {
	    if(err){
	        console.log("An error ocurred performing the query.");
	        console.log(err);
	        return;
	    }
	    alert("Employee Succesfully Deleted!")
	    $("#navigation").load("HouseMain.html");
	});
}


app.controller('getAllHouses', function($scope) {
	$query = "SELECT * FROM `housing`";

	connection.query($query, function(err, rows, fields) {
	    if(err){
	        console.log("An error ocurred performing the query.");
	        console.log(err);
	        return;
	    }
	    
	    $scope.houses = rows;
	});
});


// STILL TO DECIDE WHAT TO INCLUDE HERE
app.controller('getHouse', function($scope) {
	$query = "SELECT * FROM `housing` where `";

	connection.query($query, function(err, rows, fields) {
	    if(err){
	        console.log("An error ocurred performing the query.");
	        console.log(err);
	        return;
	    }
	    
	    $scope.houses = rows;
	});
});

var pdfReader = require('pdfreader');
function generateFunction() {



}

function updateHouse(landline){

    var vacant = document.getElementById("houseVacant").value

// UPDATE table_name SET field1 = new-value1, field2 = new-value2
// [WHERE Clause]


	$query = "UPDATE `housing` SET `vacant` = '"+  vacant  +"' WHERE `landline` = '"+  landline  +"'";

	connection.query($query, function(err, rows, fields) {
	    if(err){
	        console.log("An error ocurred performing the query.");
	        console.log(err);
	        return;
	    }
	    alert("Employee Succesfully Deleted!")
	    $("#navigation").load("EmployeeMain.html");
	});


}









function addAssignment(){
    var startDate = document.getElementById("assignmentStartDate").value
    var endDate = document.getElementById("assignmentEndDate").value
    var andrewId = document.getElementById("assignmentAndrewId").value
    var landline = document.getElementById("assignmentLandline").value
	$query = "INSERT INTO `assignment` VALUES ('"+ startDate + "','"+ endDate +"', '"+ landline +"', '"+ andrewId+"');";

	connection.query($query, function(err, rows, fields) {
	    if(err){
	        console.log("An error ocurred performing the query.");
	        console.log(err);
	        return;
	    }
	    alert("Assignment Succesfully Added!")
	    $("#navigation").load("HouseMain.html");
	});
}


function deleteAssignment(landline, andrewId){
	$query = "DELETE FROM `assignment` WHERE `landline` = '"+  landline  +"', `andrewId` = '"+  andrewId  +"'";

	connection.query($query, function(err, rows, fields) {
	    if(err){
	        console.log("An error ocurred performing the query.");
	        console.log(err);
	        return;
	    }
	    alert("Assignment Succesfully Ended!")
	    $("#navigation").load("HouseMain.html");
	});
}


app.controller('getAllAssignments', function($scope) {
	$query = "SELECT * FROM `assignment`";

	connection.query($query, function(err, rows, fields) {
	    if(err){
	        console.log("An error ocurred performing the query.");
	        console.log(err);
	        return;
	    }
	    
	    $scope.assignment = rows;
	});
});


// STILL TO DECIDE WHAT TO INCLUDE HERE
app.controller('getAssignment', function($scope) {
	$query = "SELECT * FROM `housing` where `";

	connection.query($query, function(err, rows, fields) {
	    if(err){
	        console.log("An error ocurred performing the query.");
	        console.log(err);
	        return;
	    }
	    
	    $scope.employees = rows;
	});
});



function updateAssignment(landline){

    var startDate = document.getElementById("assignmentStartDate").value
    var endDate = document.getElementById("assignmentEndDate").value
    var andrewId = document.getElementById("assignmentAndrewId").value
    var landline = document.getElementById("assignmentLandline").value
	$query = "UPDATE `assignment` SET `startdate` = '"+ startDate + "', `enddate` = '"+ endDate +"', `landline` = '"+ landline +"', andrewId = '"+ andrewId+"';";

	connection.query($query, function(err, rows, fields) {
	    if(err){
	        console.log("An error ocurred performing the query.");
	        console.log(err);
	        return;
	    }
	    alert("Employee Succesfully Deleted!")
	    $("#navigation").load("HouseMain.html");
	});


}










function addCompound(){
    var startDate = document.getElementById("assignmentStartDate").value
    var endDate = document.getElementById("assignmentEndDate").value
    var andrewId = document.getElementById("assignmentAndrewId").value
    var landline = document.getElementById("assignmentLandline").value
	$query = "INSERT INTO `assignment` VALUES ('"+ startDate + "','"+ endDate +"', '"+ landline +"', '"+ andrewId+"');";

	connection.query($query, function(err, rows, fields) {
	    if(err){
	        console.log("An error ocurred performing the query.");
	        console.log(err);
	        return;
	    }
	    alert("Assignment Succesfully Added!")
	    $("#navigation").load("HouseMain.html");
	});
}


function deletCompound(landline, andrewId){
	$query = "DELETE FROM `assignment` WHERE `landline` = '"+  landline  +"', `andrewId` = '"+  andrewId  +"'";

	connection.query($query, function(err, rows, fields) {
	    if(err){
	        console.log("An error ocurred performing the query.");
	        console.log(err);
	        return;
	    }
	    alert("Assignment Succesfully Ended!")
	    $("#navigation").load("HouseMain.html");
	});
}


app.controller('getAllCompounds', function($scope) {
	$query = "SELECT * FROM `assignment`";

	connection.query($query, function(err, rows, fields) {
	    if(err){
	        console.log("An error ocurred performing the query.");
	        console.log(err);
	        return;
	    }
	    
	    $scope.assignment = rows;
	});
});


// STILL TO DECIDE WHAT TO INCLUDE HERE
app.controller('getCompound', function($scope) {
	$query = "SELECT * FROM `housing` where `";

	connection.query($query, function(err, rows, fields) {
	    if(err){
	        console.log("An error ocurred performing the query.");
	        console.log(err);
	        return;
	    }
	    
	    $scope.employees = rows;
	});
});



function updateCompound(landline){

    var startDate = document.getElementById("assignmentStartDate").value
    var endDate = document.getElementById("assignmentEndDate").value
    var andrewId = document.getElementById("assignmentAndrewId").value
    var landline = document.getElementById("assignmentLandline").value
	$query = "UPDATE `assignment` SET `startdate` = '"+ startDate + "', `enddate` = '"+ endDate +"', `landline` = '"+ landline +"', andrewId = '"+ andrewId+"';";

	connection.query($query, function(err, rows, fields) {
	    if(err){
	        console.log("An error ocurred performing the query.");
	        console.log(err);
	        return;
	    }
	    alert("Employee Succesfully Deleted!")
	    $("#navigation").load("HouseMain.html");
	});


}







function addBill(){

}


function deleteBill(){

}

function getAllBills(){

}

function getBill(){

}

function updateBill(){

}







