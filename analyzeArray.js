function analyzeArray(array) {
    const maximumNum = Math.max(...array)
    const minimumNum = Math.min(...array)
    const averageNum = array.reduce((sum,currentValue) => sum + currentValue, 0)/array.length
    const lengthNum = array.length

    return {
        average: averageNum,
        min: minimumNum,
        max: maximumNum,
        length: lengthNum
    }
}

module.exports = analyzeArray