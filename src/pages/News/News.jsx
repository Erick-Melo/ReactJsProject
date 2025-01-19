import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import newsList from "./NewsList.json";
import CardNew from "../../components/Cards/CardNews";
import ButtonSmall from "../../components/Buttons/ButtonSmall";

export default function News() {
  const [showAll, setShowAll] = useState(false);

  const sortedNewsList = newsList.sort(
    (a, b) => new Date(b.data) - new Date(a.data)
  );
  const displayedNews = showAll ? sortedNewsList : sortedNewsList.slice(0, 6);

  return (
    <MainLayout>
      {newsList.length > 0 ? (
        <div className="flex flex-col gap-3 justify-center items-center w-full">
          <div className="text-2xl font-bold my-3">Últimas novidades:</div>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center items-center">
            {displayedNews
              .sort((a, b) => new Date(b.data) - new Date(a.data))
              .map((news, index) => (
                <CardNew key={index} news={news} />
              ))}
          </div>
          {newsList.length > 2 && (
            <ButtonSmall onclick={() => setShowAll(!showAll)} text="Ver Mais" />
          )}
        </div>
      ) : (
        <div className="text-sm font-semibold text-center mt-5 leading-4 h-[280px]">
          Nenhuma notícia encontrada.
        </div>
      )}
    </MainLayout>
  );
}
