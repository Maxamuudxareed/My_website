// JavaScript to add interactivity

// Function to change the background color of the main content area
function changeBackgroundColor() {
    const main = document.querySelector('main');
    const currentColor = main.style.backgroundColor;
    main.style.backgroundColor = currentColor === 'white' ? '#e0f7fa' : 'white';
}

// Add an event listener to the button to trigger the background color change
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('colorButton');
    button.addEventListener('click', changeBackgroundColor);
});
