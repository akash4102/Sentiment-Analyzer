const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const tf = require('@tensorflow/tfjs');
const use = require('@tensorflow-models/universal-sentence-encoder');

const app = express();
const port = 5000;

// Set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Load the Universal Sentence Encoder model
let model;
use.load().then(m => {
  model = m;
});

// Define a route for handling text input
app.post('/api/analyze', (req, res) => {
  const text = req.body.text;

  // Perform sentiment analysis on the text using the loaded model
  model.embed(text).then(embedding => {
    const prediction = tf.sigmoid(embedding).dataSync()[0];
    const sentiment = prediction > 0.5 ? 'Positive' : (prediction < 0.5 ? 'Negative' : 'Neutral');
    const confidence = prediction > 0.5 ? prediction : 1 - prediction;

    // Send the analysis results back to the client
    res.json({ sentiment, confidence });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
