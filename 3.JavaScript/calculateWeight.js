
/*Though an object’s mass remains consistent throughout the universe, weight is determined by
the force of gravity on an object. Since different planets have different gravity, the same
object would weigh different amounts on each of those planets! Cool, huh? */

const calculateWeight = (earthWeight, planet) => {
    switch (planet) {
        case 'Mercury':
            return earthWeight * .378;
        case 'Venus':
            return earthWeight * .907;
        case 'Mars':
            return earthWeight * .377;
        case 'Jupiter':
            return earthWeight * 2.36;
        case 'Saturn':
            return earthWeight * .916;
        default:
            return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
    }
}

console.log(calculateWeight(70, 'Mars'))