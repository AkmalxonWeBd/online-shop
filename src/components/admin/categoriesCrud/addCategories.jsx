import React, { useState } from 'react';

function AddCategories({ onAdd }) {
  const [categoryName, setCategoryName] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(categoryName, image);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Category Name:
        <input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
      </label>
      <label>
        Image:
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      </label>
      <button type="submit">Saqlash</button>
    </form>
  );
}

export default AddCategories;
