// Get references to the elements
const back = document.querySelector('.back-button');
const menuButton = document.querySelector('.menu-button');
const darkModeToggle = document.getElementById('darkModeToggle');
const logoImage = document.getElementById('logoImage');
const menuOptions = document.getElementById('menuOptions');
const nav = document.querySelector('.nav_content');
const textDiv = document.querySelector('.text');
const typewriter = document.querySelector('.typewriter');
const backButton = document.querySelector('.back-button');
const text = document.querySelector('.text');
const ul = document.querySelector('ul');

// Wait for the window to load before executing the script
window.onload = function () {
  // Get the cursor element
  var cursor = document.getElementById('cursor');

  // Event listener for mouse movement
  document.addEventListener('mousemove', function (e) {
    // Update the cursor's position to follow the mouse
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
  }, false);

  // Event listener for touch movement
  document.addEventListener('touchmove', function (e) {
    // Prevent the browser from doing its default thing (scroll, zoom)
    e.preventDefault();

    // Get the information for finger #1
    var touch = e.touches[0];

    // Update the cursor's position to follow the touch
    cursor.style.left = touch.pageX + 'px';
    cursor.style.top = touch.pageY + 'px';
  }, { passive: false }); // This line tells the browser that the event handler may call preventDefault()


  // Hide the cursor as soon as the script is loaded
  $('#cursor').hide();

  $(document).ready(function () {
    // Show the cursor when the mouse enters the document
    $(document).mouseenter(function () {
      $('#cursor').show();
    });

    // Hide the cursor when the mouse leaves the document
    $(document).mouseleave(function () {
      $('#cursor').hide();
    });
  });

  // If the ul element exists, add event listeners for mouseover and mouseout
  if (ul) {
    ul.addEventListener('mouseover', () => {
      cursor.style.backgroundColor = 'red';
    });

    ul.addEventListener('mouseout', () => {
      cursor.style.backgroundColor = 'transparent';
    });
  }

  // Get the back button element
  const back = document.querySelector('.back-button');

  // Add event listeners for mouseover and mouseout to the back button
  back.addEventListener('mouseover', () => {
    cursor.style.backgroundColor = 'red';
  });

  back.addEventListener('mouseout', () => {
    cursor.style.backgroundColor = 'white';
    cursor.style.mixBlendMode = "difference"; // This will invert the color
  });
}


// Add event listeners for mouseover and mouseout to the menu button
menuButton.addEventListener('mouseover', () => {
  cursor.style.backgroundColor = 'red';
});

menuButton.addEventListener('mouseout', () => {
  cursor.style.backgroundColor = 'white';
  cursor.style.mixBlendMode = "difference"; // This will invert the color
});



// Function to set dark mode
function setDarkMode(isDarkMode) {
  document.body.classList.toggle('dark-mode', isDarkMode);
  darkModeToggle.textContent = isDarkMode ? 'LIGHT MODE' : 'DARK MODE';
  logoImage.src = isDarkMode ? 'assets/logo_W.png' : 'assets/logo_B.png';
  darkModeToggle.classList.toggle('light-mode', isDarkMode);

  menuOptions.classList.toggle('dark-mode', isDarkMode); // Add this line
  nav.classList.toggle('dark-mode', isDarkMode); // Add this line
  textDiv.classList.toggle('dark-mode', isDarkMode); // Add this line
  backButton.classList.toggle('dark-mode', isDarkMode); // Add this line
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

// Get all the 'li a' elements
var links = document.querySelectorAll('li a');

// Add event listeners for mouseover and mouseout to each 'li a' element
links.forEach(link => {
  link.addEventListener('mouseover', () => {
    cursor.style.backgroundColor = 'red';
  });

  link.addEventListener('mouseout', () => {
    cursor.style.backgroundColor = 'white'; // Set a color other than 'transparent'
    cursor.style.mixBlendMode = "difference"; // This will invert the color
  });
});

// Add event listeners for mouseover and mouseout to the menu options
menuOptions.addEventListener('mouseover', () => {
  cursor.style.backgroundColor = 'red';
});

menuOptions.addEventListener('mouseout', () => {
  cursor.style.backgroundColor = 'white';
  cursor.style.mixBlendMode = "difference"; // This will invert the color
});

// Add event listener for click to the menu button
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

// Add an event listener to the menu button
menuButton.addEventListener('click', function () {
  // Toggle the 'hidden' class on the back button
  backButton.classList.toggle('hidden');
});

// Get all the 'a' elements
var links = document.querySelectorAll('a');

// Add event listeners to each 'a' element
links.forEach(link => {
  link.addEventListener('click', function(e) {
    // Prevent the default action
    e.preventDefault();

    // Manually redirect to the href
    window.location.href = this.href;
  });

  link.addEventListener('mouseover', () => {
    cursor.style.backgroundColor = 'red';
  });

  link.addEventListener('mouseout', () => {
    cursor.style.backgroundColor = 'white';
    cursor.style.mixBlendMode = "difference"; // This will invert the color
  });
});