(function () {
    var userInput = prompt('Choose one: rock,paper, scissors???');
    var parsedInput = userInput.toLowerCase();
    var computer = Math.floor(Math.random() * 3);
    if (computer === 0) {
        computer = 'rock';
    } else if (computer === 1) {
        computer = "paper";
    } else {
        computer = 'scissors';
    }

    if (computer === userInput) {
        document.getElementById('result').innerHTML = 'Everyone is equally unhappy! TRY AGAIN!!';
    } else {
        if (parsedInput === 'rock') {
            if (computer === 'scissors') {
                document.getElementById('result').innerHTML = 'You are KING!^^';
            } else if (computer === 'paper') {
                document.getElementById('result').innerHTML = 'You are LOSER!:D';
            }
        }
        if (parsedInput === 'paper') {
            if (computer === 'scissors') {
                document.getElementById('result').innerHTML = 'You are LOSER!:D';
            } else if (computer === 'rock') {
                document.getElementById('result').innerHTML = 'You are KING!^^';
            }
        }
        if (parsedInput === 'scissors') {
            if (computer === 'paper') {
                document.getElementById('result').innerHTML = 'You are KING!^^';
            } else if (computer === 'rock') {
                document.getElementById('result').innerHTML = 'You are LOSER!:D';
            }
        }
    }
    alert(computer);
})();