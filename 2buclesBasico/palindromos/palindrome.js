

let palindromes = [ "reconocer", "oso", "radar", "ana", "sol", "casa", "nivel", "perro", "rotor", "computadora" ];

function myPalindrome (palindromes) {
    for (let i = 0 ; i < palindromes.length ; i++) {
    let reversedWords = palindromes[i].split('').reversed().join('');
        if (palindromes[i] !== reversedWords[i]) {
            console.log("Esta palabra no es palindroma.")
        }
    }
};

myPalindrome ();

// const myPalindrome = palindromes.find ((palindrome)) => {
//     const reversedWords = words[i].split('').reverse().join('');
//     if (palindromes !== reversedWords )
    
// }
