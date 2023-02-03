import Cards from "./Cards";

const TopSale = ({products}) => {
  console.log(products);
  return (
    <>
      <div className="bg-top-sale-bg bg-no-repeat h-auto bg-[#000d21]">
        <div className="max-w-[1340px] mx-auto  py-7">
          <div className="text-white text-[28px]">
            <h2 className="text-inherit"># Sản phẩm bán chạy nhất</h2>
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            {
              products.map(i =>(
                <>
                <Cards product={i} key={i.prod_id}/>
                </>
              ))
            }
          </div>
          <div className="text-center text-[#00df9a] mb-4">
            <p className="cursor-pointer">Xem Thêm</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default TopSale;
