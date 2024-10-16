import React, { useState } from 'react';
import '../assets/GroceryApp.css';  // Import custom CSS

function GroceryApp() {
  const [items, setItems] = useState(['Eggs', 'Milk', 'Cheese']);
  const [newItem, setNewItem] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrEdit = () => {
    if (newItem.trim() === '') return;

    if (editIndex !== null) {
      const updatedItems = items.map((item, index) =>
        index === editIndex ? newItem : item
      );
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      if (!items.includes(newItem)) {
        setItems([...items, newItem]);
      } else {
        alert('Item already exists');
      }
    }
    setNewItem('');
  };

  const handleDelete = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  };

  const handleDeleteAll = () => {
    setItems([]);
  };

  const handleEdit = (index) => {
    setNewItem(items[index]);
    setEditIndex(index);
  };

  return (
    <div className="grocery-container">
      <h2 className="text-center">Grocery Shopping</h2>
      <ul className="grocery-list">
        {items.map((item, index) => (
          <li key={index} className="grocery-item">
            {item}
            <div>
              <button className="btn btn-danger" onClick={() => handleDelete(index)}>
                <i className="bi bi-trash"></i>
              </button>
              <button className="btn btn-secondary ms-2" onClick={() => handleEdit(index)}>
                <i className="bi bi-pencil"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="input-group mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add or edit an item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <span>&nbsp;</span>
        <button className="btn btn-primary" onClick={handleAddOrEdit}>
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>
      <button className="delete btn btn-danger mt-3" onClick={handleDeleteAll}>Delete List</button>
    </div>
  );
}

export default GroceryApp;
