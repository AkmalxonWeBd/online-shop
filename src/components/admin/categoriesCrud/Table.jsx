import React from 'react';
import UpdateCategories from './UpdateCategorie';
import DeleteCategories from './DeleteCategorie';
import Mock from '../sidebar/mock';


export default function CategoriesCrud({ categories, onSearch, onDelete, onUpdate }) {
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




