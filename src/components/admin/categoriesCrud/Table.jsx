import React from 'react'
import { useGetCategoryQuery } from '../../../redux/slice/client/category';

const TableCom = () => {
    const { data, isLoading, refetch } = useGetCategoryQuery();
    const [search, setSearch] = useState('');
    const filteredData = data ? data.filter(item => item.title.toLowerCase().includes(search.toLowerCase())) : [];
    
  return (
    <div>TableCom</div>
  )
}

export default TableCom


