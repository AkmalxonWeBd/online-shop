import React from 'react';

export function DeleteCategories({ categoryId, onDelete }) {
  return (
    <button onClick={() => onDelete(categoryId)}>O'chirish</button>
  );
}


