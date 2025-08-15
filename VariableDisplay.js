import React from 'react';

function VariableDisplay() {
  // Create your variables here
  let stringVar = "Welcome to React";
  let numberVar = 42;
  let booleanVar = true;
  let arrayVar = ["React", "JSX", "Variables"];
  let objectVar = { name: "John", age: 30, role: "Developer" };

  // Add your conditional statement here
  if (Math.random() > 0.5) {
    stringVar = "Welcome to advanced React";
  }

  return (
    <div>
      <h1>{stringVar}</h1>
      <p>Number: {numberVar}</p>
      <p>Boolean: {booleanVar ? "True" : "False"}</p>
      <p>Array: {arrayVar.join(", ")}</p>
      <p>Object Name: {objectVar.name}</p>
      <p>Object Age: {objectVar.age}</p>
      <p>Object Role: {objectVar.role}</p>
    </div>
  );
}

export default VariableDisplay;