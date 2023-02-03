import { useState } from "react";

const Filter = ({keysreach,products,onFilterChange}) => {
  const [filterType, setFilterType] = useState('PRICE_ASC');
  const [priceSort, setPriceSort] = useState('ASC');
  const [nameSort, setNameSort] = useState('ASC');

  const handleFilterType = (e) => {
    setFilterType(e.target.value);
  };

  const handleSortPrice = (e) => {
    setPriceSort(e.target.value);
  };

  const handleSortName = (e) => {
    setNameSort(e.target.value);
  };
  const filteredProducts = products.sort((a, b) => {
    switch (filterType) {
      case 'PRICE_ASC':
        return priceSort === 'ASC'
          ? a.prod_amount - b.prod_amount
          : b.prod_amount - a.prod_amount;
      case 'NAME_ASC':
        return nameSort === 'ASC'
          ? a.prod_name.localeCompare(b.prod_name)
          : b.prod_name.localeCompare(a.prod_name) * -1;
      default:
        return 0;
    }
  });

  return (
    <>
      <div className="w-full text-white border-b-2 border-b-[#00df9a]">
        <div className="max-w-[1340px] mx-auto flex py-2">
          <div className="flex">
            <p className="py-2.5 pr-2">Giá:</p>
            <select
              id="priceSort" onChange={handleSortPrice}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 mr-3"
            >
              <option value="US" defaultValue>
                Thấp - Cao
              </option>
              <option value="PRICE_ASC">Cao - Thấp</option>
              <option value="NAME_ASC">Thấp - Cao</option>
              <option value="DE">1.000.000VNĐ - 3.000.000VNĐ</option>
            </select>
          </div>
          <div className="flex">
            <p className="py-2.5 pr-2">Theo thứ tự:</p>
            <select
              id="nameSort" onChange={handleSortName}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 mr-3"
            >
              <option value="US" defaultValue>
                Mặc định
              </option>
              <option value="ASC">Tên từ A đến Z</option>
              <option value="DESC">Tên từ Z đến A</option>
            </select>
          </div>
          <div className="flex">
            <p className="py-2.5 pr-2">Giá:</p>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 mr-3"
            >
              <option value="US" defaultValue>
                Thấp - Cao
              </option>
              <option value="CA">Cao - Thấp</option>
              <option value="FR">0VNĐ- 1.000.000VNĐ</option>
              <option value="DE">1.000.000VNĐ - 3.000.000VNĐ</option>
            </select>
          </div>
          <button className='bg-[#00df9a] w-[150px] mr-4 rounded-md text-black'>Áp dụng </button>
          <div className="py-3 text-[22px]">
            <p>Từ Khóa: <span className="italic text-[#DC3545] underline">{keysreach}</span></p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Filter;
