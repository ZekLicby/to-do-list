import React, { useState } from "react";
import "./AddTask.css";
import Button from "./Button";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData("");
  };

  const handleSubmitIn = (e) => {
    if(e.key === 'Enter'){
      handleAddTaskClick()
    }
  }

  return (
    <div className="add-task-container">
      <input
        onChange={(e) => handleInputChange(e)}
        onKeyPress={handleSubmitIn}
        value={inputData}
        type="text"
        className="add-task-input"
      />

      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
