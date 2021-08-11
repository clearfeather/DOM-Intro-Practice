// Select button and H2
const button = document.querySelector('button');
const h2 = document.querySelector('h2');

// When button clicked
button.addEventListener('click', function () {
    // Assign new vairable to function
    const newColor = makeRandColor();
    // Select document body (background color), assign to newColor var
    document.body.style.backgroundColor = newColor;
    // Assign H2 text to newColor var (to show variables)
    h2.innerText = newColor;
    // If the random color is too dark, change h2 text to white
    if (totalColor < 250) { h2.style.color = 'white';
    } else { h2.style.color = 'black'};
})

// Random color function
const makeRandColor = () => {
    // Each R G B variables set to random number between 0 and 255
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // Assign R G B for outside access from this function
    this.r = r; this.g = g; this.b = b;
    // New variable for the total sum of R G B, assigned for outside access
    const totalColor = r + g + b; this.totalColor = totalColor;
    // Return the 3 random numbers for R G B
    return `rgb(${r}, ${g}, ${b})`;
}

