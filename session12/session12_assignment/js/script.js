
//var numbers = [10, 4, 5, 20, 100];
//var userInput = prompt("enter a number");
//var inputNumber = parseInt(userInput);
//if (isNaN(inputNumber)) {
  //prompt("enter a valid number");
//} else {
  //var found = numbers.find(function(num) {
    //return num > inputNumber;
  //});
  //if (found !== undefined) {
    //prompt(" correct ");
  //} else {
    //prompt(" not found ");
   // var newNumber = inputNumber + 5;
    //numbers.push(newNumber);}
// console.log("final array", numbers);}

///////////////////////////////////////////////

var users = [];

var usernum = prompt("Enter users number:");

function addUser(name, id, balance) {
  users.push({name: name, id: id, balance: balance});
}

for (var i = 0; i < usernum; i++) {
  var name = prompt("Enter name for user " + (i + 1));
  var id = prompt("Enter ID for user " + (i + 1));
  var balance = prompt("Enter balance for user " + (i + 1));
  addUser(name, id, balance);
}

function updateBalance(id, newBalance) {
  var user = users.find(function(u) {
    return u.id === id;
  });
  if (user) {
    user.balance = newBalance;
    console.log("Balance updated for this user:", user.name);
  } else {
    console.log("Not found");
  }
}

function deleteUser(id) {
  var index = users.findIndex(function(u) {
    return u.id === id;
  });
  if (index !== -1) {
    console.log("User deleted:", users[index].name);
    users.splice(index, 1);
  } else {
    console.log("Not found");
  }
}

function showUsers() {
  console.table(users);
}

var updateId = prompt("enter id to update balance:");
var newBalance = parseFloat(prompt("enter the new balance:"));
updateBalance(updateId, newBalance);

var deleteId = prompt("enter id to delete user:");
deleteUser(deleteId);

console.log("the new list of users:");
showUsers();