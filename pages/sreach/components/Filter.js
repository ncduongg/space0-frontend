const Filter = ({keysreach}) => {
  return (
    <>
      <div className="w-full text-white border-b-2 border-b-[#00df9a]">
        <div className="max-w-[1340px] mx-auto flex py-2">
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
          <div className="flex">
            <p className="py-2.5 pr-2">Theo thứ tự:</p>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 mr-3"
            >
              <option value="US" defaultValue>
                Mặc định
              </option>
              <option value="CA">Bán chạy nhất</option>
              <option value="FR">Tên từ A đến Z</option>
              <option value="DE">Tên từ Z đến A</option>
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
