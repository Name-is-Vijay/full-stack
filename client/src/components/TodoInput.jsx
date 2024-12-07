import React from 'react'

export default function TodoInput() {
  return (
    <header className="container mt-4">
      <div className="d-flex">
        <input
          id="todo-input-bar"
          className="form-control me-2"
          placeholder="Enter items here"
        />
        <button
          id="todo-item-add-button"
          className="btn btn-primary"
        >
          Add Item
        </button>
      </div>
    </header>
  );
}
