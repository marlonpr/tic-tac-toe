const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function(e) {
    if (e.target.textContent === '') {
      e.target.textContent = currentPlayer;
      setTimeout(function() {
        console.log("This message will be displayed after 100 milliseconds");
        checkForWin();
        switchPlayer();
      }, 100);      
    }
  });
}

function checkForWin() {
  // Check rows
  for (let i = 0; i < 9; i += 3) {
    if (squares[i].textContent === currentPlayer &&
        squares[i + 1].textContent === currentPlayer &&
        squares[i + 2].textContent === currentPlayer) {
      alert(currentPlayer + ' wins!');
      resetGame();
      return;
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (squares[i].textContent === currentPlayer &&
        squares[i + 3].textContent === currentPlayer &&
        squares[i + 6].textContent === currentPlayer) {
      alert(currentPlayer + ' wins!');
      resetGame();
      return;
    }
  }

  // Check diagonals
  if (squares[0].textContent === currentPlayer &&
      squares[4].textContent === currentPlayer &&
      squares[8].textContent === currentPlayer) {
    alert(currentPlayer + ' wins!');
    resetGame();
    return;
  }
  if (squares[2].textContent === currentPlayer &&
      squares[4].textContent === currentPlayer &&
      squares[6].textContent === currentPlayer) {
    alert(currentPlayer + ' wins!');
    resetGame();
    return;
  }
}

function switchPlayer() {
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
}

function resetGame() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}
