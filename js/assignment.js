"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const yearElement = document.getElementById("year");
const resolutionElement = document.getElementById("resolution")
const willMeetResolutionElement = document.getElementById("will-meet-resolution")
const submissionBtn = document.getElementById("submission-btn")

// Declare your variables here.
const year = "2024";
const resolution = "Learn more javascript!";
let willMeetResolution = "true"
function updateYear() {
    yearElement.innerText = year;
    // Update this function

}

function updateResolution() {
    // Update this function 
    resolutionElement.innerText = resolution;

}

function updateWillMeetResolution() {
    // Update this function
willMeetResolutionElement.innerText =willMeetResolution;
}

function render() {
    // Update this function
    updateResolution();
    updateWillMeetResolution();
    updateYear();

}

submissionBtn.addEventListener("click", function () {
    // Update this function
    render();
})
