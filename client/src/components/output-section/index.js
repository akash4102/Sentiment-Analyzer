import React from 'react';
import './index.css';

const OutputSection = ({ analysisResult }) => {
  const emojis = {
    Positive: '😄',
    Negative: '😔',
    Neutral: '😐'
  };

  return (
    <div className="output-section">
      <div className="output-sentiment">{analysisResult.sentiment}</div>
      <div className="output-emoji">{emojis[analysisResult.sentiment]}</div>
      <div className="output-confidence">Confidence: {(analysisResult.confidence * 100).toFixed(2)}%</div>
    </div>
  );
};

export default OutputSection;
