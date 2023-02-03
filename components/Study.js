import Cards from "./Cards";

const Study = ({products}) => {
  return (
    <div className="bg-white py-6 ">
      <div className="max-w-[1340px] mx-auto border-b border-spacing-7">
        <div className="">
          <h2 className="font-bold text-xl text-[#00df9a]">Học tập</h2>
          <p className="font-light">
            Những ứng dụng học tập, khóa học Online chất lượng đang chờ bạn
          </p>
        </div>
        <div className="flex flex-row justify-between flex-wrap">
        {
              products.map(i =>(
                <>
                <Cards colortext="text-black" product={i} key={i.prod_id}/>
                </>
              ))
            }
        </div>
        <div className="text-center text-[#00df9a] mb-4">
            <p className="cursor-pointer">Xem Thêm</p>
        </div>
      </div>
    </div>
  );
};
export default Study;
