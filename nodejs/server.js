const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Store user ratings, initially empty
let ratings = {};

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Endpoint to receive ratings
app.post('/rate', (req, res) => {
  const { word, rating } = req.body;
  if (word && rating !== undefined) {
    if (!ratings[word]) {
      ratings[word] = []; // Initialize an array for the word if it doesn't exist
    }
    ratings[word].push(rating); // Push the new rating to the array for the word
    res.status(200).send({ message: 'Rating received' });
  } else {
    res.status(400).send({ message: 'Invalid rating data received' });
  }
});

// Endpoint to get all ratings
app.get('/ratings', (req, res) => {
  res.status(200).json(ratings);
});

// Endpoint to get average ratings
app.get('/average-ratings', (req, res) => {
  let averageRatings = {};
  for (const word in ratings) {
    const ratingArray = ratings[word];
    const sum = ratingArray.reduce((acc, curr) => acc + curr, 0);
    const average = sum / ratingArray.length;
    averageRatings[word] = average;
  }
  res.status(200).json(averageRatings);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});