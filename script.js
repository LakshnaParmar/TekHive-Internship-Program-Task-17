// script.js
function checkPalindrome() {
    const inputString = document.getElementById('inputString').value;
    const resultElement = document.getElementById('result');
    
    // Remove non-alphanumeric characters and convert to lowercase
    const sanitizedString = inputString.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Check if the string is the same forwards and backwards
    const isPalindrome = sanitizedString === sanitizedString.split('').reverse().join('');
    
    if (isPalindrome) {
        resultElement.textContent = `"${inputString}" is a palindrome!`;
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `"${inputString}" is not a palindrome.`;
        resultElement.style.color = 'red';
    }
}
