import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

const InputForm = ({ onSentimentAnalysis }) => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if(text.length===0){
      alert("please write something in the textarea");
      return;
    }
    axios.post('http://localhost:5000/api/analyze', { text })
      .then(response => {
        onSentimentAnalysis(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <textarea
        className="input-text"
        placeholder="Enter text here..."
        value={text}
        onChange={event => setText(event.target.value)}
      />
      <button className="submit-button" type="submit">Analyze</button>
    </form>
  );
};

export default InputForm;
