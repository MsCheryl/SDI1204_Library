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

var myUrl = function(userUrl) {
				var urlValidate1 = url.indexOf ("http://"),//checks to see if  URL begins with http://
					urlValidate2 = url.indexOf ("https://");//checks to see if URL begins with https://
					  	
					if(urlValidate1 != -1 || urlCheck2 != -1) {
					return console.log(userUrl);//if they validate, return the specified URL
					} else {
					return console.log("http://" + url);//if not return "false"
					}
    	}
    
    	myUrl("whitehouse");  //false
    	myUrl("fullsail.com");//true



//Title Case
string.prototype.titleCase = function() {
	var myString = " ", eachWord = this.split(" ");
	for(characters in eachWord) {myString += '  ' + eachWord[characters].subsr(0, 1), toUpperCase() + eachWord[characters].substr(1, eachWord[characters].length);
	}
	return myString;
}
var title = "mobile media development"
title = title.titleCase();
console.log(title);//This script will display as "Mobile Media Development"
  

//String Seperator
function newSep() {
	var fwdSlash = " / "
	var kidsSep = myKids.replace(/,/g, fwdSlash);
	return kidsSep;
};

var myKids = "Jalen, Mykal, Dominic"
console.log(newSep());//Jalen/Mykal/Dominic  



