

let palindromes = [ "reconocer", "oso", "radar", "ana", "sol", "casa", "nivel", "perro", "rotor", "computadora" ];
const reverseText = (text) => {
    let reversed = ' '
    for (let i = palindromes[i].length - 1 ; i > = 0 ; i--){
        reverseText += palindromes[i]
    }
    return reverseText
}

const firstPalindrome = (text) => {
    const textWithoutBlanks = deleteBlankSpaces(palindromes)
    const resersedTextWithoutBlanks = textWithoutBlanks.split('').reverse().join('')
    return textWithoutBlanks === reversedTextWithoutBlanks
}
const deleteBlankSpaces = (text) => {
    const splitText = text.split('')
    const textWithoutBlanks = splitText.filter( letter => letter !== ' ')
    return textWithoutBlanks.join(' ').toLowerCase()
}
console.log(firstPalindrome("reconocer"))
// const myPalindrome = palindromes.find ((palindrome)) => {
//     const reversedWords = words[i].split('').reverse().join('');
//     if (palindromes !== reversedWords )
    
// }
