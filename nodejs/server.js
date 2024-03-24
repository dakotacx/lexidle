const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

// Store user ratings, initially empty
let ratings = {};

app.use(bodyParser.json());

const DATA_FILE = './ratings.json';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Endpoint to receive ratings
app.post('/rate', (req, res) => {
  const { word, rating } = req.body;
  // Read the current data from the file
  fs.readFile(DATA_FILE, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading data file', error: err });
    }
    
    // Parse data to JSON
    let ratings = JSON.parse(data);
    
    // Add the new rating
    ratings.push({ word, rating });
    
    // Write the updated ratings back to the file
    fs.writeFile(DATA_FILE, JSON.stringify(ratings, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error writing data file', error: err });
      }
      res.status(200).json({ message: 'Rating saved' });
    });
  });
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


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});