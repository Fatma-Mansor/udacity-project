/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
const frames = document.querySelectorAll("#animation");
const frameCount = frames.length;
let i = 0;
setInterval(function () { 
    frames[i % frameCount].style.display = "none";
    frames[++i % frameCount].style.display = "block";
}, 500);
        
const mainHeading = document.querySelector('ul');
mainHeading.style.color="red";
mainHeading.insertAdjacentHTML('afterbegin', '<button onclick="Home()">HomePge</button>');
mainHeading.insertAdjacentHTML('afterbegin', '<button onclick="FS1()">FS1</button>');
mainHeading.insertAdjacentHTML('afterbegin','<button onclick="FS2()">FS2</button>');
mainHeading.insertAdjacentHTML('afterbegin','<button onclick="Year1()">Year1</button>');
mainHeading.insertAdjacentHTML('afterbegin','<button onclick="Year2()">Year2</button>');
mainHeading.insertAdjacentHTML('afterbegin','<button onclick="Year3()">Year3</button>');
mainHeading.insertAdjacentHTML('afterbegin','<button onclick="Images()">Images</button>');
function Home() {
    window.location.href="pr.html";
    window.scrollTo(0,0);
  }
  function FS1() {
    window.scrollTo(300, 900);
  }
  function FS2() {
    
    window.scrollTo(300, 1600);
  }
  function Year1() {
    window.scrollTo(300, 2200);
  }
  function Year2() {
    window.scrollTo(300, 2700);
  }
  function Year3() {
    window.scrollTo(300, 3400);
  }
  function Images() {
    window.location.href="image.html";

  }
 
/**
 * 
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active