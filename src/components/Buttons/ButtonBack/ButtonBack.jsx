import { TiArrowBack } from "react-icons/ti";

export default function ButtonBack({
  onclick = () => {},
  aditionalClasses = "",
}) {
  return (
    <div
      className={`${aditionalClasses} cursor-pointer flex flex-row w-fit gap-1 bg-gray-500 text-white dark:bg-gray-300 dark:text-gray-800 rounded-md px-2 py-1`}
      onClick={onclick}>
      <TiArrowBack />
      <div className="text-xs">Voltar</div>
    </div>
  );
}
