document.querySelector('.signup').addEventListener('click', function(event) {
    event.preventDefault();
    openModal('signupModal');
});

// Open the modal when "Login" is clicked
document.querySelector('.login').addEventListener('click', function(event) {
    event.preventDefault();
    openModal('loginModal');
});

// Function to open a modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Function to close a modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
    }
}