// JavaScript for dynamic functionality

// Dynamic greeting based on the time of day
const greetingElement = document.getElementById('greeting');
const hour = new Date().getHours();

if (hour < 12) {
    greetingElement.textContent = 'Good Morning! Welcome to My Portfolio';
} else if (hour < 18) {
    greetingElement.textContent = 'Good Afternoon! Welcome to My Portfolio';
} else {
    greetingElement.textContent = 'Good Evening! Welcome to My Portfolio';
}

// Toggle between light and dark mode
const toggleModeButton = document.getElementById('toggle-mode');
toggleModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleModeButton.textContent = document.body.classList.contains('dark-mode')
        ? 'Switch to Light Mode'
        : 'Switch to Dark Mode';
});

