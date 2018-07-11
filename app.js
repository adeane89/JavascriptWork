//Wk4TuesdayHW
//JS

//problem one S
function date(){
    timeNow = new Date();
    var month = timeNow.getMonth()+1;
    var date = timeNow.getDate();
    var year = timeNow.getFullYear();
      if (date < 10) {
        date = "0" + date;
      };
        if (month < 10) {
        month = "0" + month;
      };
    return (month + "/" + date+ "/" + year);

}
//console.log(date());

//problem two S
function leapYear(year){
    //var year;
    if ((year % 4 === 0) && (year % 100 !== 0)){
        return "Yay! " + year + " was a leap year!";
    } else if ((year % 4 === 0) && (year % 100 === 0) && (year % 400 === 0)) {
        return "Yay! " + year + " was a leap year!";
    } else {
        return year + " was not a leap year."
    }
}

//problem three NS
//var consecutiveArray = function(Array) {

//}

//problem four NS
/*
var duplicateArray = function(inputArr) {
    var i,j
    if (Array.isArray(inputArr) == true){
        for (i = 0; i < inputArr.length; i++) {
            for (j = 0; j=i.length,)
            if (i == i){
                return inputArr[i] + " appeared multiple times";
               }
        };
    } else {
        return "You did not enter an array.";
    }
}

function find_duplicates(arr) {
  var len=arr.length,
      out=[],
      counts={};

  for (var i=0;i<len;i++) {
    var item = arr[i];
    counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
    if (counts[item] === 2) {
      out.push(item);
    }
  }

  return out;
}

works but i dont understand
function unique(array){
  var seen = new Set;
  return array.filter(function(item){
    if (!seen.has(item)) {
      seen.add(item);
      return true;
    }
  });
}
*/

//problem five S
var first = function(input, number) {
    var firstArray;
    if (number === undefined) {
        firstArray = input.slice(0, 1);
        return firstArray;
    } else if (number > input.length) {
        firstArray = input.slice(0, );
        return firstArray;
    } else if (number < 0) {
        firstArray = input.slice(-1,-1);
        return firstArray;
    } else {
        firstArray = input.slice(0, number);
        return firstArray;
    }
}
//myColor(["Red", "White", "Blue","Green"])
//problem six
var myColor = function(input) {
    return input.join();
}

//problem seven S
//come back to understand more
var frequent = function(arr1) {
    var i, j, number;
    var appears = 0;
    var appearsAgain = 1;
    for(i = 0; i < arr1.length; i++){
        for (j=i; j < arr1.length; j++) {
            if(arr1[i] == arr1[j])
                appears++;
            if (appearsAgain <appears) {
                appearsAgain=appears;
                number = arr1[i];
            }
        }
        appears=0;
    }
    console.log(number + " ( " + appearsAgain + " times)");
}

//problem eight NS
//basically the same but slightly different than one above


//problem nine S
var reverse = function(input){
    return input.split("").reverse().join("");
}

//problem ten S
var palindrome = function(input){
    if (input == input.split("").reverse().join("")){
        return input + " is a palindrome";
    } else {
        return  input + " is not a palindrome";
    }
}
