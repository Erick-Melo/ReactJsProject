export default function ButtonLarge({ onclick = () => {}, text = "Click" }) {
  return (
    <button
      className="w-full bg-gray-500 text-white dark:bg-gray-300 dark:text-gray-800 font-bold py-2 px-4 rounded"
      onClick={onclick}>
      {text}
    </button>
  );
}
