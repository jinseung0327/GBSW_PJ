document.addEventListener('DOMContentLoaded', function () {
  let score = 0;

  // Answers based on the specified sequence
  const answers = [false, false, true, false, false, false];

  // Function to update the score display
  function updateScore() {
    document.getElementById('score').innerText = 'Score: ' + score;
  }

  // Function to handle button clicks and update the score
  function handleButtonClick(isCorrect, event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const clickedButton = event.target;
    const buttonGroup = clickedButton.closest('.choices-group');

    // Check if the button is already selected
    if (!clickedButton.classList.contains('selected')) {
      // Remove the 'selected' class from all buttons within the same group
      buttonGroup.querySelectorAll('.btn').forEach(button => {
        button.classList.remove('selected');
      });

      // If there was a previous answer, subtract the appropriate points
      if (buttonGroup.dataset.prevIsCorrect !== undefined) {
        score -= buttonGroup.dataset.prevIsCorrect === 'true' ? 10 : 5;
      }

      if (isCorrect) {
        score += 10; // Add 10 points for correct answers
      } else {
        score += 5; // Add 5 points for incorrect answers
      }

      clickedButton.classList.add('selected');
      buttonGroup.dataset.prevIsCorrect = isCorrect; // Store the current answer's correctness state
      updateScore(); // Update the score display
    }
  }

  // Function to display the total score in the custom notification
  function displayTotalScore() {
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notification-message');

    const message = "Your Total Score: " + score;
    notificationMessage.innerText = message;
    notification.style.display = 'block';
  }

  // Function to close the custom notification
  function closeNotification() {
    const notification = document.getElementById('notification');
    notification.style.display = 'none';
  }

  // Add event listeners for button clicks
  document.querySelectorAll('.btn').forEach((button, index) => {
    button.addEventListener('click', function (event) {
      const isCorrect = answers[index];
      handleButtonClick(isCorrect, event);
    });
  });

  // Add event listener for the submit button
  document.getElementById('submit-btn').addEventListener('click', displayTotalScore);

  // Add event listener for the close notification button
  document.getElementById('close-notification-btn').addEventListener('click', closeNotification);

  // Add event listener for the reset button
  document.getElementById('reset-btn').addEventListener('click', function () {
    location.reload();
  });
});
