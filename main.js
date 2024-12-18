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
var commentText = document.getElementById("comment-text");

runButton.onclick = function() {
    var comment = commentText.value.trim();

    if (comment !== "") {
        // Show loading message while waiting for backend response
        resultsText.innerText = "Analyzing sentiment, please wait...";
        resultsText.style.display = "block";

        // Send the comment to the backend for sentiment analysis
        fetch('https://<your-vercel-backend-url>/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ comment: comment })
        })
        .then(response => response.json())
        .then(data => {
            // Display sentiment result
            resultsText.innerText = `Sentiment: ${data.sentiment}`;
            resultsText.style.display = "block";
        })
        .catch(error => {
            console.error("Error:", error);
            resultsText.innerText = "Error in analyzing sentiment. Please try again.";
            resultsText.style.display = "block";
        });
    } else {
        resultsText.innerText = "Please enter a comment to analyze.";
        resultsText.style.display = "block";
    }
};

// Clear the input and results
var clearButton = document.getElementById("clear-button");
clearButton.onclick = function() {
    commentText.value = "";
    resultsText.innerText = "";
    resultsText.style.display = "none"; // Hide text
};
