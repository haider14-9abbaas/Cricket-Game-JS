document.getElementById("roll-btn").addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
    if (randomNumber === 0) {
        document.getElementById("result").textContent = "**You're out!**";
    } else {
        document.getElementById("result").textContent = `You scored **${randomNumber} runs**!`;
    }
});
