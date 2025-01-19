import { useRef, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { useLocation } from "react-router-dom";
import { LuCornerUpLeft, LuPenLine } from "react-icons/lu";
import newsList from "./NewsList.json";

export default function NewsManager() {
  const [newsSelected, setNewsSelected] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const imageRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.newsSelected) {
      setNewsSelected(location.state.newsSelected);
    }
    getNews();
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [newsSelected]);

  return (
    <MainLayout>
      <LuCornerUpLeft
        className={`${
          newsSelected ? "block" : "hidden"
        } ml-5 mt-5 -mb-10 text-lg cursor-pointer z-10`}
        onClick={() => setNewsSelected(null)}
      />
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
        <div className={`${newsSelected ? "hidden" : ""} w-full sm:w-fit`}>
          <div className=" text-grotesk text-2xl sm:text-3xl font-semibold px-8">
            Confira as últimas notícias:
          </div>
        </div>
        <div
          className={`${
            localStorage.getItem("user") && !newsSelected ? "block" : "hidden"
          } relative left-0 mb-6 sm:mb-0 w-5/12 sm:w-fit whitespace-nowrap mx-auto sm:mx-0 sm:px-4 rounded-full text-lg cursor-pointer z-10 bg-[#E8EDED] text-[#042121]`}
          onClick={() => setOpenModal(true)}>
          Nova notícia
        </div>
      </div>
      {!newsSelected && (
          <div className="flex flex-row justify-center flex-wrap gap-3 w-full p-4 mb-4 rounded-md">
            {newsList.length > 0 ? (
              newsList.map((news) => (
                <div
                  key={news.id}
                  className="text-[#E8EDED] min-w-[120px] max-w-[300px] rounded-md hover:shadow-[0_0_4px_2px_#e8eded7d] ease-in-out duration-200 cursor-pointer"
                  onClick={() => {
                    setNewsSelected(news);
                  }}>
                  <div className="sm:max-h-[330px] h-40 sm:h-24 rounded-t-[10px] overflow-hidden">
                    <img
                      className="object-cover w-full rounded-t-md rounded-b-[1px]"
                      src={
                        news.image === ""
                          ? ""
                          : news.image
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between px-2 text-start bg-[#053232]">
                    {formatDate(news.data)}
                    {authService.getUserRoles().includes("ADMIN") && (
                      <LuPenLine
                        onClick={() => {
                          setNewsSelected(news);
                          setOpenModal(true);
                        }}
                      />
                    )}
                  </div>
                  <div className="bg-[#053232] p-4 pb-5 rounded-b-md">
                    <div className="h-[42px] text-start text-sm overflow-hidden text-ellipsis line-clamp-3 leading-[14px]">
                      {news.message}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="">Nenhum blog encontrado</div>
            )}
          </div>
        )}
        {newsSelected && (
          <div className="flex flex-col gap-3 p-4 mb-4 text-start md:w-[85%] lg:w-[90%] xl:max-w-[1200px] mx-auto">
            <div className="overflow-hidden rounded-md w-fit mx-auto mt-6">
              <img
                ref={imageRef}
                className=" position-center rounded-md"
                src={
                  newsSelected?.image === ""
                    ? bettingNews
                    : urlFilesUploadsBlogs + newsSelected?.image
                }
              />
            </div>
            <div className="w-full">{formatDate(newsSelected?.data)}</div>
            <div className="w-full font-semibold text-2xl">
              {newsSelected?.title}
            </div>
            <div className="whitespace-pre-wrap">{newsSelected?.message}</div>
          </div>
        )}
    </MainLayout>
  );
}
