import React, { useState } from 'react';

function UpdateCategories({ categoryId, onUpdate }) {
  const [newCategoryName, setNewCategoryName] = useState('');

  const handleUpdate = () => {
    onUpdate(categoryId, newCategoryName);
  };

  return (
    <div>
      <input type="text" value={newCategoryName} onChange={(e) => setNewCategoryName(e.target.value)} />
      <button onClick={handleUpdate}>Yangilash</button>
    </div>
  );
}

export default UpdateCategories;
