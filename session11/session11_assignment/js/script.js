//console.log('web design')

//var firstName = "Moumen"
//console.log(firstName)

//var age = 23
//console.log(age)

//var isGraduated = false
//console.log(isGraduated)

//let text = "Hello java script"
//console.log(text)

//var z =
//console.log(z)

//var n console.log(n)

//var m = " "console.log(m)

//let x = 5 
//let y = 5
//var z = x + y
//console.log(z)

//var s = 3*x-5*y
//console.log(s)

//var d = y/x
//console.log(d)

//var k = x%y
//console.log(k)

//var inc = 10
//console.log(++inc)

//var dec = 11
//console.log(--dec)


 //if (job == "eng") console.log("Engineer")
 //else if (job == "doc") console.log("Doctor")
 //else console.log("invalid job")

 
//switch ( job = prompt("Enter your job")) {
    //case "eng":
    //console.log("Engineer")
    //break;

    //case "doc":
    //console.log("Doctor")
    //break;

    //default: 
    //console.log("invalid job")
//}

//for (var i = 1 ; i<=10 ; ++i) {
    //console.log(i)

//}

function looping(start, end, breakNum, contNum) {
  if (start === undefined || end === undefined || breakNum === undefined || contNum === undefined) {
    prompt("Please enter all numbers");
    return;
  }

  for (let i = start; i <= end; i++) {
    if (i === breakNum) {
      break; 
    }
    if (i === contNum) {
      continue; 
    }
    console.log(i);
  }
}
looping(1, 10, 8, 3);
