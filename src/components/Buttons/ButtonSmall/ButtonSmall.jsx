import { LuRefreshCw } from "react-icons/lu";

const ButtonSmall = ({ onclick = () => {}, text = "Click" }) => {
  const getTextorIcon = () => {
    if (text.includes("icon")) {
      switch (text) {
        case "icon-refresh":
          return <LuRefreshCw />;
      }
    } else {
      return text;
    }
  };
  return (
    <button
      className="w-fit bg-gray-500 text-white dark:bg-gray-300 dark:text-gray-800 font-bold py-2 px-4 rounded"
      onClick={onclick}>
      {getTextorIcon(text)}
    </button>
  );
};
export default ButtonSmall;
