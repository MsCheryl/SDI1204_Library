//alert("JavaScript works!");
//String- Valid Phone Number

var myPhone = function(phone) {
	var availNumbers = /^([0-9]{3})\-([0-9]{3})\-([0-9]{4})$/;//indicates that the three number before the first dash should be between 0-9, the same with the second group, and the thrid group requires 4 numbers 0-9

	if(availNumbers.test(phone)) {
		return true
	} else {
		return false
	}
};

console.log(myPhone("202-456-7178"));//true
console.log(myPhone("202-45t-717B"));//false


//Email Script


var myEmail = function checkEmail(email) {
	var userEmail = /^([a-zA-Z0-9_\.\-]) + \@(([a-zA-Z0-9\-]) +\.)+ ([a-zA-Z0-9]{2,4})+$/;//indicates that the characters used before the @ can be lowercase, uppercase, number, dash or hyphen.  then looks for the @ symbol, and the domain name can include lowercase, uppercase, numbers and a hypen, followed by a period and 2 to 4 characters, lower case, uppercase, and/or numbers 
	if(userEmail.test(email)) {
		valid = email +" "+ "Thanks";
		return valid
	} else {
		invalid = email +" " +"Please try again."
		return invalid;
	}
}

console.log(myEmail("mscheryl@fullsail"));//true


//Validate URL

var theUrl = function(userUrl) {
	var urlValidate1 = userUrl.indexOf("http://"), urlValidate2 = userUrl.indexOf("https://");

	if(urlValidate1 != -1 || urlCheck2 != -1) {
		return console.log(userUrl);
	} else {
		return console.log("false");
	}
};

theUrl("http://fullsail.edu");//true




//Title Case
function titleCase(str)
{
	return str.replace(/((^|\s)[a-z])/g, function(match){return match.toUpperCase();}); 
}
console.log(titleCase('mobile media development'));
  

//String Seperator
function newSep() {
	var fwdSlash = " / "
	var kidsSep = myKids.replace(/,/g, fwdSlash);
	return kidsSep;
};

var myKids = "Jalen, Mykal, Dominic"
console.log(newSep());//Jalen/Mykal/Dominic


//Number Decimal


var formatNumber = function (theNumber) {
					var decimalPlace = Math.round(theNumber*100)/100,
						  fixNum = decimalPlace.toFixed(2);//fixes the decimal places to 2 places 
					return console.log(fixNum);
				};
		console.log(formatNumber(2.333));  //2.33
		console.log(formatNumber(2));  //2.00
		console.log(formatNumber(1)); //1.00
		

//Fuzzy Match Number:  is the number above or below a number within a certain percent?

var fuzzyMath = function( ){
var num = 100; //declared initial number
var numMatch = 50;
var numPercent = num/100;//divided by 100 to find the percent
var numDifference = num - numMatch; 
var numAnswer = " ";
		if (numDifference <0){ // 50<0
			numAnswer = "negative"//based off of defined var, this would be correct
		}else{
			numAnswer = "positive";
		};
		if (numAnswer ==="negative"){
			console.log (numMatch + "is more than" + num +"."); //appropriate output
		}else{
			console.log (numMatch + "is less than" + num + ".");
		}
};

//Find the difference between two dates
function dateDiff(){
	var firstDate = new Date("01/01/2001");
	var lastDate = new Date ("12/12/2012");
	var theDate = 1000*60*60*24;
	console.log(Math.ceil((lastDate.getTime()-firstDate.getTime())/theDate) + " " + "hours.")
};

dateDiff();


