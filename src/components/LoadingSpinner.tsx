import React from 'react';
import "./loadingSpinner.css";

const LoadingSpinner = () => {
  const items = [];
  for (let i = 0; i <= 20; i++) {
    items.push(<span style={{'--i': i}}></span>);
  }
  return (
    <div className="loading-spinner">
      {items}
    </div>
  );
};

export default LoadingSpinner;
