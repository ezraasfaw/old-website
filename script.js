var cursor = document.getElementById('cursor');

document.addEventListener('mousemove', function(e) {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});

const ul = document.querySelector('ul');

if (ul) {
  ul.addEventListener('mouseover', () => {
    cursor.style.backgroundColor = 'red';
  });

  ul.addEventListener('mouseout', () => {
    cursor.style.backgroundColor = 'transparent';
  });
}




const back = document.querySelector('.back-button');

back.addEventListener('mouseover', () => {
  cursor.style.backgroundColor = 'red';
});

back.addEventListener('mouseout', () => {
  cursor.style.backgroundColor = 'white';
  cursor.style.mixBlendMode = "difference"; /* This will invert the color */
});


const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('mouseover', () => {
  cursor.style.backgroundColor = 'red';
});

menuButton.addEventListener('mouseout', () => {
  cursor.style.backgroundColor = 'white';
  cursor.style.mixBlendMode = "difference"; /* This will invert the color */
});






// Get references to the elements
const darkModeToggle = document.getElementById('darkModeToggle');
const logoImage = document.getElementById('logoImage');
const menuOptions = document.getElementById('menuOptions'); // Add this line
const nav = document.querySelector('.nav_content');
const textDiv = document.querySelector('.text'); // Add this line
const typewriter = document.querySelector('.typewriter');

// Function to set dark mode
function setDarkMode(isDarkMode) {
  document.body.classList.toggle('dark-mode', isDarkMode);
  darkModeToggle.textContent = isDarkMode ? 'LIGHT MODE' : 'DARK MODE';
  logoImage.src = isDarkMode ? 'assets/logo_W.png' : 'assets/logo_B.png';
  darkModeToggle.classList.toggle('light-mode', isDarkMode);
  menuOptions.classList.toggle('dark-mode', isDarkMode); // Add this line
  nav.classList.toggle('dark-mode', isDarkMode); // Add this line
  textDiv.classList.toggle('dark-mode', isDarkMode); // Add this line
  typewriter.classList.toggle('dark-mode', isDarkMode);
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : null);
}

// Check if dark mode was previously set
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
setDarkMode(isDarkMode);

// Add event listener for the toggle button
darkModeToggle.addEventListener('click', () => {
  const isDarkMode = document.body.classList.contains('dark-mode');
  setDarkMode(!isDarkMode);
});




const text = document.querySelector('.text'); 

nav.addEventListener('mouseover', () => {
  cursor.style.backgroundColor = 'red';
});

nav.addEventListener('mouseout', () => {
  cursor.style.backgroundColor = 'white';
  cursor.style.mixBlendMode = "difference"; /* This will invert the color */
});

menuOptions.addEventListener('mouseover', () => {
  cursor.style.backgroundColor = 'red';
});

menuOptions.addEventListener('mouseout', () => {
  cursor.style.backgroundColor = 'white';
  cursor.style.mixBlendMode = "difference"; /* This will invert the color */
});


menuButton.addEventListener('click', () => {
  // If menuOptions is displayed, hide it, otherwise, display it
  if (menuOptions.style.display === 'block') {
    location.reload(); // Refresh the current page
  } else {
    menuButton.textContent = 'RETURN';
    text.innerHTML = ''; // Clear out the text after the animation
    nav.innerHTML = ''; // Hide the nav-content
    menuOptions.style.display = 'block'; // Display the navigation options
    nav.style.display = 'block'; // Show the nav-content
  }
});


var backButton = document.querySelector('.back-button');

menuButton.addEventListener('click', function() {
  backButton.style.display = 'none';
});