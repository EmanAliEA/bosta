import { AiOutlineLoading3Quarters } from "react-icons/ai";
function Loader() {
  //   return <AiOutlineLoading className="loading" />;
  return (
    <div className="absolute w-full bg-gray-100/50  h-full top-0  flex items-center justify-center">
      <AiOutlineLoading3Quarters className="loading text-[50px] " />
    </div>
  );
}

export default Loader;
