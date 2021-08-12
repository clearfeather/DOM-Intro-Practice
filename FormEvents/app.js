// Select the form, assign to var
const tweetForm = document.querySelector('#tweetForm');
// Select the ul for the tweets to be added
const tweetContainer = document.querySelector('#tweets');

// Start the event listener with the e parameter for the preventDefault and wait for submit event
tweetForm.addEventListener('submit', function(e) {

    // do not go to a new page if not needed, stay on same page
    e.preventDefault();

    // Select each form input by way of using elements
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;

    //Pass inputs into addTween function
    addTweet(usernameInput.value, tweetInput.value);

    //Set both values to empty strings once submitted
    usernameInput.value = '';
    tweetInput.value = '';
    
})

// Separate function to add a tweet
const addTweet = (username, tweet) => {

    // Create li and bold tags
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');

    // Add username text inside of the bold tag
    bTag.append(username);
    // Add bold username inside li
    newTweet.append(bTag);
    // Add the tweet text to the completed li
    newTweet.append(` - ${tweet}`);
    
    // Add the completed tweet to the container
    tweetContainer.append(newTweet);
    
}