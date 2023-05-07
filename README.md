Frontend
This is the frontend component of the sentiment analysis web application, which allows users to input text and receive sentiment analysis results. The frontend was built using React.js.

Getting Started
Clone this repository to your local machine.

Navigate to the client directory.

cd client

Install the necessary dependencies by running the following command:

npm install

Start the development server by running the following command:

npm start

Open http://localhost:3000 in your web browser to access the application.

Usage
Enter text in the input form and click the "Analyze" button to receive sentiment analysis results.

The sentiment analysis results will be displayed on the page along with a confidence score and emojis to indicate the sentiment.

Dependencies
React.js
Axios



Backend
This is the backend component of the sentiment analysis web application, which handles user input and communicates with the AI model. The backend was built using Node.js and Express.js.

Getting Started
Clone this repository to your local machine.

Navigate to the server directory.

cd server

Install the necessary dependencies by running the following command:

npm install

Start the server by running the following command:

npm start || node server.js

now server run on  http://localhost:5000 in your local machine

Usage
Send a POST request to the /api/analyze endpoint with the text to be analyzed in the request body.

The server will respond with a JSON object containing the sentiment category and confidence score.

Dependencies
Node.js
Express.js
Body-parser
TensorFlow.js


Note
The sentiment analysis model used in this application is not perfect and may produce inaccurate results. Please keep this in mind when using the application.