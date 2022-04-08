// program to check the number of occurrence of a character

function countString(a, letter) {
    let count = 0;

    // looping through the items
    for (let i = 0; i< a.length; i++) {

        // check if the character is at that position
        if (a.charAt(i) == letter) {
            count = count+1;
        }
    }
    return count;
}

// take input from the user
const a = prompt('Enter a string: ');
const letter = prompt('Enter a letterTocheck : ');

//passing parameters and calling the function
const result = countString(a, letter);

// displaying the result
document.write(result);