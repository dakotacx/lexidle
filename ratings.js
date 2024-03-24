document.addEventListener('DOMContentLoaded', function() {
  fetchRatings();
});

function fetchRatings() {
  fetch('https://wordbeautybackend-f025b38f8d53.herokuapp.com/ratings')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(ratings => {
      displayRatings(ratings);
    })
    .catch(error => {
      console.error('Error fetching ratings:', error);
    });
}

function displayRatings(ratings) {
  const ratingsDisplay = document.getElementById('ratingsDisplay');
  ratingsDisplay.innerHTML = ''; // Clear out any existing content

  ratings.forEach(rating => {
    const ratingEl = document.createElement('div');
    ratingEl.classList.add('rating-item');
    ratingEl.innerHTML = `
      <span class="word">${rating.word}</span>
      <span class="rating">${rating.rating.toFixed(2)}</span>
    `;
    ratingsDisplay.appendChild(ratingEl);
  });
}
