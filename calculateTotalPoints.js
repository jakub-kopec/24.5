const calculateDistancePoints = require('./calculateDistancePoints')
const calculateStylePoints = require('./calculateStylePoints')

const windFactor = 0
const gateFactor = 0
const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
    if (typeof windFactor !== 'number') {
        return 'wrong type of windFactor'
    } else if (typeof gateFactor !== 'number') {
        return 'wrong type of gateFactor'
    }

    const distancePoints = calculateDistancePoints(distance, hillSize, kPoint)
    const stylePoints = calculateStylePoints(styleNotes)

    return (distancePoints + stylePoints + windFactor + gateFactor).toFixed(1)
}

module.exports = calculateTotalPoints
