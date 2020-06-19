// can take in a number
const canIVote = age => {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}


// a variable that takes in two strings
const agreeOrDisagree = (first, second) => {
    if (first === second) {
        return 'You agree!'
    } else {
        return 'You disagree!'
    }
}



//a function, reportingForDuty(), that has two string parameters, rank and lastName, and returns a string in the 
const reportingForDuty = (rank, lastName) => `${rank} ${lastName} reporting for duty!`

/*
// Using string concatenation:
const reportingForDuty = (rank, lastName) => rank + " " + lastName + " " + "reporting for duty!"

// As a function declaration:
function reportingForDuty(rank, lastName) {
    return `${rank} ${lastName} reporting for duty!`
}
*/

// this will return any value to be true. 
const truthyOrFalsy = value => {
    if (value) {
        return true
    }
    return false
}