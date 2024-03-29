import React, { useEffect, useState } from "react";
import axios from "axios";
import LargeUpSection from "../components/largeUpSection.js";
import SmallSection from "../components/smallSection.js";
import SearchBar from "../components/searchBar.js";

const NewsList = () => {
  const [headlines, setHeadlines] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    //get data for Headlines (Larger Section)
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?language=en&apiKey=73bcbcf7e59743a285e634ebf1df51ab"
      )
      .then((res) => {
        console.log(res.data.articles);
        setHeadlines(res.data.articles.slice(0, 5));
      })
      .catch((e) => {
        console.log("Error nich: ", e.message);
      });

    // get data for smaller section (everything news)
    axios
      .get(
        "https://newsapi.org/v2/everything?language=en&q=general&apiKey=73bcbcf7e59743a285e634ebf1df51ab"
      )
      .then((res) => {
        console.log("ini smaller section: ", res);
        const filteredNews = res.data.articles.filter(
          (article) =>
            article.urlToImage !== null &&
            article.title !== null &&
            article.content !== null
        );
        setNews(filteredNews.slice(0, 20));
      })
      .catch((e) => {
        console.log("error untuk smaller section: ", e.message);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <div className="p-5 bg-green-200 mt-[100px] flex justify-center">
        <SearchBar />
      </div>

      {headlines !== null &&
        headlines.map((headline, index) => (
          <div key={index} className="mt-[50px]">
            {index % 2 === 0 ? (
              <>
                <div className="flex mt-5 p-5">
                  <div className="w-1/3 bg-white flex justify-center mr-3">
                    <LargeUpSection res={headline} />
                  </div>
                  <div className="w-2/3 bg-white grid grid-cols-2 grid-rows-2 gap-2">
                    {news !== null &&
                      news
                        .slice(index * 4, index * 4 + 4)
                        .map((news, secIndex) => (
                          <SmallSection key={secIndex} res={news} />
                        ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex mt-5 p-5">
                  <div className="w-2/3 bg-white grid grid-cols-2 gap-2">
                    {news !== null &&
                      news
                        .slice(index * 4, index * 4 + 4)
                        .map((news, secIndex) => (
                          <SmallSection key={secIndex} res={news} />
                        ))}
                  </div>
                  <div className="w-1/3 bg-white flex justify-center ml-3">
                    <LargeUpSection res={headline} />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
    </div>
  );
};

export default NewsList;

{
  /* <div className="flex mt-5">
            <div className="w-2/5 bg-slate-200 h-[500px]">
            </div>
            <div className="w-3/5 bg-blue-200 h-[500px]">
            </div>
        </div>

        
        <div className="flex mt-5">
            <div className="w-3/5 bg-slate-200 h-[500px]">
            </div>
            <div className="w-2/5 bg-blue-200 h-[500px]">
            </div>
        </div> */
}
