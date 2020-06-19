const Kelvin = 273 ; // constant value of todays weather in kelvin
console.log(Kelvin); //just so I can see the value of kelvin

const celsius = Kelvin - 273 ; // the conversion factor from kelvin to celcius
console.log(celsius);//just so I can see the value of celcius

const fahrenheit = celsius* (9/5) + 32 ;// converts from celcius for farenheight
console.log(Math.floor(fahrenheit)); //just so I can see the value of fahrenheit. I used math.floor to round down to the nearst decimal. 

const Newton = celsius* (33/100);// converts from celcius for farenheight
console.log(Math.floor(Newton)); //just so I can see the value of fahrenheit. I used math.floor to round down to the nearst decimal.