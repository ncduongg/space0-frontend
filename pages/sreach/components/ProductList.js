import Notiflix from "notiflix";
import Cards from "../../../components/Cards";

const ProductList = () => {
  const handleXemThem = () =>{
    Notiflix.Block.standard(".product-list", "Loading...", {
      backgroundColor: "rgba(0,0,0,0.8)",
      messageColor: "rgba(0,223,154,1)",
    });
    setTimeout(() => {
      Notiflix.Block.remove(".product-list");
    }, 1500);
  }
  return (
    <>
      <div className="w-full text-white product-list">
        <div className="max-w-[1340px] mx-auto flex-wrap flex justify-center gap-4 ">
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
          <p className="cursor-pointer" onClick={handleXemThem}>Xem Thêm</p>
        </div>
      </div>
    </>
  );
};
export default ProductList;
