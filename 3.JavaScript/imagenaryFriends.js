// simple code that will always calculete their imagenray friends to be 33% of thier real friends. 

const numImaginaryFriends = totalFriends => Math.round(totalFriends * .33) ;

/*
// As a function declaration:
    function numImaginaryFriends(totalFriends) {
    return Math.round(totalFriends * .33)
}
*/

console.log(numImaginaryFriends())