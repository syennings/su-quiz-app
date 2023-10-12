// Get a reference to the form element
const form = document.querySelector(".form");

// Get a reference to the card container
const formContainer = document.querySelector(".form__container");

// Add a "submit" event listener to the form
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Read data from the input fields
  const question = document.getElementById("question").value;
  const answer = document.getElementById("answer").value;
  const tags = document.getElementById("tag").value;

  // Create card elements
  const card = document.createElement("div");
  card.classList.add("card"); // You can define a CSS class for styling

  const cardQuestion = document.createElement("h2");
  cardQuestion.textContent = "Question: " + question;

  const cardAnswer = document.createElement("p");
  cardAnswer.textContent = "Answer: " + answer;

  const cardTags = document.createElement("p");
  cardTags.textContent = "Tags: " + tags;

  // Append card elements to the card container
  card.append(cardQuestion);
  card.append(cardAnswer);
  card.append(cardTags);

  // Insert the card immediately below the form
  formContainer.insertAdjacentElement("beforeend", card);

  //   Clear the form input fields
  form.reset();
});
