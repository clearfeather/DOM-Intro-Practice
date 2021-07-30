const allLinks = document.querySelectorAll('a');

document.querySelector('h1').innerHTML = '<b>Greatest Title of All!!!!</b>'



// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

///////////////////////////////////////////////////////////////

// older methods for selection
// getElementById
// getElementsByTagName
// getElementsByClassName

const allImages = document.querySelectorAll('img');

for (let img of allImages) {
    img.src = 'https://source.unsplash.com/random'
}