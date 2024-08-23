//your JS code here. If required.
// Function to determine the DOM level of the element with id 'level'
function determineDomLevel() {
    // Get the element with the id 'level'
    const targetElement = document.getElementById('level');

    // Initialize the level counter
    let level = 0;

    // Traverse up the DOM tree to count the number of levels
    let currentElement = targetElement;
    while (currentElement) {
        level++;
        currentElement = currentElement.parentElement;
    }

    // Display the result in the specified format
    alert(`The level of the element is: ${level}`);
}

// Call the function to determine the DOM level
determineDomLevel();
