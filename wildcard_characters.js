// Wildcard Characters
// Have the function WildcardCharacters(str) read str which will contain two strings separated by a space.
// The first string will consist of the following sets of characters: +, *, and {N} which is optional.
// The plus (+) character represents a single alphabetic character, the asterisk (*) represents a sequence of the same 
// character of length 3 unless it is followed by {N} which represents how many characters should appear in the sequence
// where N will be at least 1. Your goal is to determine if the second string exactly matches the pattern of the first string 
// in the input.

// For example: if str is "++*{5} gheeeee" then the second string in this case does match the pattern, so your program
// should return the string true. If the second string does not match the pattern your program should return the string false.

// Examples
// Input: "+++++* abcdemmmmmm"
// Output: false
// Input: "**+*{2} mmmrrrkbb"
// Output: true



// Solution
// The matching pattern problem is solved when we break the given string into two comparision strings
// Then we eliminate the false cases for the pattern based on our understanding of the problem
// E.g. If there is a '*' in the first string then there must be 3 same characters in the second string. If not then it is a false case
// When we check all the false cases and encounter any one, then we return false to terminate the whole check
// If not, we go through all the false cases and when none of them are encountered then we deduce that the pattern in both the strings must be same and return true


// For the worst case there will be two nested for loops. So the worst case time complexity would be O(n^2)


function wildCardCharacters(str){
    
    // Separating the string into two different strings for comparision
    let splitString = str.split(" ");
    let firstString = splitString[0];
    let secondString = splitString[1];

    // The counter is used to track the position of characters in the second string
    let secondStringPosCounter = 0;

    // Loop will run for the length of the first string
    for(i=0; i<firstString.length; i++){
        
        // If first character is {N} then terminate check because {N} should always be behind a * character
        if(firstString[0] === '{'){
            console.log('First character is {N}');
            return false
        }

        // If the character in first string is a '+' but there are 2 same characters in second string then terminate the check
        // Because repeating characters should always be represented by a '*' (in case of 3) or a '*' followed by {N}
        if(firstString[i] === '+'){
            console.log('Character is +')
            let areTwoCharactersSame = (secondString[secondStringPosCounter] === secondString[secondStringPosCounter+1])
            if(areTwoCharactersSame){
                console.log('2 characters in 2nd string are same')
                return false;
            }
            // If 2 characters are not same then the '+' character matches a uniqe alphabet so the position counter will be increased by one and the loop continues
            secondStringPosCounter+=1
        }

        // If the character in first string is a '*' but there are no 3 same characters in second string then terminate the check
        // Because if a '*' is not followed by a {N} then there must be 3 repeating characters
        if(firstString[i] === '*' && firstString[i+1] != '{'){
            console.log('Character is * without N')
            let areThreeCharactersSame = (secondString[secondStringPosCounter] === secondString[secondStringPosCounter+1]) && (secondString[secondStringPosCounter+1] === secondString[secondStringPosCounter+2]);
            if(!areThreeCharactersSame){
                console.log('3 characters in 2nd string are not same')
                return false;
            }
            // If 3 characters are same then the position counter will be increased by three and the loop continues
            secondStringPosCounter+=3
        }

        // If the character in first string is a '*' but it is followed by a {N} then add an extra loop to check if the number of repeating characters in the second string is equal to N
        // N is converted to integer and used along with the current position of second String to create the loop count
        if(firstString[i] === '*' && firstString[i+1] === '{'){
            console.log('Character is * with N')
            let characterCount = Number(firstString[i+2])
            let loopCount = secondStringPosCounter + characterCount

            // For the given N, if at any point the succesisve characters in the second string are not same then terminate the check
            // Because a '*' followed by {N} should represent N number of repeating characters
            for(let j=secondStringPosCounter; j<loopCount-1; j++){
                if(secondString[j] != secondString[j+1]){
                    console.log('Characters in 2nd string are not same for given N')
                    return false
                }
            }
            // If the check is successful then move the position counter to the end of the loop
            secondStringPosCounter=loopCount
            i+=3
        }
    }

    // After the loop has ended and all characters in the first string are checked, we check the remaining characters in the second string
    // If the first string has been checked but there are still remaining characters in the second string then the patterns in the two strings do no match
    if((secondString.length - secondStringPosCounter) > 1){
        console.log('First string has ended but there are remaining characters in 2nd string')
        return false
    }

    // If there are no false cases, then both the string patterns match
    return true
}

// let inputString = '+++++* abcdemmmmmm';
// let inputString = '++*{5} gheeeee'
let inputString = '{N}**+*{2} mmmrrrkbb';
let output = wildCardCharacters(inputString);
console.log(output);