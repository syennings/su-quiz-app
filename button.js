// Get a reference to the bookmark icon element
const bookmarkIcon = document.getElementById("bookmark-icon");

// console.log(bookmarkIcon);

// Initialize a variable to keep track of the bookmark state
let isBookmarked = false;

function toggleBookmark() {
  isBookmarked = !isBookmarked; // Toggle the state

  // Change the emoji based on the state
  if (isBookmarked) {
    bookmarkIcon.innerHTML = "📖"; // Change to a different emoji when bookmarked
  } else {
    bookmarkIcon.innerHTML = "&#128278;"; // Change to the original emoji when not bookmarked
  }
}

// Add a click event listener to the bookmark icon
bookmarkIcon.addEventListener("click", toggleBookmark);
