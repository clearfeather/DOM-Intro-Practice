// Select container for content
const container = document.querySelector('#container');

// Set base URL for images available
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

// Loop through all available images
for (i = 1; i <= 898; i++) {

    // Add number to each pokemon :::

    // Create div element
    const pokemon = document.createElement('div');
    // Add the class .pokemon to the pokemon div
    pokemon.classList.add('pokemon');
    // Create span element
    const label = document.createElement('span');
    // Add the number
    label.innerText = `#${i}`;

    // Display every pokemon :::

    // Create img element
    const newImg = document.createElement('img');
    // Set image source to the base URL above, with i as the looped (increasing number), and png added to display the png image
    newImg.src = `${baseURL}${i}.png`;
    // Insert an img element
    pokemon.appendChild(newImg);
    // Insert the label span
    pokemon.appendChild(label);
    // Insert the completed pokemon div ino the container
    container.appendChild(pokemon);
}