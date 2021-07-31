var date = document.querySelector("#date");
var btnInput = document.querySelector("#btn");

var pallindromeDiv = document.querySelector("#pallindrome");
var notPallindromeDiv = document.querySelector("#not-pallindrome");

var loadingGIF = document.querySelector("#timer-img");
btnInput.addEventListener("click", loadingOn);

var $31days = [1,3,5, 7, 8, 10, 12];
var $30days = [4,6,9,11];

function loadingOn() {
  loadingGIF.classList.remove("hidden");
  notPallindromeDiv.innerText = "";
  pallindromeDiv.innerHTML = "";
  setTimeout(clickHandler, 1000);
}

function clickHandler() {
  loadingGIF.classList.add("hidden");
  var dateInput = date.value;
  pallindromeOrNot(dateInput);
}

function pallindromeOrNot(dateInput) {
  var year = dateInput.slice(0, 4);
  var month = dateInput.slice(5, 7);
  var day = dateInput.slice(8, 10);
  var formatOne = year + month + day;
  var formatTwo = month + day + year;
  var formatThree = month + day + year.slice(2, 4);

  if (dateInput.length > 0) {
    if (checkFormat(formatOne)) {
      pallindromeDiv.innerText = "Whoa!!! Your birthdate is palindrome in the format "+year+"-"+month+"-"+day;
    } 
    else if (checkFormat(formatTwo)) {
      pallindromeDiv.innerText = "Whoa!!! Your birthdate is palindrome in the format "+month+"-"+day+"-"+year;
    } 
    else if (checkFormat(formatThree)) {
      pallindromeDiv.innerText = "Whoa!!! Your birthdate is palindrome in the format "+month+"-"+day+"-"+year.slice(2,4);
    } 
    else {
        day = parseInt(day)
        year = parseInt(year)
        month = parseInt(month)
        var forwardPallindrome = checkForward(day,month,year)
        var backwardPallindrome = checkBackward(day,month,year)
        if (forwardPallindrome[1] < backwardPallindrome[1]){
            notPallindromeDiv.innerText = "Awww! Your birthdate is not palindrome. Nearest palindrome date is "+forwardPallindrome[0]+ " You missed it by "+forwardPallindrome[1]+" days.";
        }
        else{
            notPallindromeDiv.innerText = "Awww! Your birthdate is not palindrome. Nearest palindrome date is "+backwardPallindrome[0]+ " You missed it by "+backwardPallindrome[1]+" days.";
        }
    }
  }
}

function checkForward(day,month,year){
    var  noOfDays = 0;
    while (month < 13){
        noOfDays += 1
        console.log(day,month,year)
        var formatOne = lessThanTenCheck(year) + lessThanTenCheck(month) + lessThanTenCheck(day);
        var formatTwo = lessThanTenCheck(month) + lessThanTenCheck(day) + lessThanTenCheck(year);
        var formatThree = lessThanTenCheck(month) + lessThanTenCheck(day) + lessThanTenCheck(year).slice(2, 4);
        if (checkFormat(formatOne)){
            formatOne = lessThanTenCheck(year) + "-" + lessThanTenCheck(month) + "-" + lessThanTenCheck(day);
            return [formatOne,noOfDays]
        }
        else if (checkFormat(formatTwo)){
            formatTwo = lessThanTenCheck(month) + "-" + lessThanTenCheck(day) + "-" + lessThanTenCheck(year);
            return [formatTwo,noOfDays]
        }
        else if (checkFormat(formatThree)){
            formatThree = lessThanTenCheck(month) + "-" + lessThanTenCheck(day) + "-" + lessThanTenCheck(year).slice(2, 4);
            return [formatThree,noOfDays]
        }
        else {
            day = day + 1
            if (day > maxDate(month,year)){
                day = 1
                month = month + 1
                if (month > 12){
                    month = 1;
                    year += 1
                }
            }
        }
    }
}



function checkBackward(day,month,year){
    var noOfDays = 0
    while (month > 0){
        noOfDays += 1
        var formatOne = lessThanTenCheck(year) + lessThanTenCheck(month) + lessThanTenCheck(day);
        var formatTwo = lessThanTenCheck(month) + lessThanTenCheck(day) + lessThanTenCheck(year);
        var formatThree = lessThanTenCheck(month) + lessThanTenCheck(day) + lessThanTenCheck(year).slice(2, 4);
        if (checkFormat(formatOne)){
            formatOne = lessThanTenCheck(year) + "-" + lessThanTenCheck(month) + "-" + lessThanTenCheck(day);
            return [formatOne,noOfDays]
        }
        else if (checkFormat(formatTwo)){
            formatTwo = lessThanTenCheck(month) + "-" + lessThanTenCheck(day) + "-" + lessThanTenCheck(year);
            return [formatTwo,noOfDays]
        }
        else if (checkFormat(formatThree)){
            formatThree = lessThanTenCheck(month) + "-" + lessThanTenCheck(day) + "-" + lessThanTenCheck(year).slice(2, 4);
            return [formatThree,noOfDays]
        }
        else{
            day = day - 1 
            if (day < 1){
                day = maxDate(month-1,year)
                month = month - 1;
                if (month < 1){
                    year = year - 1
                    month = 12
                }
            }
        }
        
    }
}

function maxDate(month,year){
    var maxDate = 31
    if ($31days.includes(month)){
        maxDate = 31
    }
    else if ($30days.includes(month)){
        maxDate = 30
    }
    else if (checkYear(year)){
        maxDate = 29
    }
    else{
        maxDate = 28
    }
    return maxDate
}

function lessThanTenCheck(number){
    if (number < 10){
        var newNumber = "0" + number.toString() 
    }
    else{
        var newNumber = number.toString()
    }
    return newNumber
}

function checkFormat(format) {
    var reverseFormat = format.split("").reverse().join("");
    return reverseFormat === format;
}

function checkYear(year){
    var isLeap = true;
    if (year % 4 === 0){
        if (year % 100 === 0){
            if (year % 400 === 0){
                isLeap = true;
            }
            else{
                isLeap = false;
            }
        }
        else{
            isLeap = true;
        }
    }
    else{
        isLeap = false;
    }
    return isLeap
}








