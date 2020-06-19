const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo(){
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

console.log(robot.provideInfo());

// energy check
const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

//recharge
const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 10;
robot.recharge();

//Getters
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number') {
      return 'My current energy level is ' + this._energyLevel
    } else {
      return "System malfunction: cannot retrieve energy level"
    }
  }
};

console.log(robot.energyLevel);

//Setters
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0')
    }   
  } 
};

robot.numOfSensors = 100;
//console.log(robot._numOfSensors); // this should read 100 if the number has been changed. 
console.log(robot.numOfSensors);


//Factory Function
const robotFactory = (model, mobile) => {
  return { 
    model: model,
    mobile: mobile, 
    beep() {
      console.log('Beep Boop');
    } 
  }
};

const tinCan = robotFactory('P-500', true);
tinCan.beep(); // Beep Boop

//Property Value Shorthand
function robotFactory(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

//Destructured Assignment
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

/*const functionality = robot.functionality;
console.log(functionality); */
const {functionality} = robot; console.log(functionality); // this is the destructured assignment

functionality.beep()

// Built-in Object Methods
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

const robotKeys = Object.keys(robot); // grabs the property names, otherwise known as keys, and saves the keys in an array which is assigned to robotKeys.
console.log(robotKeys);

const robotEntries = Object.entries(robot);
console.log(robotEntries);


const newRobot = Object.assign({
  laserBlaster: true, voiceRecognition: true
  });

console.log(newRobot);



/* you could write this all like this
 * 
 *
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo(){
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  },
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  },
   recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
}

console.log(robot.provideInfo());
robot.checkEnergy();

robot._energyLevel = 10;
robot.recharge();
*/ 