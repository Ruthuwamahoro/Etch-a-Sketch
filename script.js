// Function to create the initial grid
function createGrid(size) {
    const container = document.getElementById('container');
    container.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    // Add hover effect
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', changeColor);
    });
}

// Function to reset the grid and prompt for a new size
function resetGrid() {
    const size = prompt('Enter the number of squares per side (up to 100):');
    const gridSize = parseInt(size);

    if (gridSize && gridSize > 0 && gridSize <= 100) {
        createGrid(gridSize);
    } else {
        alert('Invalid input. Please enter a number between 1 and 100.');
    }
}

// Function to change the color of the hovered square
function changeColor(event) {
    const square = event.target;
    const currentColor = square.style.backgroundColor;

    if (!currentColor) {
        // Initial interaction, set random RGB color
        square.style.backgroundColor = getRandomRGBColor();
    } else {
        // Progressive darkening effect
        const currentOpacity = parseFloat(square.style.opacity) || 1.0;
        if (currentOpacity > 0) {
            square.style.opacity = (currentOpacity - 0.1).toFixed(1);
        }
    }
}

// Function to generate random RGB color
function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

// Initialize the grid with 16x16 squares
createGrid(16);