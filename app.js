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
var consecutiveArray = function(inputArr) {
       for (var i=0; i < inputArr.length; i++) {
        for (var j = 0; j < inputArr.length; j++) {
            if (i != j ) {
                if (inputArr[i] == inputArr[j-1]) {
                    return "These are not consecutive numbers";
                }
            }
        }
    }
    return "These are consecutive numbers";
}

//problem four S
var duplicateArray = function(inputArr) {
    for (var i=0; i < inputArr.length; i++) {
        for (var j = 0; j < inputArr.length; j++) {
            if (i != j ) {
                if (inputArr[i] == inputArr[j]) {
                    return "There are duplicate values";
                }
            }
        }
    }
    return "There were no duplicate values";
}

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

//problem six S
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
//logging both duplicate values and still returning "no dup vals"
var duplicateValues = function(inputArr) {
    var duplicates = [];
    for (var i=0; i <= inputArr.length; i++) {
        for (var j = 0; j <= inputArr.length; j++) {
            if (i != j ) {
                if (inputArr[i] == inputArr[j]) {
                    //returning the first duplicate but not anymore
                    console.log(inputArr[j]);
                }
            }
        }
    }
    return "There were no duplicate values";
}

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

//problem eleven S
var comboArray = function(input){
    var character, time, inputArray;
    var letter = 0;
    var wordArray = [];
    while (letter < (input.length)) {
        character = input.charAt(letter);
        inputArray = [character];
        for (time in wordArray) {
            inputArray.push("" + wordArray[time] + character)
        }
        wordArray = wordArray.concat(inputArray);
        letter ++;
    }
    return wordArray;
} 

//problem twelve S
var alphabetical = function(input){
    return input.split("").sort().join("").toString();
}


//problem thirteen NS
var secondHighLow = function(inputArray){
    var highest, lowest;
    for (var i = 0; i <= inputArray.length; i++){
        for (var j = 0; j <= inputArray.length; j++) {
            if (inputArray[j] < inputArray[i]-1) {
                lowest = inputArray[j];
            } 
            if (inputArray[j] > inputArray[i]) {
                highest = inputArray[j];
            } 
        }
    }
    return inputArray.findIndex(highest);
    //inputArray.slice(highest, );
    //inputArray.slice(lowest);
    //return lowest + ", " + highest;
    return inputArray;
}

//problem fourteen S
//come back to understand more
//am i too tired or do i not understand? later me, please answer for now me
var duplicateCharacters = function(input){
    var inputArray = [];
    for (var i = 0; i < input.length; i++){
        if (inputArray.indexOf(input[i]) == -1) {
            inputArray.push(input[i])
        }
    }
    return inputArray.join("").toString();
}











