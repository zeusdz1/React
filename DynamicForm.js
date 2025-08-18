import React, {useState} from 'react';

const DynamicForm = () => {
    console.log("DynamicForm component rendered");

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        console.log("Input changed:", event.target.value);
        setInputValue(event.target.value);
    };

    const handleReset = () => {
        console.log("Reset button clicked");
        setInputValue("");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px"}}>
            <h1>Dynamic Form</h1>
            <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type something..."
            style={{ padding: "5px", marginRight: "10px"}}
            />

            <button onClick={handleReset}>Reset</button>

            <div style={{ marginTop: "20px"}}>
            <h2>Current Input:</h2>
            <p>{inputValue}</p>
            </div>
            </div>
    );
};

export default DynamicForm;