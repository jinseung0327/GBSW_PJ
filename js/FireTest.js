"use strict"

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
    let score = 0;

    const answers = ['정답이 아니다 !', '정답이 아니다 !', '정답이 확실하다 !', '정답이 아니다 !', '정답이 아니다 !', '정답이 확실하다 !', '정답이 확실하다 !', '정답이 아니다 !', '정답이 아니다 !', '정답이 확실하다 !'];

    document.querySelectorAll('.choices-group').forEach((group, index) => {
      const selectedButton = group.querySelector('.btn.selected');

      if (selectedButton) {
        if (selectedButton.innerText === answers[index]) {
          score += 10;
        }
      }
    });

    const message = "Your Total Score: " + score;
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
