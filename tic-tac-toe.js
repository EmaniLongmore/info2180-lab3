// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all the squares using the square class
    var squares = document.querySelectorAll('.square');

    // Loop through each square and add appropriate classes
    squares.forEach(function(square) {
        // Add the 'empty' class to indicate that the square is empty
        square.className = 'square empty'
        // You can add more classes if needed, such as 'x' or 'o' for player moves
    });
});
