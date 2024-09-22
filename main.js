/* Modal for Report Comment */
var reportPopup = document.getElementById("report-popup");
var reportButton = document.getElementById("report-button");
var confirmReportButton = document.getElementById("confirm-report");
var cancelReportButton = document.getElementById("cancel-report");

/* Show Report Popup */
reportButton.onclick = function() {
    reportPopup.style.display = "flex";
};

/* Close Report Popup */
cancelReportButton.onclick = function() {
    reportPopup.style.display = "none";
};

/* Confirm Report */
confirmReportButton.onclick = function() {
    alert("Comment reported!");
    reportPopup.style.display = "none";
};

/* Handle Input and Output */
var runButton = document.getElementById("run-button");
var resultsBox = document.getElementById("results-box");
var resultsText = document.getElementById("results");
var videoUrl = document.getElementById("video-url");

runButton.onclick = function() {
    if (videoUrl.value.trim() !== "") {
        resultsText.innerText = "Model not integrated. Stay tuned!";
        resultsText.style.display = "block"; // Show text
    } else {
        resultsText.innerText = "";
        resultsText.style.display = "none"; // Hide text
    }
};

var clearButton = document.getElementById("clear-button");
clearButton.onclick = function() {
    videoUrl.value = "";
    resultsText.innerText = "";
    resultsText.style.display = "none"; // Hide text
};
