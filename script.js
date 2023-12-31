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
const link = document.querySelector('.link');


// Wait for the window to load before executing the script
window.onload = function () {
  // Get the cursor element
  // Get the cursor element
  var cursor = document.getElementById('cursor');

  // Hide the cursor as soon as the script is loaded
  cursor.style.display = 'none';

  // Event listener for mouse movement
  document.addEventListener('mousemove', function (e) {
    // Update the cursor's position to follow the mouse
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor.style.display = 'block'; // Show the cursor when the mouse moves
  }, false);

  // Event listener for mouse entering the window
  document.addEventListener('mouseenter', function (e) {
    // Show the cursor when the mouse enters the window
    cursor.style.display = 'block';
  });

  // Event listener for mouse leaving the window
  document.addEventListener('mouseleave', function (e) {
    // Hide the cursor when the mouse leaves the window
    cursor.style.display = 'none';
  });

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

  // Event listener for touch start
  document.addEventListener('touchstart', function (e) {
    // Show the cursor when the touch starts
    cursor.style.display = 'block';
  });

  // Event listener for touch move
  document.addEventListener('touchmove', function (e) {
    // Update the cursor's position to follow the touch
    cursor.style.left = e.touches[0].pageX + 'px';
    cursor.style.top = e.touches[0].pageY + 'px';
  });

  // Event listener for touch end
  document.addEventListener('touchend', function (e) {
    // Hide the cursor when the touch ends
    cursor.style.display = 'none';
  });

  /// Hide the cursor as soon as the script is loaded
  $('#cursor').hide();

  // Variables to store the cursor's position
  var cursorX = 0;
  var cursorY = 0;

  // Function to update the cursor's position
  function updateCursorPosition(e) {
    cursorX = e.clientX;
    cursorY = e.clientY;
  }

  // Add an event listener to update the cursor's position
  document.addEventListener('mousemove', updateCursorPosition);

  // Function to add the cursor effect
  function addCursorEffect() {
    $('#cursor').show();
    // Add the rest of your cursor effect code here...
  }

  // Add the cursor effect when the page is loaded
  window.onload = function () {
    // Check if the cursor is inside the window
    if (cursorX > 0 && cursorX < window.innerWidth && cursorY > 0 && cursorY < window.innerHeight) {
      // If the cursor is inside the window, add the cursor effect
      addCursorEffect();
    }
  };

  $(document).ready(function () {
    // Add the cursor effect when the mouse enters the document
    $(document).mouseenter(addCursorEffect);

    // Hide the cursor when the mouse leaves the document
    $(document).mouseleave(function () {
      $('#cursor').hide();
    });
  });

  // Add the cursor effect when the tab becomes visible
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) {
      addCursorEffect();
    }
  });

  // Function to add the cursor effect
  function addCursorEffect() {
    $('#cursor').show();
    // Add the rest of your cursor effect code here...
  }

  // Add the cursor effect when the page is loaded
  window.onload = function () {
    // Check if the cursor is inside the window
    var cursorX = window.event.clientX;
    var cursorY = window.event.clientY;
    if (cursorX > 0 && cursorX < window.innerWidth && cursorY > 0 && cursorY < window.innerHeight) {
      // If the cursor is inside the window, add the cursor effect
      addCursorEffect();
    }
  };

  $(document).ready(function () {
    // Add the cursor effect when the mouse enters the document
    $(document).mouseenter(addCursorEffect);

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

  // Add event listeners for mouseover and mouseout to the back button
  back.addEventListener('mouseover', () => {
    cursor.style.backgroundColor = 'red';
  });

  back.addEventListener('mouseout', () => {
    cursor.style.backgroundColor = 'white';
    cursor.style.mixBlendMode = "difference"; // This will invert the color
  });
}

  // Add event listeners for mouseover and mouseout to the back button
  link.addEventListener('mouseover', () => {
    cursor.style.backgroundColor = 'red';
  });

  link.addEventListener('mouseout', () => {
    cursor.style.backgroundColor = 'white';
    cursor.style.mixBlendMode = "difference"; // This will invert the color
  });



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
  link.addEventListener('click', function (e) {
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

// Get the current year
var currentYear = new Date().getFullYear();

// Get the element with the id "year"
var yearElement = document.getElementById('year');

// Set the text of the year element to the current year
yearElement.textContent = currentYear;