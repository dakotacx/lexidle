const wordDisplay = document.getElementById('wordDisplay');
const beautySlider = document.getElementById('beautySlider');
const submitRating = document.getElementById('submitRating');

// Example list of words
let words = ['beautiful', 'serendipity', 'lullaby', 'dissonance', 'cacophony'];

// Array to store user responses
const userRatings = [];

// Function to get a random word
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Function to store the rating
function storeRating(word, rating) {
  userRatings.push({ word: word, rating: rating });
}

function setRandomWord() {
  if (words.length > 0) {
    wordDisplay.innerText = getRandomWord();
    submitRating.style.display = ''; // Show the button if it was previously hidden
    beautySlider.style.display = ''; // Show the slider if it was previously hidden
  } else {
    wordDisplay.innerText = "No more words to rate!";
    submitRating.style.display = 'none'; // Hide the button
    beautySlider.style.display = 'none'; // Hide the slider
    sliderValue.style.display = 'none'; // Hide the slider value
  }
}

// Function to send the rating to the server
function sendRatingToServer(word, rating) {
  // Convert rating to a number to ensure proper data type is sent
  const numericRating = Number(rating);

  fetch('https://wordbeautybackend-f025b38f8d53.herokuapp.com/rate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ word: word, rating: numericRating }),
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  })
  .then(data => {
    console.log(data);
    // If the rating was successfully received, remove the word from the array
    words = words.filter(w => w !== word);
    // Prepare for the next word or notify the user that the list is finished
    setRandomWord();
    // Update the average ratings display
    displayAverageRatings();
  })
  .catch((error) => {
    console.error('Error:', error);
  })
  .finally(() => {
    // Re-enable the button after processing is complete or if an error occurs
    submitRating.disabled = false;
  });
}

// Function to fetch and display average ratings
function displayAverageRatings() {
  fetch('https://wordbeautybackend-f025b38f8d53.herokuapp.com/average-ratings')
    .then(response => response.json())
    .then(data => {
      console.log('Average Ratings:', data);
      // Assuming you have a <div> with id="averageRatingsDisplay" to display the averages
      const averageRatingsDisplay = document.getElementById('averageRatingsDisplay');
      averageRatingsDisplay.innerHTML = ''; // Clear previous content
      for (const word in data) {
        const average = data[word];
        averageRatingsDisplay.innerHTML += `<div class="average-rating-item">${word}: ${average.toFixed(2)}</div>`;
      }
    })
    .catch(error => {
      console.error('Error fetching average ratings:', error);
    });
}

// Function to update the slider value display
function updateSliderValue(value) {
  document.getElementById('sliderValue').textContent = value;
}


// Event listener for the submit button
submitRating.addEventListener('click', function() {
  this.disabled = true; // Disable the button to prevent multiple submissions
  const currentWord = wordDisplay.innerText;
  const currentRating = beautySlider.value;

  // Send the user's rating to the server
  sendRatingToServer(currentWord, currentRating);
  
  // Alert or log the current state of the userRatings array for testing
  console.log(userRatings);
});

// Initialize game with a random word
setRandomWord();
displayAverageRatings();
updateSliderValue(document.getElementById('beautySlider').value);