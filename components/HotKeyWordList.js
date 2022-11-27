import HotKeyWord from "./HotKeyWord";

const HotKeyWordList = () => {
  return (
    <>
      <div className="bg-white py-6">
        <div className="justify-between max-w-[1340px] mx-auto">
          <div className="pb-4">
            <h2 className="font-bold text-xl text-[#00df9a]">
            Từ khóa nổi bật
            </h2>
          </div>
          <div className="flex flex-row justify-between flex-wrap">
            <HotKeyWord />
            <HotKeyWord />
            <HotKeyWord />
            <HotKeyWord />
            <HotKeyWord />
          </div>
        </div>
      </div>
    </>
  );
};
export default HotKeyWordList;
