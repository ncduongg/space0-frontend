import { Avatar, Grid } from "@nextui-org/react";
import Link from "next/link";

const Comment = ({ username, name, textconent }) => {
  return (
    <>
      <div className="w-full text-white">
        <div className="mx-auto max-w-[1340px] flex gap-4 py-4 my-3 px-5 rounded-lg bg-opacity-25 bg-[#00df9a] hover:bg-opacity-50">
          <Avatar text="NC" color="primary" textColor="white" />
          <div className="flex-clo">
            <Link className="font-bold text-[#00df9a] cursor-pointer" href="/profile/ncduong">NCDuong</Link>
            <p className="font-mono text-[13px] pl-1">11:03:22 08/07/2022</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut vel
              ipsum numquam? Consectetur reiciendis illum off?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Comment;
