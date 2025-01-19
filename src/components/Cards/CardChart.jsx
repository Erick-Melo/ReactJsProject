const CardChart = ({ children, title, maxHeight=true }) => {
  return (
    <div className={`${maxHeight && "h-[250px]"} relative w-full flex flex-col items-center bg-white dark:bg-[#ffffff15] border-2 border-[#f5d15d] pb-4 rounded-lg shadow-sm`}>
      <div className="w-[50%] text-center bg-[#f5d15d] dark:bg-[#fad14a] px-2 rounded-b-lg font-semibold dark:text-white">
        {title}
      </div>
      {children}
    </div>
  );
};
export default CardChart;
