const CardDashboard = ({ title, data }) => {
  return (
    <div className="bg-white dark:bg-[#ffffff15] border-2 border-[#f5d15d] rounded-lg w-full flex flex-col justify-center items-center">
      <div className="min-w-[50%] text-center bg-[#f5d15d] dark:dark:bg-[#fad14a] dark:text-white px-2 rounded-b-lg font-semibold">{title}</div>
      <div className="grid grid-cols-3 gap-2 justify-center">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col text-center">
            <div className="font-semibold">{item.title}</div>
            <div className="text-lg font-[500]">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CardDashboard;