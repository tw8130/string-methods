// Write a JavaScript
// function that hides email addresses to prevent unauthorized access.
// Test Data:
//     console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

function protect_email(email) {
    // Split the email address at the @ symbol
    const parts = email.split("@");

    // Get the first part of the email address
    const username = parts[0];

    // Get the length of the username
    const usernameLength = username.length;

    // Get the middle three characters of the username
    const middleCharacters = username.substring(0, 3) + "...";

    // Combine the middle characters with the domain name
    const hiddenEmail = middleCharacters + "@" + parts[1];

    // Return the hidden email address
    return hiddenEmail;
}

console.log(protect_email("robin_singh@example.com"));