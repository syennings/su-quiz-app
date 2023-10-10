// Get a reference to the bookmark icon element

// const bookmarkIcon = document.getElementById("bookmark-icon");
// // console.log(bookmarkIcon);

// // Initialize a variable to keep track of the bookmark state
// let isBookmarked = false;

// function toggleBookmark() {
//   isBookmarked = !isBookmarked; // Toggle the state

//   // Change the emoji based on the state
//   if (isBookmarked) {
//     bookmarkIcon.innerHTML = "📖"; // Change to a different emoji when bookmarked
//   } else {
//     bookmarkIcon.innerHTML = "&#128278;"; // Change to the original emoji when not bookmarked
//   }
// }

// Add a click event listener to the bookmark icon
// bookmarkIcon.addEventListener("click", toggleBookmark);

// for (let i = 0; i < bookmarkIcons.length; i++) {
//   let isBookmarked = false; // Initialize the bookmark state for each icon

//   bookmarkIcons[i].addEventListener("click", () => {
//     isBookmarked = !isBookmarked; // Toggle the state

//     // Change the emoji based on the state
//     if (isBookmarked) {
//       bookmarkIcons[i].innerHTML = "📖"; // Change to a different emoji when bookmarked
//     } else {
//       bookmarkIcons[i].innerHTML = "&#128278;"; // Change to the original emoji when not bookmarked
//     }
//   });
// }

const bookmarkIcons = document.querySelectorAll(
  ".question-card__bookmark-icon"
);

// Initialize an array of bookmark states
const isBookmarked = new Array(bookmarkIcons.length).fill(false);

// Add click event listeners to each bookmark icon
bookmarkIcons.forEach((bookmarkIcon, index) => {
  bookmarkIcon.addEventListener("click", () => {
    isBookmarked[index] = !isBookmarked[index]; // Toggle the state

    // Change the emoji based on the state
    if (isBookmarked[index]) {
      bookmarkIcon.innerHTML = "📖"; // Change to a different emoji when bookmarked
    } else {
      bookmarkIcon.innerHTML = "&#128278;"; // Change to the original emoji when not bookmarked
    }
  });
});
