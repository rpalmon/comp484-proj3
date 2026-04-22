// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
// Write the code here to select the mainTitle and update its innerHTML:
// Example: mainTitle.innerHTML = "New Title";
document.addEventListener("DOMContentLoaded", function() {
    mainTitle.innerHTML = "DOM Project: Ready!";
});


/* ======================================= */
// --- Task 4: Attribute Modification ---
// Write the code here to use setAttribute() on the toggleButton element
// to add the required 'data-action' attribute.

//what this code does:
//This code adds an attibute called "data-action" to the toggleButton element 
//and assigns it to the value "status-toggle".
toggleButton.setAttribute("data-action", "status-toggle");

// Task 5: The Toggle Button
//step 1: create function named toggleStatus()
function toggleStatus(e) {
    //Task 6: prevent default behavior of the button click
    e.preventDefault();

    //step 2: select the div with id "status-output"
    const statusDiv = document.getElementById("status-output");
    //use classList.toggle() to add or remove .hidden
    statusDiv.classList.toggle("hidden");
    //update the button text based on the current state of the statusDiv
    if (statusDiv.classList.contains("hidden")) {
        toggleButton.innerHTML = "Show Status";
        //If hidden reset the background color to empty string
        mainTitle.style.backgroundColor = "";
        
        console.log("Status hidden");
    } else {
        toggleButton.innerHTML = "Hide Status";
        //Task 7: If visible set main-title element backgroundColor to yellow
        mainTitle.style.backgroundColor = "yellow";
        createTimestamp(); // Call the function to create a timestamp when status is shown
        console.log("Status shown");
    }
    
}
//step 4: add an event listener to the toggle-button that runs toggleStatus on a click
toggleButton.addEventListener("click", toggleStatus);

// Task 8 Dynamic Element Creation
function createTimestamp() {
    //called inside of toggleStatus() whenever status is shown
    //step 1: create a new span
    document.createElement("span");
    //step 2: set its innerHTML to the current time
    const timestamp = new Date().toLocaleTimeString();
    const timestampSpan = document.createElement("span");
    timestampSpan.innerHTML = `- ${timestamp}`;
    //step 3: use appendChild() to add to the span
    statusOutput.appendChild(timestampSpan);

    //make span appear as nice looking list
    timestampSpan.style.display = "block";

}


/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
// Define and call the highlightListItems() function here so it runs on load.
// You will need to use document.querySelectorAll('li') and a loop structure
// (like a 'for' loop or 'forEach') to iterate over all list items [3-5].
//start of task 9
function highlightListItems() {
    //step 1: select all list items using querySelectorAll
    const listItems = document.querySelectorAll('li');
    //step 2: use a for loop or forEach to iterate through the list
    listItems.forEach((item) => {
        //step 3: set the inline color of each item to blue
        item.style.color = "blue";
    })
}

//call the function to run on load
highlightListItems();

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---
// Define the functions (e.g., toggleStatus, createTimestamp) and event listeners
// here to handle the click event on the toggleButton [6, 7].

/* ======================================= */
// --- Task 10: Timed Animation ---
// Define the startFlashing() and stopFlashing() functions using
// setInterval() and clearInterval() [8, 9], and bind them to the
// timerButton using addEventListener for 'click' and 'dblclick' [10].
