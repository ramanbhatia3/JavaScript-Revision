// Write a function isAnagram ehich takes 2 parameters and returns true/false if those are anagrams or not.

// Anagrams - a word, phrase or name formed by rearranging the letters of another, such as spar, formed from rasp.

function isAnagram(str1, str2){
    const string1 = str1.toLowerCase().split("").sort().join("");
    const string2 = str1.toLowerCase().split("").sort().join("");

    if (string1 == string2) {
        return true
    }
    else {
        false
    }
}

answer = isAnagram("spam","maps")

console.log(answer)