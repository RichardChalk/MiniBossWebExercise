// Show correct Exercise according to navbar choice!
function showExercise(exerciseId) {
  document.querySelectorAll(".container").forEach((container) => {
    container.classList.remove("active");
  });
  document.getElementById(exerciseId).classList.add("active");
}

// Create Circle
document.getElementById("circleButton").addEventListener("click", function () {
  const shape = document.getElementById("shape");
  shape.style.borderRadius = "50%";
  shape.style.backgroundColor = "blue";
});

// Create square
document.getElementById("squareButton").addEventListener("click", function () {
  const shape = document.getElementById("shape");
  shape.style.borderRadius = "0";
  shape.style.backgroundColor = "red";
});

// Move square when hovering mouse over it
document
  .getElementById("movingSquare")
  .addEventListener("mouseover", function () {
    const square = document.getElementById("movingSquare");
    const maxX = window.innerWidth - 100;
    -100; // is the size of the square
    const maxY = window.innerHeight - 100; // is the size of the square
    // Generates a whole number between 0-max window width
    square.style.left = Math.floor(Math.random() * maxX) + "px";
    // Generates a whole number between 0-max window height
    square.style.top = Math.floor(Math.random() * maxY) + "px";
  });
