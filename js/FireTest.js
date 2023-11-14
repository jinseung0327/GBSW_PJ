document.addEventListener('DOMContentLoaded', function () {
  function handleButtonClick(event) {
    event.preventDefault();

    const clickedButton = event.target;
    const buttonGroup = clickedButton.closest('.choices-group');

    if (!clickedButton.classList.contains('selected')) {
      buttonGroup.querySelectorAll('.btn').forEach(button => {
        button.classList.remove('selected');
      });

      clickedButton.classList.add('selected');
    }
  }

  function displayTotalScore() {
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notification-message');

    const message = "Your Total Score: " + 0; 
    notificationMessage.innerText = message;
    notification.style.display = 'block';
  }

  function closeNotification() {
    const notification = document.getElementById('notification');
    notification.style.display = 'none';
  }

  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', handleButtonClick);
  });

  document.getElementById('submit-btn').addEventListener('click', displayTotalScore);

  document.getElementById('close-notification-btn').addEventListener('click', closeNotification);

  document.getElementById('reset-btn').addEventListener('click', function () {
    location.reload();
  });
});
