import Link from "next/link";

const MenuCategory = ({ listCategory,keysreach}) => {
  return (
    <>
      <div className="max-w-[1340px] mx-auto flex justify-start text-white w-full mb-5">
        <ul className="flex mx-auto">
          {listCategory.map((i) => (
            <>
              <li className="py-4 px-7 border-b border-[#00df9a] mx-2">
                <Link href={`/sreach/${i.cate_id}/prod/${keysreach ? keysreach : ''}`}>{i.cate_name}</Link>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};
export default MenuCategory;
