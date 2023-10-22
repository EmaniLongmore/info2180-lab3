document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
  
    squares.forEach(square => {
      square.classList.add('square'); // Add the 'square' class to each div element
    });
  });
  

// Initialize an empty array to keep track of the game state
var gameState = [];

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all the squares using the square class
    var squares = document.querySelectorAll('.square');

    // Add click event listener to each square
    squares.forEach(function(square, index) {
        // Initialize the game state with null values (indicating empty squares)
        gameState[index] = null;

        square.addEventListener('click', function() {
            // Check if the square is empty
            if (gameState[index] === null) {
                // Determine current player (X or O)
                var currentPlayer = (gameState.filter(Boolean).length % 2 === 0) ? 'X' : 'O';

                // Update the game state and display X or O in the square
                gameState[index] = currentPlayer;
                square.textContent = currentPlayer;

                // Add the class to style the square with appropriate color
                square.classList.add(currentPlayer);

                // You can now use the gameState array to check for a win or a draw
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
  
    squares.forEach(square => {
      square.classList.add('square'); // Add the 'square' class to each div element
  
      // Add event listener for mouse enter
      square.addEventListener('mouseenter', function() {
        square.classList.add('hover'); // Add the 'hover' class when the mouse enters the square
      });
  
      // Add event listener for mouse leave
      square.addEventListener('mouseleave', function() {
        square.classList.remove('hover'); // Remove the 'hover' class when the mouse leaves the square
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    const status = document.getElementById('status');
  
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
  
    squares.forEach((square, index) => {
      square.classList.add('square'); // Add the 'square' class to each div element
  
      square.addEventListener('mouseenter', function() {
        square.classList.add('hover'); // Add the 'hover' class when the mouse enters the square
      });
  
      square.addEventListener('mouseleave', function() {
        square.classList.remove('hover'); // Remove the 'hover' class when the mouse leaves the square
      });
  
      square.addEventListener('click', function() {
        if (gameBoard[index] === '' && !checkWinner()) {
          gameBoard[index] = currentPlayer;
          square.textContent = currentPlayer;
          square.classList.add(currentPlayer);
  
          if (checkWinner()) {
            status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
            status.classList.add('you-won');
          } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            status.textContent = `It's ${currentPlayer}'s turn.`;
            status.classList.remove('you-won');
          }
        }
      });
    });
  
    function checkWinner() {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
      ];
  
      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
          return true;
        }
      }
  
      return false;
    }
  });
  

