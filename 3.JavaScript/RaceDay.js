let raceNumber = Math.floor(Math.random() * 1000);


var registered = true; 
var registrationTime = 10;
var age = 3;
console.log("Original  RN: " + raceNumber)

if (registered = true){
  console.log("Status: Registered")
}else{ console.log(" Not Registered ");
}

if(age >= 18 && registrationTime < 9.30){
  console.log(`age: ${age}`);
  raceNumber += 1000 ; // this adds 1000 to any adult that registers early. 
  console.log("New race number: " + raceNumber)
} 

if(age > 18 && registrationTime <= 9.30){
  console.log(`Oh good, you arrived early. Your race will start at 9:30 am. Please remember your race number is ${raceNumber}`);}
  else if (age >= 18 && registrationTime > 9.30)
    {console.log(`LATE... omg, oh well I suppose it happens. Unfortunatley you will have to start your race at 11:00 am. Please remember your race number is ${raceNumber}`);

  }

  else if (age < 18)
    {console.log(`Hello little one, your race will start at 12:30 pm. Please remember your race number is ${raceNumber}`);

  }
  
  
  //this code infomrs the individual if they have done a long enough work out
  let runTime = 35;
let runDistance = 3.5;

if (runTime <= 30 && runDistance > 3.5) {
  console.log("You're super fast!");
} else if (runTime >= 30 && runDistance <= 3) {
  console.log("You're not making your pace!");
} else if (runTime > 30 || runDistance > 3) {
  console.log("Nice workout!"); 
} else {
  console.log("Keep on running!");
}