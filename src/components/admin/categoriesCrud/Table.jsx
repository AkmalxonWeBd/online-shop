// import React from 'react'
// import { useGetCategoryQuery } from '../../../redux/slice/client/category';

// const TableCom = () => {
//     const { data, isLoading, refetch } = useGetCategoryQuery();
//     const [search, setSearch] = useState('');
//     const filteredData = data ? data.filter(item => item.title.toLowerCase().includes(search.toLowerCase())) : [];
    
//   return (
//     <div>TableCom</div>
//   )
// }

// export default TableCom
import React from 'react';
import DeleteCategories from './DeleteCategories';
import UpdateCategories from './UpdateCategories';

function Table({ categories, onSearch, onDelete, onUpdate }) {
  return (
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
          {categories.map(category => (
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
  );
}

export default Table;


