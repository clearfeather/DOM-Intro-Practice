// Select input and set to var called input
const input = document.querySelector('input');
// Select h1 and set to var h1
const h1 = document.querySelector('h1');

input.addEventListener('input', function () {
    h1.innerText = input.value;
});

