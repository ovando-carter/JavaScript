var myAge = 30 ; // this is my age
console.log(myAge + "-" + "This is my age:");

let earlyYears = 2; // dunno what to say about this appart from it being early years lol. 
console.log(earlyYears + "-" + "This is the original value of early years:");

earlyYears *= 10.5;
console.log(earlyYears+ "-" + "This is early years time  10.5:");

let laterYears = myAge -= 2;
console.log(myAge +  "-" + "This is my age minus 2 years:");

laterYears *= 4 
console.log(laterYears)

myAgeInDogYears = earlyYears + laterYears
console.log(myAgeInDogYears)

var myName = "Ovando Carter" .toLowerCase()
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
