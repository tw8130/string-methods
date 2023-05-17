// Write a
// function to check whether two given strings are anagram of each other or not.An anagram of a string is another string that contains the same characters, only the order of characters can be different.
//For example, “abcd” and“ dabc” are an anagram of each other.


function anagram(string1, string2) {

    const a = string1.toLowerCase().split('').sort().join('');
    const b = string2.toLowerCase().split('').sort().join('');

    if (a === b) {
        console.log('It is an anagram')
    } else {
        console.log('It is not an anagram')
    }
}
console.log(anagram('listen', 'silent'));
console.log(anagram('hello', 'world'));