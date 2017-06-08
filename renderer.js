// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var $       = require( 'jquery' );

    function goEmployeeMain() {
      $(".container").load("templates/AllEmployees.html");
    }
    function goActiveEmployee() {
      $(".container").load("templates/ActiveEmployees.html");
    }
    function goInactiveEmployee() {
      $(".container").load("templates/InactiveEmployee.html");
    }
    function goNewHouse() {
      $(".container").load("templates/newHouse.html");
    }
    function goLandlineMain() {
      $(".container").load("templates/AllHouses.html");
    }
    function goOccupidHouses() {
      $(".container").load("templates/OccupidHouses.html");
    }
    function goVacantHouses() {
      $(".container").load("templates/VacantHouses.html");
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
        var contractType = document.getElementById("employeeContractType").value

        // var firstMatches = val.match(/\d+/g);
        // var lastMatches = val.match(/\d+/g);
        // if (firstMatches != null) {
        //     alert('Fir');
        // }

     $query = "INSERT INTO `employee` VALUES ('"+ andrewId + "','"+ email +"', '"+ first+"', '"+ last+"', '"+ contractType+"');";

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
        var landLine = document.getElementById("assignmentLandlineNo").value


     $query = "INSERT INTO `assignment` (startDate, endDate, andrewId, landLine) VALUES ('"+ startDate +"', '"+ endDate +"', '"+ andrewId+"', '"+ landLine+"');";
     console.log($query)
     connection.query($query, function(err, rows, fields) {
         if(err){
             console.log("An error ocurred performing the query.");
             alert(err);
             return;
         }
         $query = "UPDATE `housing` SET `vacant` = 0 WHERE `landLine` = '" + landLine+"';"
         connection.query($query, function(err, rows, fields) {
             if(err){
                 console.log("An error ocurred performing the query.");
                 alert(err);
                 return;
             }           
             alert("Assignment Succesfully Added!")
             goLandlineMain();
         });

     });
    }


    function addHouse(){
        var landLine = document.getElementById("houseLandline").value
        var compno = document.getElementById("houseCompId").value
        var unitid = document.getElementById("houseUnitId").value

        $query = "INSERT INTO `housing` VALUES ('"+ unitid + "','"+ landLine +"', 1, '"+ compno +"');";

        connection.query($query, function(err, rows, fields) {
            if(err){
                console.log("An error ocurred performing the query.");
                console.log(err);
                return;
            }
            alert("House Succesfully Added!")
            $("#navigation").load("landlineMain.html");
        });
    }

    function getAllCompounds(){
        $query = "SELECT * FROM `compound`";

        connection.query($query, function(err, rows, fields) {
            if(err){
                console.log("An error ocurred performing the query.");
                console.log(err);
                return;
            }
            
            return rows
        });
    };

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

// //               BILLS



function addBill(billNo, pastBalance, paymentsReceived, totalAmountDue, billDate, billPeriod, deadline, pdfURL, landline){
    $query = "INSERT INTO `bill` VALUES ('"+ billNo + "','"+ pastBalance +"', '"+ paymentsReceived +"', '"+ totalAmountDue+"', '"+ billDate+"', '"+ billPeriod+"', '"+ deadline +"', '"+ pdfURL+"', '"+ landline+"');";
    console.log($query);
    connection.query($query, function(err, rows, fields) {
        if(err){
            alert("Couldn't add bill for: " + landline + "\n\nNo house has this " + landline + " number", 'Bill Management System');
            // console.log("An error ocurred performing the query.");
            // console.log(err);
            return;
        }
        console.log(rows)
        alert("Bill Added Succesfully!")
       // goEmployeeMain();
    });
}


// function deleteBill(billNo){
//  $query = "DELETE FROM `bills` WHERE `billno` = '"+  billNo  +"';"

//  connection.query($query, function(err, rows, fields) {
//      if(err){
//          console.log("An error ocurred performing the query.");
//          console.log(err);
//          return;
//      }
//      alert("Bill Succesfully Ended!")
//      // $("#navigation").load(".html");
//  });
// }


// app.controller('getAllBills', function($scope) {
//  $query = "SELECT * FROM `bills`";

//  connection.query($query, function(err, rows, fields) {
//      if(err){
//          console.log("An error ocurred performing the query.");
//          console.log(err);
//          return;
//      }
        
//      $scope.assignment = rows;
//  });
// });


// // STILL TO DECIDE WHAT TO INCLUDE HERE
// app.controller('getBill', function($scope) {
//  $query = "SELECT * FROM `housing` where `";

//  connection.query($query, function(err, rows, fields) {
//      if(err){
//          console.log("An error ocurred performing the query.");
//          console.log(err);
//          return;
//      }
        
//      $scope.employees = rows;
//  });
// });



// function updateBill(landline){

//     var startDate = document.getElementById("assignmentStartDate").value
//     var endDate = document.getElementById("assignmentEndDate").value
//     var andrewId = document.getElementById("assignmentAndrewId").value
//     var landline = document.getElementById("assignmentLandline").value
//  $query = "UPDATE `assignment` SET `startdate` = '"+ startDate + "', `enddate` = '"+ endDate +"', `landline` = '"+ landline +"', andrewId = '"+ andrewId+"';";

//  connection.query($query, function(err, rows, fields) {
//      if(err){
//          console.log("An error ocurred performing the query.");
//          console.log(err);
//          return;
//      }
//      alert("Employee Succesfully Deleted!")
//      $("#navigation").load("HouseMain.html");
//  });


// }

// function checkLandlineExists(landline){
//     $query = "";
//     connection.query($query, function(err, rows, fields){
//         if(err){
//             console.log("An error ocurred performing the query.");
//             console.log(err);
//             return;
//         }
//     });
// }

const {remote} = require('electron');

var fs = require('fs');

const path = require('path');


//********************************************************** dialog box ************************************************//


var direc;

var filepicker = document.getElementById('filepicker');
if (filepicker != null)
filepicker.onclick = openSelection;

//*********************************************************Code For dialogbox ***************************************//
function openSelection(){
  // const dialog = require('electron').remote.dialog;
  const dialog = remote.getGlobal('dialog');
  var a = dialog.showOpenDialog({ properties: ['openDirectory']});
  console.log(a);
  direc = a[0];
  //document.write(direc);

  //Call back to go through every file in the selected directory
  fs.readdir(direc, (err, dir) => {
    

    for(let filePath of dir){
      
      var pathtopdf = direc + '/' + filePath;

      //Converts it into a proper path
      pathtopdf = path.win32.normalize(pathtopdf);

      //Calls the pdf Reading function
      readPDF(pathtopdf);
    }
  });
}

//Requirements 
var pdfText = remote.getGlobal('pdfText');
var fs = require('fs');

//Function to read the pdf
function readPDF(pathtopdf){

  //Creates a buffer stream out of the pdf for faster performance
  var buffer = fs.readFileSync(pathtopdf);

  //callback to extract pdf data
  pdfText(buffer, function(err, chunks) {
    if (err){
      console.dir(err);
      return;
    }

    //Function call to extract individual/required items 
    extractData(chunks, pathtopdf);
    //console.dir(chunks);

  });
}

//Variable declaration 
var bill_no, landline, past_balance, payments_rec, total_amount, bill_date, bill_period, payment_deadline, pdf_URL;
var total_lines = 1;
var QR_starter_position;

//Individual data extraction
function extractData(chunks, pdfPath){

  var cust_no = chunks[5];
  if (cust_no == "02666714"){

    //Extract Bill number
    bill_no = chunks[9];
    console.log("Bill Number: ", bill_no);

    //Extract Bill date
    bill_date = chunks[11];
    console.log("Bill Date: ", bill_date);

    //Extract Bill number
    bill_period = chunks[13];
    console.log("Bill Period: ", bill_period);

    //Extract PDF URL
    pdf_URL = pdfPath
    console.log("PDF URL: ", pdf_URL);

    //Extract Landline number
    landline = getLandline (chunks);
    console.log("Landline Number: ", landline);

    //Extract Past Balance
    past_balance = getPastBalance(chunks);
    console.log("Past Balance: ", past_balance);

    //Extract Payments Received
    payments_rec = chunks[QR_starter_position + 5];
    payments_rec = parseFloat(payments_rec.replace(',', ''));
    console.log("Payments Received: ", payments_rec);

    //Extarct Total Value
    total_amount = chunks[QR_starter_position + 18];
    total_amount = parseFloat(total_amount.replace(',', ''));
    console.log("Total Amount: ", total_amount);

    //Extract Date Deadline
    payment_deadline = chunks[QR_starter_position + 22];
    console.log("Payment Deadline Date: ", payment_deadline);


    console.log("\n\n");



    addBill(bill_no, past_balance, payments_rec, total_amount, bill_date, bill_period, payment_deadline, pdf_URL, landline);
  }

  else{
    alert("Bogus bill found with this Customer Number " + cust_no + ".\nSkipped!!!");
  }
}

function getPastBalance(chunks){
  var difference = total_lines + 1;
  var start_point = 14 + difference;

  while(!chunks[start_point].includes("QR")) {
    start_point++;
  }

  QR_starter_position = start_point + 1;

  var out = chunks[QR_starter_position + 2];

  out = parseFloat(out.replace(',', ''));
  return out;

}

function getLandline(chunks){
  var fixed_val = 14;
  var alter = fixed_val;

  while (!chunks[alter].includes("CARNEGIE MELLON")){
    alter++;
  }

  total_lines = alter - fixed_val - 1;
  var pointer = fixed_val + total_lines;

  if (chunks[pointer].length == 8){
    return chunks[pointer];
  }

  else if (chunks[pointer].length > 8) {
    var val = chunks[pointer].slice((chunks[pointer].length - 8), chunks[pointer].length);
    return val;
  }

  else if (chunks[pointer].length < 8){
    var endVal = chunks[pointer];
    var startVal = chunks[pointer - 1].slice((chunks[pointer - 1].length - (8 - endVal.length)), chunks[pointer - 1].length);
    var out = startVal + endVal;
    return out;
  }
}