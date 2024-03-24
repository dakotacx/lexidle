const wordDisplay = document.getElementById('wordDisplay');
const beautySlider = document.getElementById('beautySlider');
const submitRating = document.getElementById('submitRating');

// Example list of words
let words = [
  'beautiful', 'serendipity', 'lullaby', 'dissonance', 'cacophony',
  'ethereal', 'sonorous', 'tranquil', 'euphoria', 'symphony',
  'harmony', 'zenith', 'eclipse', 'silhouette', 'whisper',
  'gossamer', 'luminous', 'vivid', 'phantasmagoric', 'svelte',
  'ephemeral', 'cascade', 'crystalline', 'mellifluous', 'labyrinthine',
  'quintessence', 'opulent', 'scintillating', 'resplendent', 'sonnet',
  'velvet', 'enigmatic', 'arcane', 'sanguine', 'twilight',
  'vortex', 'ambrosial', 'quixotic', 'mystique', 'glimmer',
  'nocturne', 'venerable', 'renaissance', 'tranquility', 'nebula',
  'halcyon', 'tapestry', 'bohemian', 'rhapsody', 'spectrum',
  'zen', 'aurora', 'nirvana', 'chiaroscuro', 'elusive',
  'pinnacle', 'serene', 'oracle', 'oasis', 'mirage',
  'palindrome', 'sumptuous', 'tintinnabulation', 'anachronism', 'reverie',
  'cascade', 'ameliorate', 'aesthetic', 'allegory', 'amethyst',
  'anomaly', 'antique', 'aphelion', 'apotheosis', 'arabesque',
  'arcadia', 'ardor', 'arpeggio', 'assemblage', 'auroral',
  'azure', 'beguile', 'benevolent', 'bioluminescent', 'blithe',
  'bucolic', 'byzantine', 'capricious', 'cerulean', 'chimera',
  'clandestine', 'cognizant', 'confluence', 'contiguous', 'coruscate',
  'crescent', 'cryogenic', 'cryptic', 'crystal', 'culminate',
  'cynosure', 'dalliance', 'decipher', 'deliquesce', 'demure',
  'denizen', 'desuetude', 'diaphanous', 'dichotomy', 'didactic',
  'dulcet', 'ebullient', 'effigy', 'effulgent', 'effusion',
  'egress', 'elation', 'elegance', 'elixir', 'eloquence',
  'emblazon', 'emerald', 'empyrean', 'enamored', 'enclave',
  'endearing', 'enigma', 'ephemeron', 'epitome', 'equilibrium',
  'ethereal', 'evanesce', 'evocative', 'exuberance', 'facetious',
  'fauna', 'felicity', 'feral', 'fervent', 'fibonacci',
  'filament', 'filigree', 'flora', 'flourish', 'forbearance',
  'fresco', 'fugacious', 'gambol', 'garnet', 'gossamer',
  'halcyon', 'hearth', 'heirloom', 'helicoid', 'heritage',
  'heterochromatic', 'horizon', 'idyllic', 'illuminate', 'imbroglio',
  'immaculate', 'imperceptible', 'incandescent', 'incantation', 'inception',
  'indelible', 'ineffable', 'inexorable', 'ingenuity', 'insouciance',
  'interlude', 'intertwine', 'intrinsic', 'intuitive', 'iridescent',
  'juxtapose', 'kaleidoscope', 'lagoon', 'languid', 'lexicon',
  'liberty', 'light', 'lilt', 'liminal', 'lissome',
  'litany', 'loquacious', 'lucid', 'lucent', 'luminary',
  'luminosity', 'lunar', 'luxuriant', 'magnanimous', 'majestic',
  'mantra', 'marvel', 'mauve', 'meander', 'memento',
  'mercurial', 'mesmerize', 'metamorphosis', 'milieu', 'miracle',
  'mirth', 'mystical', 'nadir', 'nascent', 'nebulous',
  'nectar', 'nocturnal', 'numinous', 'nexus', 'nirvana',
  'oblivion', 'occult', 'opal', 'oracular', 'ornamental',
  'overture', 'pandemonium', 'panoply', 'paradigm', 'paragon',
  'pastoral', 'penumbra', 'perennial', 'periphery', 'phantasm',
  'phoenix', 'picturesque', 'piquant', 'placid', 'plume',
  'prismatic', 'propinquity', 'provenance', 'pulchritude', 'pyrrhic',
  'quaint', 'quiescent', 'radiance', 'raiment', 'redolent',
  'refulgent', 'resonant', 'reticent', 'revelation', 'rhapsodic',
  'ripple', 'sacrosanct', 'sanguine', 'sapphire', 'satiate',
  'scintilla', 'sempiternal', 'seraphic', 'shimmer', 'silhouette',
  'siren', 'solace', 'solar', 'soliloquy', 'somnolent',
  'sonder', 'sophrosyne', 'sorcery', 'souvenir', 'spectral',
  'spectrum', 'spellbound', 'spherical', 'spirit', 'stargazer',
  'stellar', 'sublime', 'succulent', 'surreal', 'susurrus',
  'symbiosis', 'symmetry', 'talisman', 'tapestry', 'tempest',
  'temporal', 'terrestrial', 'threnody', 'tintinnabulum', 'topography',
  'tranquil', 'transcend', 'translucent', 'traverse', 'tremulous',
  'trepidation', 'triptych', 'tryst', 'twilight', 'ubiquitous',
  'undulate', 'unearthly', 'unicorn', 'unison', 'utopia',
  'vagary', 'valiant', 'vanilla', 'vapor', 'variegated',
  'verdant', 'verve', 'vestige', 'vibrant', 'vigilant',
  'vignette', 'vintage', 'virtuoso', 'vista', 'vivacious',
  'volition', 'wanderlust', 'whimsical', 'whirligig', 'whisper',
  'wildebeest', 'willow', 'wistful', 'wonder', 'wraith',
  'xanadu', 'xenodochial', 'yarn', 'yearn', 'yesteryear',
  'yield', 'yore', 'young', 'yugen', 'zephyr',
  'zenith', 'zest', 'zigzag', 'zinnia', 'zodiac'
];

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
    document.getElementById('sliderValue').style.display = ''; // Show the slider value if it was previously hidden

  } else {
    wordDisplay.innerText = "No more words to rate!";
    submitRating.style.display = 'none'; // Hide the button
    beautySlider.style.display = 'none'; // Hide the slider
    document.getElementById('sliderValue').style.display = 'none'; // Hide the slider value
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
    // If the rating was successfully received, store the rating locally
    storeRating(word, numericRating);
    // Remove the word from the array
    words = words.filter(w => w !== word);
    // Prepare for the next word or notify the user that the list is finished
    setRandomWord();
    // Update the average ratings display for ONLY the rated words
    displayAverageRatings(userRatings.map(rating => rating.word));
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
function displayAverageRatings(ratedWords) {
  fetch('https://wordbeautybackend-f025b38f8d53.herokuapp.com/average-ratings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ words: ratedWords }), // Send the array of rated words
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  })
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
updateSliderValue(document.getElementById('beautySlider').value);