document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
  
    squares.forEach(square => {
      square.classList.add('square'); // Add the square class to each div element
    });
  });
  


var gameState = [];


document.addEventListener("DOMContentLoaded", function() {
    
    var squares = document.querySelectorAll('.square');

    
    squares.forEach(function(square, index) {
        

        square.addEventListener('click', function() {
            
            if (gameState[index] === null) {
                
                var currentPlayer = (gameState.filter(Boolean).length % 2 === 0) ? 'X' : 'O';

                
                gameState[index] = currentPlayer;
                square.textContent = currentPlayer;

                
                square.classList.add(currentPlayer);

               
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
  
    squares.forEach(square => {
      square.classList.add('square'); 
  
      
      square.addEventListener('mouseenter', function() {
        square.classList.add('hover'); 
      });
  

      square.addEventListener('mouseleave', function() {
        square.classList.remove('hover'); 
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    const status = document.getElementById('status');
  
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
  
    squares.forEach((square, index) => {
      square.classList.add('square'); 
  
      square.addEventListener('mouseenter', function() {
        square.classList.add('hover'); 
      });
  
      square.addEventListener('mouseleave', function() {
        square.classList.remove('hover'); 
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
  
  document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    const status = document.getElementById('status');
    const newGameButton = document.querySelector('.btn');

    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];

    squares.forEach((square, index) => {
        square.classList.add('square'); 

        square.addEventListener('mouseenter', function() {
            square.classList.add('hover'); 
        });

        square.addEventListener('mouseleave', function() {
            square.classList.remove('hover'); 
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

    newGameButton.addEventListener('click', function() {
    
        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('X', 'O');
        });

       
        currentPlayer = 'X';
        gameBoard = ['', '', '', '', '', '', '', '', ''];

       
        status.textContent = 'Move your mouse over a square and click to play an X or an O.';
        status.classList.remove('you-won');
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
       
    }
);


