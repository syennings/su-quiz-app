// Get all the answer buttons and their corresponding answer elements
const answerButtons = document.querySelectorAll(
  ".question-card__answer-button"
);
const answers = document.querySelectorAll(".question-card__answer");

for (let index = 0; index < answerButtons.length; index++) {
  // Add a click event listener to each answer button
  answerButtons[index].addEventListener("click", function () {
    // Get the corresponding answer element for this button
    const currentAnswer = answers[index];

    // Toggle the 'hidden' class on the answer element
    if (currentAnswer.classList.contains("hidden")) {
      currentAnswer.classList.remove("hidden");
      // Change the button text to "Hide Answer"
      answerButtons[index].textContent = "Hide Answer";
    } else {
      currentAnswer.classList.add("hidden");
      // Change the button text to "Show Answer"
      answerButtons[index].textContent = "Show Answer";
    }
  });
}

// // Add a click event listener to each answer button
// answerButtons.forEach((button, index) => {
//   button.addEventListener("click", () => {
//     // Toggle the 'hidden' class on the corresponding answer element
//     answers[index].classList.toggle("hidden");

//     // Change the button text based on the answer's visibility
//     if (answers[index].classList.contains("hidden")) {
//       button.textContent = "Show Answer";
//     } else {
//       button.textContent = "Hide Answer";
//     }
//   });
// });
