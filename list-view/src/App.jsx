import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container my-5 w-50">
      <div className="card p-4 text-center shadow-sm" style={{ backgroundColor: '#a3d16a' }}>
        <h2 className="mb-4">The "React Way" to Render a List</h2>
        <ul className="list-unstyled">
          {[
            "Use Array.map",
            "Not a for loop",
            "Give each item a unique key",
            "Avoid using array index as the key",
          ].map((text, index) => (
            <li key={index} className="my-2">
              <span className="check-icon">✔</span> {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;