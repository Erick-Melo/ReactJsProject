import { FaQuestion } from "react-icons/fa";
export default function ButtonHelp({ onclick = () => {}, extraClasses = "" }) {
  return (
    <FaQuestion
      className={`${extraClasses} w-6 h-6 text-[#fad14a] mx-auto animate-pulse cursor-pointer hover:transform hover:scale-150 duration-200 hover:bg-[#ffffff3d] rounded-full p-1`}
      onClick={onclick}
    />
  );
}
