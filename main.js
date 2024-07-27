// Get the form element
const signupForm = document.getElementById("form");

// Add an event listener for the form submission
signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Create a FormData object from the form element
  const formData = new FormData(signupForm);

  // Send a POST request with the form data
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Request resolved", data);
      signupForm.reset();
    })
    .catch((error) => console.error("Request failed", error));
});