import React from "react";

const SmallSection = ({res}) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={res.url}>
        <img
          className="rounded-lg w-[250px] h-[150px] mx-auto object-cover"
          src={res.urlToImage === null ? "https://www.nhf.gov.gh/assets/images/default-news.jpg" : res.urlToImage}
          alt=""
        />
      </a>
      <div className="p-1">
        <a href="#">
          <h5 className="mb-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
          {res.title.length > 50? `${res.title.slice(0, 50)}...` : res.title}
          </h5>
        </a>
        <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">
        {res.description.length > 85? `${res.description.slice(0, 85)}...` : res.description}

        </p>
      </div>
    </div>
  );
};

export default SmallSection;
