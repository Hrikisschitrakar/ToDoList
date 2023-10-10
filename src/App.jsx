import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputList, setInputList] = useState('');
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList('');
  };

  const deleteToDo = (index) => {
    setItems((oldItems) => {
      // Create a new array without the item to be deleted
      const updatedItems = oldItems.filter((_, i) => i !== index);
      return updatedItems;
    });
  };

  return (
    <div className="main">
      <div className="center">
        <br />
        <h1> To Do List </h1>
        <br />
        <input
          type="text"
          placeholder="Add an item"
          value={inputList}
          onChange={itemEvent}
        />
        <button onClick={listOfItems}> Add </button>

        <ol>
          {items.map((itemValue, index) => (
            <li key={index}>
              {itemValue}
              <button
                className="btn btn-danger"
                onClick={() => deleteToDo(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
