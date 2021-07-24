var date = document.querySelector("#date");
var btnInput = document.querySelector("#btn");


var pallindromeDiv = document.querySelector("#pallindrome");
var notPallindromeDiv = document.querySelector("#not-pallindrome");

var loadingGIF = document.querySelector("#timer-img");

btnInput.addEventListener("click",loadingOn);

function loadingOn(){
    loadingGIF.classList.remove("hidden");
    notPallindromeDiv.innerText="";
    pallindromeDiv.innerHTML = "";
    setTimeout(clickHandler, 2000);
}

function clickHandler(){
    loadingGIF.classList.add("hidden");
    var dateInput = date.value;
    var year = dateInput.slice(0,4);
    var month = dateInput.slice(5,7);
    var day = dateInput.slice(8,10);
    var formatOne = year + month + day;
    var formatTwo = day + month + year;
    var formatThree = month + day + year.slice(2,4);

    var reverseOne = formatOne.split("").reverse().join("");
    var reverseTwo = formatTwo.split("").reverse().join("");
    var reverseThree = formatThree.split("").reverse().join("");

    if (dateInput.length > 0){
        if (formatOne === reverseOne || formatTwo === reverseThree || formatThree === reverseThree){
            pallindromeDiv.innerText = "Whoa!!! Your birthdate is palindrome"
        }else{
            notPallindromeDiv.innerText = "Awww! Your birthdate is not palindrome.";
        };
    };
};