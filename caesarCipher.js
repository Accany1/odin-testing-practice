function caesarCipher(str, shiftFac) {
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let newStr = ""

    for (let i =0; i<str.length;i++) {
        const char = str[i]
        let newChar = ""
        const upperChar = char.toUpperCase()
        const letterIndex = letters.findIndex(element => element === upperChar)
        if (letterIndex === -1) {
            newStr += char
        } else {
            const newIndex = (letterIndex + shiftFac) % 26
        if (char === char.toUpperCase()) {
            newChar = letters[newIndex]
        } else {
            newChar = letters[newIndex].toLowerCase()
        }
        newStr += newChar
        }
    }

    return newStr
}

module.exports = caesarCipher