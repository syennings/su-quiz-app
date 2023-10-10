const questionTextarea = document.getElementById("question");
const answerTextarea = document.getElementById("answer");
const questionCharCount = document.getElementById("question-char-count");
const answerCharCount = document.getElementById("answer-char-count");

// Function to update character count
function updateCharacterCount(textarea, charCountElement, maxLength) {
  const currentLength = textarea.value.length;
  charCountElement.textContent = `Number of Characters: ${currentLength}/${maxLength}`;
}

// Add input event listeners to the textareas
questionTextarea.addEventListener("input", function () {
  updateCharacterCount(questionTextarea, questionCharCount, 100); // 100 is the max length for the question
});

answerTextarea.addEventListener("input", function () {
  updateCharacterCount(answerTextarea, answerCharCount, 150); // 150 is the max length for the answer
});

// Initialize character count
updateCharacterCount(questionTextarea, questionCharCount, 100);
updateCharacterCount(answerTextarea, answerCharCount, 150);
