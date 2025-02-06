import { formatDate } from "../../utils/formatDate";
import genericNews from "../../assets/images/generic-news.jpg";

export default function CardNew({ news, setNewsSelected }) {
  return (
    <div
      className="bg-white dark:bg-black min-w-[120px] max-w-[300px] shadow-md rounded-md hover:shadow-[0_0_4px_2px_#a8a8a8a9] dark:hover:shadow-[0_0_4px_2px_#e8eded7d] ease-in-out duration-200 cursor-pointer"
      onClick={() => {
        setNewsSelected(news);
      }}>
      <div className="sm:max-h-[330px] h-40 sm:h-24 rounded-t-[10px] overflow-hidden">
        <img
          className="object-cover w-full rounded-t-md rounded-b-[1px]"
          src={news?.image === "" ? genericNews : news.image}
        />
      </div>
      <div className="px-1 text-start bg-[#95dddda9] dark:bg-[#0d1224d7]">
        {formatDate(news.data)}
      </div>
      <div className="bg-[#95dddda9] dark:bg-[#0d1224d7] p-4 pb-3 rounded-b-md">
        <div className="h-[55px] font-semibold text-start text-sm overflow-hidden text-ellipsis line-clamp-3 leading-[18px]">
          {news.title}
        </div>
      </div>
    </div>
  );
}
