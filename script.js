/* Modal for Sign In */
var signInModal = document.getElementById("signInModal");
var openSignInModalBtn = document.getElementById("openSignInModal");
var closeSignInBtn = document.getElementsByClassName("close-btn")[0];

/* Open Sign In Modal */
openSignInModalBtn.onclick = function() {
    signInModal.style.display = "flex";
}

/* Close Sign In Modal */
closeSignInBtn.onclick = function() {
    signInModal.style.display = "none";
}

/* Close Sign In Modal when clicking outside */
window.onclick = function(event) {
    if (event.target == signInModal) {
        signInModal.style.display = "none";
    }
}
