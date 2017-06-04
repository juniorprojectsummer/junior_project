// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var $       = require( 'jquery' );

    function goEmployeeMain() {
      $(".container").load("templates/employeeMain.html");
    }
    function goNewHouse() {
      $(".container").load("templates/newHouse.html");
    }
    function goLandlineMain() {
      $(".container").load("templates/landlineMain.html");
    }
    function goHome() {
      $(".container").load("templates/home.html");
    }
    function goAllBills() {
      $(".container").load("templates/allBills.html");
    }
    function goOutstanding() {
      $(".container").load("templates/outstanding.html");
    }
    function goNewEmployee() {
      $(".container").load("templates/newEmployee.html");
    }
    function goNewCompound() {
      $(".container").load("templates/newCompound.html");
    }
    function goNewLandline() {
      $(".container").load("templates/newLandline.html");
    }
    function logout() {
      $(".navigation").remove();
      $(".container").load("login.html");
    }
var mysql = require('mysql');
// var bcrypt = require('bcrypt');
var ipc = electron.ipcRenderer

var connection = mysql.createConnection({
    host     : 'mysql.qatar.cmu.local',
    user     : 'fmbills_devuser',
    password : 'PatUmNed', // or the original password : 'apaswword'
    database : 'fmbills_dev',
    insecureAuth: true
});

// connect to mysql
connection.connect(function(err) {
    // in case of error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});


// var app = angular.module('myApp', []);


function endConnection() {
	connection.end();
}






    function addEmployee(){
        var email = document.getElementById("employeeEmail").value
        var first = document.getElementById("employeeFirstName").value
        var last = document.getElementById("employeeLastName").value
        var andrewId = document.getElementById("employeeAndrewId").value
     $query = "INSERT INTO `employee` VALUES ('"+ andrewId + "','"+ email +"', '"+ first+"', '"+ last+"');";

     connection.query($query, function(err, rows, fields) {
         if(err){
             console.log("An error ocurred performing the query.");
             alert(err);
             return;
         }
         console.log(rows)
         endConnection();
         alert("Employee Succesfully Created!")
         goEmployeeMain();
     });
    }




    function addAssignment(){
        var startDate = document.getElementById("assignmentStartDate").value
        var endDate = document.getElementById("assignmentEndDate").value
        var andrewId = document.getElementById("assignmentAndrewId").value
        var landline = document.getElementById("assignmentLandlineNo").value

        var diff = endDate.split("-")[1]-startDate.split("-")[1]
        var contractType;
        if (diff<= 6){
          contractType = "Short Term"
        }
        else{
          contractType = "Long Term"
        }
     $query = "INSERT INTO `assignment` VALUES ('"+ startDate + "','"+ endDate +"', '"+ contractType +"', '"+ landline+"', '"+ andrewId+"');";

     connection.query($query, function(err, rows, fields) {
         if(err){
             console.log("An error ocurred performing the query.");
             alert(err);
             return;
         }
         alert("Assignment Succesfully Added!")
         goLandlineMain();
     });
    }


    function addHouse(){
        var billno = document.getElementById("houseLandline").value
        var compno = document.getElementById("houseCompId").value
        var unitid = document.getElementById("houseUnitId").value
        var vacant = document.getElementById("houseVacant").value
        $query = "INSERT INTO `house` VALUES ('"+ landline + "','"+ unitId +"', '"+ vacant+"', '"+ compId+"');";

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

//#################################

// 				DB STATEMENTS


//#################################

// 				Employees



// function addEmployee(){
//     var email = document.getElementById("employeeEmail").value
//     var first = document.getElementById("employeeFistName").value
//     var last = document.getElementById("employeeLastName").value
// 	$query = "INSERT INTO `employee` VALUES ('"+ email + "','"+ first +"', '"+ Last+"');";

// 	connection.query($query, function(err, rows, fields) {
// 	    if(err){
// 	        console.log("An error ocurred performing the query.");
// 	        console.log(err);
// 	        return;
// 	    }
// 	    alert("Employee Succesfully Created!")
// 	    $("#navigation").load("EmployeeMain.html");
// 	});
// }


// function deleteEmployee(email){
// 	$query = "DELETE FROM `employee` WHERE `email` = '"+  email  +"'";

// 	connection.query($query, function(err, rows, fields) {
// 	    if(err){
// 	        console.log("An error ocurred performing the query.");
// 	        console.log(err);
// 	        return;
// 	    }
// 	    alert("Employee Succesfully Deleted!")
// 	    $("#navigation").load("EmployeeMain.html");
// 	});
// }


// app.controller('getAllEmployees', function($scope) {
// 	$query = "SELECT * FROM `employee`";

// 	connection.query($query, function(err, rows, fields) {
// 	    if(err){
// 	        console.log("An error ocurred performing the query.");
// 	        console.log(err);
// 	        return;
// 	    }
// 	    console.log(12312312312)
// 	    $scope.employees = rows;
// 	    console.log($scope.employees)
// 	});
// });


// // STILL TO DECIDE WHAT TO INCLUDE HERE
// app.controller('getEmployee', function($scope) {
// 	$query = "SELECT * FROM `employees` where ";

// 	connection.query($query, function(err, rows, fields) {
// 	    if(err){
// 	        console.log("An error ocurred performing the query.");
// 	        console.log(err);
// 	        return;
// 	    }
	    
// 	    $scope.employees = rows;
// 	});
// });




// function updateEmployee(email, first, last, oldemail){
// // UPDATE table_name SET field1 = new-value1, field2 = new-value2
// // [WHERE Clause]


// 	$query = "UPDATE `employee` SET `email` = '"+  email  +"', firstname = '"+  first  +"', lastname = '"+  last  +"' where `email` = '"+  oldemail  +"'";

// 	connection.query($query, function(err, rows, fields) {
// 	    if(err){
// 	        console.log("An error ocurred performing the query.");
// 	        console.log(err);
// 	        return;
// 	    }
// 	    alert("Employee Succesfully Deleted!")
// 	    $("#navigation").load("EmployeeMain.html");
// 	});


// }






// //#################################

// // 				House








// function addHouse(){
//     var billno = document.getElementById("houseBillNo").value
//     var compno = document.getElementById("houseCompNo").value
//     var unitid = document.getElementById("houseUnitId").value
//     var vacant = document.getElementById("houseVacant").value
// 	$query = "INSERT INTO `house` VALUES ('"+ billno + "','"+ compno +"', '"+ unitid+"', '"+ vacant+"');";

// 	connection.query($query, function(err, rows, fields) {
// 	    if(err){
// 	        console.log("An error ocurred performing the query.");
// 	        console.log(err);
// 	        return;
// 	    }
// 	    alert("House Succesfully Added!")
// 	    $("#navigation").load("HouseMain.html");
// 	});
// }


// function deleteHouse(unitid){
// 	$query = "DELETE FROM `employee` WHERE `email` = '"+  unitid  +"'";

// 	connection.query($query, function(err, rows, fields) {
// 	    if(err){
// 	        console.log("An error ocurred performing the query.");
// 	        console.log(err);
// 	        return;
// 	    }
// 	    alert("Employee Succesfully Deleted!")
// 	    $("#navigation").load("HouseMain.html");
// 	});
// }


// app.controller('getAllHouses', function($scope) {
// 	$query = "SELECT `housing`.`unitNo`, `housing`.`landLine`, `compound`.`compName`, `assignment`.`startDate`, `assignment`.`endDate`, CONCAT_WS(" ", `employee`.`firstName`, `employee`.`last_name`) AS `empName`"+
//             +"FROM `housing`, `compound`, `assignment`, `employee` "+
//             +"WHERE `housing`.`compId` = `compound`.`compId` AND "+
//             +"`housing`.`landline` = `assignment`.`landline` AND "+
//             +"`employee`.`andrewId` = `assignment`.`andrewId`;"

// 	connection.query($query, function(err, rows, fields) {
// 	    if(err){
// 	        console.log("An error ocurred performing the query.");
// 	        console.log(err);
// 	        return;
// 	    }
	    
// 	    $scope.houses = rows;
// 	});
// });


// // STILL TO DECIDE WHAT TO INCLUDE HERE
// app.controller('getHouse', function($scope) {
// 	$query = "SELECT * FROM `housing` where `";

// 	connection.query($query, function(err, rows, fields) {
// 	    if(err){
// 	        console.log("An error ocurred performing the query.");
// 	        console.log(err);
// 	        return;
// 	    }
	    
// 	    $scope.houses = rows;
// 	});
// });

// var pdfReader = require('pdfreader');
// function generateFunction() {



// }

// function updateHouse(landline){

//     var vacant = document.getElementById("houseVacant").value

// // UPDATE table_name SET field1 = new-value1, field2 = new-value2
// // [WHERE Clause]


// 	$query = "UPDATE `housing` SET `vacant` = '"+  vacant  +"' WHERE `landline` = '"+  landline  +"'";

// 	connection.query($query, function(err, rows, fields) {
// 	    if(err){
// 	        console.log("An error ocurred performing the query.");
// 	        console.log(err);
// 	        return;
// 	    }
// 	    alert("Employee Succesfully Deleted!")
// 	    $("#navigation").load("EmployeeMain.html");
// 	});


// }




// //#################################

// // 				Assignment





// function addAssignment(){
//     var startDate = document.getElementById("assignmentStartDate").value
//     var endDate = document.getElementById("assignmentEndDate").value
//     var andrewId = document.getElementById("assignmentAndrewId").value
//     var landline = document.getElementById("assignmentLandline").value
// 	$query = "INSERT INTO `assignment` VALUES ('"+ startDate + "','"+ endDate +"', '"+ landline +"', '"+ andrewId+"');";

// 	connection.query($query, function(err, rows, fields) {
// 	    if(err){
// 	        console.log("An error ocurred performing the query.");
// 	        console.log(err);
// 	        return;
// 	    }
// 	    alert("Assignment Succesfully Added!")
// 	    $("#navigation").load("HouseMain.html");
// 	});
// }


// function deleteAssignment(landline, andrewId){
// 	$query = "DELETE FROM `assignment` WHERE `landline` = '"+  landline  +"', `andrewId` = '"+  andrewId  +"'";

// 	connection.query($query, function(err, rows, fields) {
// 	    if(err){
// 	        console.log("An error ocurred performing the query.");
// 	        console.log(err);
// 	        return;
// 	    }
// 	    alert("Assignment Succesfully Ended!")
// 	    $("#navigation").load("HouseMain.html");
// 	});
// }


// app.controller('getAllAssignments', function($scope) {
// 	$query = "SELECT * FROM `assignment`";

// 	connection.query($query, function(err, rows, fields) {
// 	    if(err){
// 	        console.log("An error ocurred performing the query.");
// 	        console.log(err);
// 	        return;
// 	    }
	    
// 	    $scope.assignment = rows;
// 	});
// });


// // STILL TO DECIDE WHAT TO INCLUDE HERE
// app.controller('getAssignment', function($scope) {
// 	$query = "SELECT * FROM `housing` where `";

// 	connection.query($query, function(err, rows, fields) {
// 	    if(err){
// 	        console.log("An error ocurred performing the query.");
// 	        console.log(err);
// 	        return;
// 	    }
	    
// 	    $scope.employees = rows;
// 	});
// });



// function updateAssignment(landline){

//     var startDate = document.getElementById("assignmentStartDate").value
//     var endDate = document.getElementById("assignmentEndDate").value
//     var andrewId = document.getElementById("assignmentAndrewId").value
//     var landline = document.getElementById("assignmentLandline").value
// 	$query = "UPDATE `assignment` SET `startdate` = '"+ startDate + "', `enddate` = '"+ endDate +"', `landline` = '"+ landline +"', andrewId = '"+ andrewId+"';";

// 	connection.query($query, function(err, rows, fields) {
// 	    if(err){
// 	        console.log("An error ocurred performing the query.");
// 	        console.log(err);
// 	        return;
// 	    }
// 	    alert("Employee Succesfully Deleted!")
// 	    $("#navigation").load("HouseMain.html");
// 	});


// }




// //#################################

// // 				Compound






// function addCompound(){
//     var startDate = document.getElementById("assignmentStartDate").value
//     var endDate = document.getElementById("assignmentEndDate").value
//     var andrewId = document.getElementById("assignmentAndrewId").value
//     var landline = document.getElementById("assignmentLandline").value
// 	$query = "INSERT INTO `assignment` VALUES ('"+ startDate + "','"+ endDate +"', '"+ landline +"', '"+ andrewId+"');";

// 	connection.query($query, function(err, rows, fields) {
// 	    if(err){
// 	        console.log("An error ocurred performing the query.");
// 	        console.log(err);
// 	        return;
// 	    }
// 	    alert("Assignment Succesfully Added!")
// 	    $("#navigation").load("HouseMain.html");
// 	});
// }


// function deletCompound(landline, andrewId){
// 	$query = "DELETE FROM `assignment` WHERE `landline` = '"+  landline  +"', `andrewId` = '"+  andrewId  +"'";

// 	connection.query($query, function(err, rows, fields) {
// 	    if(err){
// 	        console.log("An error ocurred performing the query.");
// 	        console.log(err);
// 	        return;
// 	    }
// 	    alert("Assignment Succesfully Ended!")
// 	    $("#navigation").load("HouseMain.html");
// 	});
// }


// app.controller('getAllCompounds', function($scope) {
// 	$query = "SELECT * FROM `assignment`";

// 	connection.query($query, function(err, rows, fields) {
// 	    if(err){
// 	        console.log("An error ocurred performing the query.");
// 	        console.log(err);
// 	        return;
// 	    }
	    
// 	    $scope.assignment = rows;
// 	});
// });


// // STILL TO DECIDE WHAT TO INCLUDE HERE
// app.controller('getCompound', function($scope) {
// 	$query = "SELECT * FROM `housing` where `";

// 	connection.query($query, function(err, rows, fields) {
// 	    if(err){
// 	        console.log("An error ocurred performing the query.");
// 	        console.log(err);
// 	        return;
// 	    }
	    
// 	    $scope.employees = rows;
// 	});
// });



// function updateCompound(landline){

//     var startDate = document.getElementById("assignmentStartDate").value
//     var endDate = document.getElementById("assignmentEndDate").value
//     var andrewId = document.getElementById("assignmentAndrewId").value
//     var landline = document.getElementById("assignmentLandline").value
// 	$query = "UPDATE `assignment` SET `startdate` = '"+ startDate + "', `enddate` = '"+ endDate +"', `landline` = '"+ landline +"', andrewId = '"+ andrewId+"';";

// 	connection.query($query, function(err, rows, fields) {
// 	    if(err){
// 	        console.log("An error ocurred performing the query.");
// 	        console.log(err);
// 	        return;
// 	    }
// 	    alert("Employee Succesfully Deleted!")
// 	    $("#navigation").load("HouseMain.html");
// 	});


// }







// //#################################

// // 				BILLS





// function addBill(billNo, pastBalance, paymentsReceived, totalAmountDue, billDate, billPeriod, deadline, pdfURL, landline){
// 	$query = "INSERT INTO `assignment` VALUES ('"+ billNo + "','"+ pastBalance +"', '"+ paymentsReceived +"', '"+ totalAmountDue+"', '"+ billDate+"', '"+ billPeriod+"', '"+ pdfURL+"', '"+ landline+"');";

// 	connection.query($query, function(err, rows, fields) {
// 	    if(err){
// 	        console.log("An error ocurred performing the query.");
// 	        console.log(err);
// 	        return;
// 	    }
// 	    // alert("Assignment Succesfully Added!")
// 	    // $("#navigation").load(".html");
// 	});
// }


// function deleteBill(billNo){
// 	$query = "DELETE FROM `bills` WHERE `billno` = '"+  billNo  +"';"

// 	connection.query($query, function(err, rows, fields) {
// 	    if(err){
// 	        console.log("An error ocurred performing the query.");
// 	        console.log(err);
// 	        return;
// 	    }
// 	    alert("Bill Succesfully Ended!")
// 	    // $("#navigation").load(".html");
// 	});
// }


// app.controller('getAllBills', function($scope) {
// 	$query = "SELECT * FROM `bills`";

// 	connection.query($query, function(err, rows, fields) {
// 	    if(err){
// 	        console.log("An error ocurred performing the query.");
// 	        console.log(err);
// 	        return;
// 	    }
	    
// 	    $scope.assignment = rows;
// 	});
// });


// // STILL TO DECIDE WHAT TO INCLUDE HERE
// app.controller('getBill', function($scope) {
// 	$query = "SELECT * FROM `housing` where `";

// 	connection.query($query, function(err, rows, fields) {
// 	    if(err){
// 	        console.log("An error ocurred performing the query.");
// 	        console.log(err);
// 	        return;
// 	    }
	    
// 	    $scope.employees = rows;
// 	});
// });



// function updateBill(landline){

//     var startDate = document.getElementById("assignmentStartDate").value
//     var endDate = document.getElementById("assignmentEndDate").value
//     var andrewId = document.getElementById("assignmentAndrewId").value
//     var landline = document.getElementById("assignmentLandline").value
// 	$query = "UPDATE `assignment` SET `startdate` = '"+ startDate + "', `enddate` = '"+ endDate +"', `landline` = '"+ landline +"', andrewId = '"+ andrewId+"';";

// 	connection.query($query, function(err, rows, fields) {
// 	    if(err){
// 	        console.log("An error ocurred performing the query.");
// 	        console.log(err);
// 	        return;
// 	    }
// 	    alert("Employee Succesfully Deleted!")
// 	    $("#navigation").load("HouseMain.html");
// 	});


// }