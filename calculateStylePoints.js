const calculateStylePoints = (styleNotes) => {
    if (!Array.isArray(styleNotes)) {
        return 'wrong type of styleNotes'
    } else if (styleNotes.length !== 5) {
        return 'there should be 5 notes from judges'
    } else if (styleNotes.filter( note => typeof note === 'number').length < 5) {
        return 'not all judge notes are a number'
    }

    const maxValue = Math.max.apply(Math, styleNotes)
    const indexOfMaxValue = styleNotes.indexOf(maxValue)

    styleNotes.splice(indexOfMaxValue, 1)

    const minValue = Math.min.apply(Math, styleNotes)
    const indexOfMinValue = styleNotes.indexOf(minValue)

    styleNotes.splice(indexOfMinValue, 1)

    let sum = 0
    for (let i=0; i < styleNotes.length; i++) {
        sum = sum + styleNotes[i]
    }

    return sum
}

module.exports = calculateStylePoints