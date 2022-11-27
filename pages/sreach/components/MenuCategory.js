import Link from "next/link";

const MenuCategory = () => {
  return (
    <>
    <div className="max-w-[1340px] mx-auto flex justify-start text-white w-full mb-5">
      <ul className="flex mx-auto">
        <li className="py-4 px-7 border-b border-[#00df9a] mx-2"><Link href="/" >Học Tập</Link></li>
        <li className="py-4 px-7 border-b border-[#00df9a] mx-2"><Link href="/" >Giải Trí</Link></li>
        <li className="py-4 px-7 border-b border-[#00df9a] mx-2"><Link href="/" >Làm Việc</Link></li>
        <li className="py-4 px-7 border-b border-[#00df9a] mx-2"><Link href="/" >Game Steam</Link></li>
        <li className="py-4 px-7 border-b border-[#00df9a] mx-2"><Link href="/" >Gói Data</Link></li>
      </ul>
    </div>
    </>
  );
};
export default MenuCategory;
