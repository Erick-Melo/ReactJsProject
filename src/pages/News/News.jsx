import { useEffect, useRef, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import newsList from "./NewsList.json";
import CardNew from "../../components/Cards/CardNews";
import genericNews from "../../assets/images/generic-news.jpg";
import ButtonSmall from "../../components/Buttons/ButtonSmall";
import { formatDate } from "../../utils/formatDate";
import ButtonBack from "../../components/Buttons/ButtonBack";

export default function News() {
  const [showAll, setShowAll] = useState(false);
  const [newsSelected, setNewsSelected] = useState(null);
  const imageRef = useRef(null);
  const sortedNewsList = newsList.sort(
    (a, b) => new Date(b.data) - new Date(a.data)
  );
  const displayedNews = showAll ? sortedNewsList : sortedNewsList.slice(0, 8);
  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [newsSelected]);

  return (
    <MainLayout page="Notícias">
      {!newsSelected ? (
        newsList.length > 0 ? (
          <div className="flex flex-col gap-3 justify-center items-center w-full">
            <div
              className="text-2xl font-bold my-3"
              onClick={() => setNewsSelected(null)}>
              Últimas novidades:
            </div>
            <div className="grid sm:grid-cols-3 xl:grid-cols-4 gap-3 justify-center items-center">
              {displayedNews
                .sort((a, b) => new Date(b.data) - new Date(a.data))
                .map((news, index) => (
                  <CardNew
                    key={index}
                    news={news}
                    setNewsSelected={setNewsSelected}
                  />
                ))}
            </div>
            {newsList.length > 2 && (
              <ButtonSmall
                onclick={() => setShowAll(!showAll)}
                text={showAll ? "Ver menos" : "Ver todas"}
              />
            )}
          </div>
        ) : (
          <div className="text-sm font-semibold text-center mt-5 leading-4 h-[280px]">
            Nenhuma notícia encontrada.
          </div>
        )
      ) : (
        <ButtonBack
          aditionalClasses="mt-3"
          onclick={() => setNewsSelected(null)}
        />
      )}
      {newsSelected && (
        <div className="flex flex-col gap-3 p-4 mb-4 text-start md:w-[85%] lg:w-[90%] xl:max-w-[1200px] mx-auto">
          <div className="overflow-hidden rounded-md w-fit mx-auto mt-3">
            <img
              ref={imageRef}
              className=" position-center rounded-md"
              src={
                newsSelected?.image === "" ? genericNews : newsSelected.image
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
