import { Textarea } from "@nextui-org/react";

const ProductContent = ({notes}) => {
  return (
    <>
      <div className="w-full pt-6 text-white">
        <div className="flex-col max-w-[1340px] mx-auto">
          <h2 className="font-bold text-[25px] indent-1 text-center">
            <u>Mô Tả</u>
          </h2>
          <div>
            <p>
              {notes}
            </p>
          </div>
          <div className="border-dashed border-t-2 border-[#00df9a] py-7 flex">
            <Textarea fullWidth={true} 
              placeholder="Hãy cho chúng tôi biết suy nghĩ về sản phẩm và dịch vụ của chúng tôi..."
            />
            <button className="py-1 px-8  border-2 border-[#00df9a] rounded-md m-2 hover:bg-[#00df9a]">Đăng</button>
          </div>
          
        </div>
      </div>
    </>
  );
};
export default ProductContent;
