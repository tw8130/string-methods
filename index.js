// A string is a palindrome
// if it is read the same from forward or backward.For example, dad reads the same either from forward or backward.So the word dad is a palindrome.Similarly, madam is also a palindrome.Write a JavaScript
// function to determine whether a given string is a palindrome.





function palindrome(str) {

    const arrValue = str.split('');

    const revArrValue = arrValue.reverse();

    const revStr = revArrValue.join('');

    if (str == revStr) {
        console.log('It is a palindrome')
    } else {
        console.log('It is not a palindrome')
    }
}

const str = 'madam';
const value = palindrome(str);
console.log(value);