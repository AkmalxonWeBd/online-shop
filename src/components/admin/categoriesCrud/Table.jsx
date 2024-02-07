import React from 'react';
import UpdateCategories from './UpdateCategorie';
import DeleteCategories from './DeleteCategorie';
import Mock from '../sidebar/mock';

<<<<<<< HEAD
function Table({ categories, onSearch, onDelete, onUpdate }) {
=======

export default function CategoriesCrud({ categories, onSearch, onDelete, onUpdate }) {
>>>>>>> e9b88470c83798b5b42cf955dfdc526b26d0dbd5
  return (
    <div>
      <Mock />
      <div>
        <div>
          <input type="text" placeholder="Izlash..." onChange={(e) => onSearch(e.target.value)} />
          <table>
            <thead>
              <tr>
                <th>Category Image</th>
                <th>Category Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories?.map(category => (
                <tr key={category.id}>
                  <td><img src={category.imageUrl} alt={category.name} /></td>
                  <td>{category.name}</td>
                  <td>
                    <UpdateCategories categoryId={category.id} onUpdate={onUpdate} />
                    <DeleteCategories categoryId={category.id} onDelete={onDelete} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default Table;
=======



>>>>>>> e9b88470c83798b5b42cf955dfdc526b26d0dbd5
