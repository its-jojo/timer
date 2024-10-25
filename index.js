let countdown;
let timeLeft = 10; // Set the countdown time in seconds

document.getElementById('startButton').addEventListener('click', function() {
    clearInterval(countdown); // Clear any existing countdown
    timeLeft = 10; // Reset time left
    document.getElementById('timer').textContent = timeLeft; // Display initial time

    countdown = setInterval(function() {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
        }
    }, 1000); 
});