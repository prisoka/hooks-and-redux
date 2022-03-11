import React from 'react';

const Steps = ({ recipe }) => {
  return (
    <div>
      <h3>Steps:</h3>
      <ol>
        {recipe.steps.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default Steps;
