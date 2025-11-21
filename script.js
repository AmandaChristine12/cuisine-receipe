// Show recipe detail
function showDetail(recipe) {
    alert("Showing details for: " + recipe);
}

// Contact Form Submit
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // simple validation
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("Please fill all fields!");
        return;
    }

    // Close modal
    let modal = bootstrap.Modal.getInstance(document.getElementById("contactModal"));
    modal.hide();

    // Show popup message (from up → middle)
    let popup = document.getElementById("popupMessage");
    popup.style.top = "40%";  // middle animation

    // Hide again after 4 seconds
    setTimeout(() => {
        popup.style.top = "-200px";
    }, 4000);
});

// # Pop up message feature from up to middle
// (comment sesuai dosen kamu)
