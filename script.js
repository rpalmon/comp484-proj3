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
function toggleStatus() {
    //step 2: select the div with id "status-output"
    const statusDiv = document.getElementById("status-output");
    //use classList.toggle() to add or remove .hidden
    statusDiv.classList.toggle("hidden");
    //update the button text based on the current state of the statusDiv
    if (statusDiv.classList.contains("hidden")) {
        toggleButton.innerHTML = "Show Status";
        console.log("Status hidden");
    } else {
        toggleButton.innerHTML = "Hide Status";
        console.log("Status shown");
    }
    
}
//step 4: add an event listener to the toggle-button that runs toggleStatus on a click
toggleButton.addEventListener("click", toggleStatus);


/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
// Define and call the highlightListItems() function here so it runs on load.
// You will need to use document.querySelectorAll('li') and a loop structure
// (like a 'for' loop or 'forEach') to iterate over all list items [3-5].

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---
// Define the functions (e.g., toggleStatus, createTimestamp) and event listeners
// here to handle the click event on the toggleButton [6, 7].

/* ======================================= */
// --- Task 10: Timed Animation ---
// Define the startFlashing() and stopFlashing() functions using
// setInterval() and clearInterval() [8, 9], and bind them to the
// timerButton using addEventListener for 'click' and 'dblclick' [10].
