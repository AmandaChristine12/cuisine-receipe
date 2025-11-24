function openProject(id) {
    if (id === 1) {
        alert("UI/UX Design Project – belum ada link 🙂");
    } 
    else if (id === 2) {
        alert("Rock Paper Scissors Game – belum ada link 🙂");
    }
}

function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    alert("Thank you, " + name + "! Your message has been sent.");
}
