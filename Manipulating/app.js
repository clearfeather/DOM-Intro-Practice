// // ********* DOM PRACTICE AND NOTES **********


// // Selecting, adding, updating Elements // //

// // older methods for selection
// // getElementById
// // getElementsByTagName
// // getElementsByClassName

// // Add a class to something (latest method)
// const h2 = document.querySelector('h2'); // Select H2 element (and assign to a variable)
// const h2 = document.querySelectorAll('h2'); // Select all H2 elements (and assign to a variable)

// // Select ALL elements (a) and assign to a variable
// const allLinks = document.querySelectorAll('a');

// // Update element content
// document.querySelector('h1').innerHTML = '<b>Greatest Title of All!!!!</b>'

// // Update all links content
// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

// // Update all links style
// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'grey';
//     link.style.textDecorationStyle = 'underline'
// }

// // Update all images
// const allImages = document.querySelectorAll('img');

// Set img src to all images update
// for (let img of allImages) {
//     img.src = 'https://source.unsplash.com/random'
// }

// // Selecting by class

// Get class, set a class using setAttribute (limited/old method)
h2.getAttribute('class');
h2.setAttribute('class', 'purple');

// Add, update, remote, etc. using classList
h2.classList.add('purple'); //Add a class of 
h2.classList.add('border');
h2.classList.remove('purple');

//Check to see if it contains a class
h2.classList.contains('purple');

// Toggle class on/off
h2.classList.toggle('purple');

// Remove Elements

// Old method (IE compatible)
h2.parentElement.removeChild(h2);

// New method
h2.remove();