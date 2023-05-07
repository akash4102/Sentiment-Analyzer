import React, { useState } from 'react';
import InputForm from './components/input-form';
import OutputSection from './components/output-section';
import './app.css';

const App = () => {
    const [analysisResult, setAnalysisResult] = useState(null);
  
    const handleSentimentAnalysis = (result) => {
        setAnalysisResult(result);
    };
  
    return (
      <div className="container">
        <h1 className="title">Sentiment Analysis</h1>
        <InputForm onSentimentAnalysis={handleSentimentAnalysis} />
        {analysisResult && <OutputSection analysisResult={analysisResult} />}
      </div>
    );
  }
  
  export default App;
  