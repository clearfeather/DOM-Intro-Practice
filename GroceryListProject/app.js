// Select the form & assign to var form
const form = document.querySelector('form');

// Select the list ul and assign to var
const groceryContainer = document.querySelector('#list');

// Start event listener, stay on same page with preventDefault
form.addEventListener('submit', function(e) {

    // do not go to a new page if not needed, stay on same page
    e.preventDefault();

    // Select each form input by way of using elements
    const itemInput = form.elements.product;
    const numberInput = form.elements.qty;

    //Pass inputs into addTween function
    addItem(itemInput.value, numberInput.value);

    //Set both values to empty strings once submitted
    itemInput.value = '';
    numberInput.value = '';

});

// Separate function to add a grocery item/qty
const addItem = (product, qty) => {

    // Create li
    const newItem = document.createElement('li');

    // Append both entries into li
    newItem.append(product, qty);
    // Append li into ul container

    // Append the entry (li) into the ul container
    groceryContainer.append(newItem);

};