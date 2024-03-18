// Course.jsx
import "./index.css"
import React from 'react';

function Course({ title, description, difficulty, usefulness }) {
  return (
    <li className="course">
      <h3>{title}</h3>
      <p><u>Description:</u></p>
      <p> {description}</p>
      <p><u>Difficulty: </u></p>
      <p>{difficulty}</p>
      <p><u>How useful?</u></p> 
      <p>{usefulness}</p>
    </li>
  );
}

export default Course;
