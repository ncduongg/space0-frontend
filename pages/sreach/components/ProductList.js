import Cards from "../../../components/Cards";

const ProductList = () => {
  return (
    <>
      <div className="w-full text-white product-list">
        <div className="max-w-[1340px] mx-auto flex-wrap flex justify-center gap-4">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
        <div className="text-center text-[#00df9a] mb-4">
          <p className="cursor-pointer">Xem Thêm</p>
        </div>
      </div>
    </>
  );
};
export default ProductList;
