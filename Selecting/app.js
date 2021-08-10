// // Selecting using JS

// OnClick to in-line function
document.querySelector('h1').onclick = function () { alert('you clicked the H1'); }


// Assign btn to id v2
const btn = document.querySelector('#v2');

// Separate function 
 function clicked() {
    console.log("You clicked me using app.js");
}

// Run function on click
btn.onclick = clicked;


// More events (hoisted)
btn.onmouseenter = scream;
btn.onmouseleave = bye;

function scream() {
    console.log('ahhhhhhh');
}
function bye() {
    console.log('ok bye');
}


// addEventListener sample - good for multiple callbacks, more customizable

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function() {
    alert('Clicked V3 button')
})