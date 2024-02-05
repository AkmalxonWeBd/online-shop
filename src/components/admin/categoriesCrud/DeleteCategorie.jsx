import React from 'react';

function DeleteCategories({ categoryId, onDelete }) {
  return (
    <button onClick={() => onDelete(categoryId)}>O'chirish</button>
  );
}

export default DeleteCategories;
