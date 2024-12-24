import React from 'react';

function Button({ className, title }) {
  return (
    <button className={`px-4 py-2 rounded ${className}`}>
      {title}
    </button>
  );
}

export default Button;
