//this code tells a person if they mannaged to get enough sleep or not. 

const getSleepHours = day => {
//if (day === 'monday') {
  //  return 8;
  //} else if (day === 'tuesday') { 
   //return 7;
  //}
   //else if (day === 'Wednesday') { 
   //return 6;
  //}
   //else if (day === 'Thursday') { 
   //return 5;
  //}
   //else if (day === 'Friday') { 
   //return 4;
  //}
   //else if (day === 'Saturday') { 
   //return 3;
  //}
   //else if (day === 'Sunday') { 
   //return 2;
  //}
  //else{

 // }
  switch(day){
  case 'mon':
    return 8;
    break;
   case 'tue':
    return 7;
    break;
  case 'wed':
    return 8;
    break;
  case 'thu':
    return 5;
    break;
  case 'fri':
    return 4;
    break;
  case 'sat':
    return 8;
    break;
    case 'sun':
    return 8;
    break;
  default: 
    return 'Error!'
  }
};

const getActualSleepHours = () =>  getSleepHours('mon') +
getSleepHours('tue') +
getSleepHours('wed') +
getSleepHours('thu') +
getSleepHours('fri') +
getSleepHours('sat') +
getSleepHours('sun')  ;




console.log("Hours of sleep on Tuesday:" + " " +getSleepHours('tue')); // should print the # hours assigned to tuesday
console.log("Hours of sleep all week:" + " " + getActualSleepHours()); 

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {

const actualSleepHours = getActualSleepHours();
const idealSleepHours = getIdealSleepHours();

if (actualSleepHours === idealSleepHours) {
  console.log('You got the perfect amount of sleep');
} 

else if (actualSleepHours > idealSleepHours) {
  console.log('You got way too much sleep man, your so lazy. Get up!');
} 

else {
  console.log('You need more rest buddy. You did not get enough sleep all week, the ideal value is 56 hr per week.');
}

};

calculateSleepDebt();
