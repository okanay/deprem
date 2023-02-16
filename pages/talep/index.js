import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion as m } from "framer-motion";
import { StartDummyData } from "/helper/DummyData";

import Alert from "../../components/UI/Alert";
import TalepItem from "../../components/UI/talepItem";

const talepFilter = [
  {
    name: "TFDefault",
    type: "",
    src: "/svg/manage.svg",
    alt: "Hepsi",
    description: "Hepsi",
    color: "slate-600",
    hover: "group-hover:border-slate-400",
    url: "/",
  },
  {
    name: "TFBarinma",
    type: "bt",
    src: "/svg/cabin.svg",
    alt: "Barınmaya İhtiyacım Var",
    description: "Barınma",
    color: "red-400",
    hover: "group-hover:border-red-300",
    url: "/form/bt",
  },
  {
    name: "TFCadir",
    type: "ct",
    src: "/svg/camp.svg",
    alt: "Çadıra İhtiyacım Var",
    description: "Çadır",
    color: "pink-400",
    hover: "group-hover:border-pink-300",
    url: "/form/ct",
  },
  {
    name: "TFYemek",
    type: "gt",
    src: "/svg/foods.svg",
    alt: "Gıdaya İhtiyacım Var",
    description: "Gıda",
    color: "emerald-400",
    hover: "group-hover:border-emerald-300",
    url: "/form/gt",
  },
  {
    name: "TFIlac",
    type: "it",
    src: "/svg/medicine.svg",
    alt: "İlaca İhtiyacım Var",
    description: "İlaç",
    color: "teal-400",
    hover: "group-hover:border-teal-300",
    url: "/form/it",
  },
  {
    name: "TFHijyen",
    type: "ht",
    src: "/svg/amenities.svg",
    alt: "Hijyen Ürünlerine İhtiyacım Var",
    description: "Hijyen",
    color: "blue-400",
    hover: "group-hover:border-blue-300",
    url: "/form/ht",
  },
];
const labelContainer = {
  initial: {},
  hidden: {
    opacity: 0,
    scaleY: 0,
    y: 10,
    transition: { duration: 0.2 },
  },
  open: {
    opacity: 1,
    scaleY: 1,
    y: -3,
    display: "block",
    scaleX: 0.95,
    transition: { duration: 0.75, type: "spring" },
  },
};
const imageContainer = {
  initial: {},
  unselected: {
    y: 0,
    scale: 1,
    transition: { duration: 0.3 },
  },
  selected: {
    y: -4,
    scale: 1.15,
    transition: { duration: 0.5, type: "spring" },
  },
};

const Talep = () => {

  const [initialDummyData, setInitialDummyData] = useState(StartDummyData);
  const [filteredData, setFilteredData] = useState(StartDummyData);
  const [iconFilter, setIconFilter] = useState({prev : talepFilter[0], current : talepFilter[0]});
  const [timeFilter, setTimeFilter] = useState("");
  const [formCount, setFormCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1)
  const [pageData, setPageData] = useState({min: 1, max : 0});

  // timeFilter \ iconFilter
  useEffect(() => {

    filterData();

  }, [timeFilter, iconFilter, currentPage]);
  // pageData
  useEffect( () => {

    setPageData({min: 1, max: Math.ceil((formCount / (currentPage * 5)))})

  }, [formCount])

  const handleIconFilterButton = (item) => {

    const value = { prev : iconFilter.current, current : item}
    setIconFilter(value);

    if (iconFilter.prev.type !== iconFilter.current.type)
    {
      setCurrentPage(1)
    }

    if (item.type === "") {
      setTimeFilter("");
      setFilteredData([...initialDummyData]);
    }
  };
  const handleTimeFilterButton = (value) => {
    if (timeFilter === value) {
      setTimeFilter("");
      return;
    }

    setTimeFilter(value);
  };
  const handlePageFilterButton = (value) => {

    setCurrentPage(currentPage + value)
  }
  const filterData = () => {

    let filtered = initialDummyData;
    setFormCount(Object(filtered).length)

    filtered = timeFiltered(filtered);
    filtered = statesFiltered(filtered);

    filtered = timeSelectedFiltered(filtered);
    filtered = typeSelectedFiltered(filtered);
    filtered = pageSelectedFiltered(filtered);

    setFilteredData([...filtered]);
  };
  const pageSelectedFiltered = (filtered) => {

    const min = currentPage === 1 ? `${(currentPage - 1) * 5}` : `${((currentPage - 1) * 5)}`
    const max = currentPage === 1 ? `${currentPage * 5}` : `${((currentPage) * 5) + 1}`

    return filtered.slice(min, max)

  }
  const typeSelectedFiltered = (filtered) => {

    if (iconFilter.current.type !== "")
    {
      const data = filtered.filter((data) => data.type === iconFilter.current.type);
      setFormCount(Object(data).length)
      return data
    }

    return filtered

  }
  const timeSelectedFiltered = (filtered) => {

    if (timeFilter === "")
    {
      return filtered;
    }
    else
    {

      let currentTime = new Date().getTime();
      let targetTime = 0;
      let fourHours = 1000 * 60 * 60 * 4;
      let halfDay = 1000 * 60 * 60 * 12;
      let oneDay = 1000 * 60 * 60 * 24;

      if (timeFilter === "24") {
        targetTime = oneDay;
      } else if (timeFilter === "12") {
        targetTime = halfDay;
      } else if (timeFilter === "4") {
        targetTime = fourHours;
      }

      const data = filtered.filter((data) => Math.abs(currentTime - data.time) < targetTime);
      setFormCount(Object(data).length)
      return data
    }
  }
  const timeFiltered = (filtered) => {

    return filtered.sort((a, b) => {
      if (a.time < b.time) {
        return 1;
      } else if (a.time > b.time) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  const statesFiltered = (filtered) => {
    return filtered.sort((a, b) => {
      if (a.state > b.state) {
        return 1;
      } else if (a.state < b.state) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  const statusFiltered = (filtered) => {

    return filtered.sort((a, b) => {
      if (a.status < b.status) {
        return 1;
      } else if (a.status > b.status) {
        return -1;
      } else {
        return 0;
      }
    });

  }

  return (  <div className={"bg-gray-50 max-w-screen-phoneXS phoneLG:max-w-screen-phoneLG phone:max-w-screen-phone w-full m-20 my-8 mx-auto py-8"}
    >

          {/* UYARI - BASLIK  */}
          <div className={"px-4"}>
            {/* Uyari */}
            <Alert title={"Lütfen Dikkat!"}>
              İnsanlara yardım edebileceğinizden emin olmadan iletişim teklifinde
              bulunmayın.
            </Alert>

            {/* Baslik */}
            <div className="mt-6 mb-3 flex justify-between items-center text-center">
              <div>
                <h1
                  className={
                    "text-[1.25rem] font-semibold text-neutral-700 text-start mb-5"
                  }
                >
                  <span className={"text-slate-600/90"}>İhtiyaç </span>
                  <span className={"font-light font-serif"}>Talepleri</span>
                </h1>
              </div>

              {/* YENI TALEP OLUSTURMA BUTONU*/}
              <Link
                href={iconFilter.current.url}
                className={`mb-4 py-2 px-2 rounded-md bg-slate-50 border-[0.01rem] border-gray-200 text-${iconFilter.current.color} shadow shadow-gray-300/30 uppercase font-bold text-sm transition-colors duration-300 hover:bg-${iconFilter.current.color} hover:text-slate-50`}
              >
                YENİ-TALEP
              </Link>
            </div>
          </div>

          {/* FILTER */}
          <div className={"flex flex-col justify-start gap-4"}>
            {/* 24 - 12 - 4 Saat \\ Sonuc Sayisi */}
            <div className={"flex flex-row gap-2 justify-center px-4"}>
              {/* 24 Saat */}
              <div className={"flex flex-col items-center justify-center"}>
                <button
                  onClick={() => {
                    handleTimeFilterButton("24");
                  }}
                  className={`transition duration-300 ${
                    timeFilter === "24"
                      ? "text-gray-100 bg-gray-700"
                      : "text-gray-400 border-gray-200"
                  } text-sm rounded bg-slate-50 border  p-1.5`}
                >
                  {" "}
                  24 saat
                </button>
              </div>
              {/* 12 Saat */}
              <div className={"flex flex-col items-center justify-center"}>
                <button
                  onClick={() => {
                    handleTimeFilterButton("12");
                  }}
                  className={`transition duration-300 ${
                    timeFilter === "12"
                      ? "text-gray-100 bg-gray-700"
                      : "text-gray-400 border-gray-200"
                  } text-sm rounded bg-slate-50 border  p-1.5`}
                >
                  {" "}
                  12 saat
                </button>
              </div>
              {/* 4 Saat */}
              <div className={"flex flex-col items-center justify-center"}>
                <button
                  onClick={() => {
                    handleTimeFilterButton("4");
                  }}
                  className={`transition duration-300 ${
                    timeFilter === "4"
                      ? "text-gray-100 bg-gray-700"
                      : "text-gray-400 border-gray-200"
                  } text-sm rounded bg-slate-50 border  p-1.5`}
                >
                  {" "}
                  4 saat
                </button>
              </div>
              {/* Sonuc Count */}
              <p className={`text-gray-400 text-sm rounded bg-slate-50 border border-gray-200 p-1.5`}
              >
                Sonuç : {formCount}
              </p>
              {/* Güncelle */}
              <div className={"flex flex-col items-center justify-center"}>
                <button
                  onClick={ () => {window.location.reload(false);} }
                  className={`text-gray-100 border-gray-200 bg-sky-400 text-sm rounded bg-slate-50 border  p-1.5`}
                >
                  {" "}
                  Güncelle
                </button>
              </div>
            </div>

            {/* ICON FILTER */}
            <div className={"flex flex-row justify-center gap-4 bg-gray-50 pb-7 pt-2 rounded-[2px] border-b border-b-gray-300 w-full"}
            >
              {talepFilter.map((item) => {
                return (
                  <div
                    className={
                      "relative flex flex-col items-center text-center group"
                    }
                    key={item.name}
                  >
                    <m.div
                      variants={imageContainer}
                      initial={"unselected"}
                      animate={
                        iconFilter.current.name === item.name ? "selected" : "unselected"
                      }
                    >
                      <button
                        onClick={() => {
                          handleIconFilterButton(item);
                        }}
                        className={`w-10 h-10 p-2 border-2 transition duration-300 rounded group ${
                          iconFilter.current.name === item.name
                            ? `border-${item.color} border-b-[4px]`
                            : ""
                        } `}
                      >
                        <Image
                          loading={'eager'}
                          priority={true}
                          src={item.src}
                          alt={item.alt}
                          width={"200"}
                          height={"200"}
                        />
                      </button>
                    </m.div>

                    <m.label
                      variants={labelContainer}
                      initial={"hidden"}
                      animate={iconFilter.current.name === item.name ? "open" : "hidden"}
                      htmlFor={item.name}
                      className={`absolute top-10 text-gray-800 font-light border-b-[3px] mt-1.5 w-[4rem] border-${item.color} ${item.hover}`}
                    >
                      {item.description}
                    </m.label>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SAYFA DEGISTIR*/}
          <div className="flex flex-col justify-between items-center mt-6 gap-4">

            {/* SAYFA DEGISTIR */}
            <div className={"flex flex-row justify-between items-center text-xs w-full text-gray-600 px-4"}>

              {/*  SOL TARAF */}
              <button
                disabled={pageData.min === currentPage}
                onClick={() => {handlePageFilterButton(-1)} }
                className={
                  "flex flex-row justify-between items-center hover:text-gray-400 disabled:text-gray-400"
                }
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className={"mt-0.5"}>Önceki</span>
              </button>

              {/*  SAG TARAF */}
              <button
                disabled={pageData.max === currentPage}
                onClick={() => {handlePageFilterButton(+1)}}
                className={
                  "flex flex-row justify-between items-center hover:text-gray-400 disabled:text-gray-400"
                }
              >
                <span className={"mt-0.5"}>Sonraki</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* IHTIYAC TALEP FORMLARI (MAP EDILEN DIV) */}
          <div className="flex flex-col gap-12 mt-10 text-[0.5rem] phone:text-[0.55rem] phoneLG:text-[0.7rem]">
            {filteredData.map((item) => {
              return <TalepItem item={item} key={item.id} />;
            })}
          </div>

          {/* SAYFA DEGISTIR*/}
          <div className="flex flex-col justify-between items-center mt-11 gap-4">

            {/* CIZGI / HR*/}
            <div className={"border-b border-b-gray-300 drop-shadow shadow-gray-100 w-full h-0.5 rounded-md"}/>

            {/* SAYFA DEGISTIR */}
            <div className={"flex flex-row justify-between items-center text-xs w-full text-gray-600 px-4"}>

              {/*  SOL TARAF */}
              <button
                disabled={pageData.min === currentPage}
                onClick={() => {handlePageFilterButton(-1)} }
                className={
                  "flex flex-row justify-between items-center hover:text-gray-400 disabled:text-gray-400"
                }
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className={"mt-0.5"}>Önceki</span>
              </button>

              {/*  SAG TARAF */}
              <button
                disabled={pageData.max === currentPage}
                onClick={() => {handlePageFilterButton(+1)}}
                className={
                  "flex flex-row justify-between items-center hover:text-gray-400 disabled:text-gray-400"
                }
              >
                <span className={"mt-0.5"}>Sonraki</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/*  TAILWIND CLASS CREATOR */}
          <div>
            {/* BackGround*/}
            <div
              className={
                "hover:bg-slate-600 hover:bg-red-400 hover:bg-teal-400 hover:bg-pink-400 hover:bg-blue-400 hover:bg-emerald-400"
              }
            ></div>
            {/* TEXT */}
            <div
              className={
                "text-red-400 text-teal-400 text-pink-400 text-blue-400 text-emerald-400 text-slate-600"
              }
            ></div>
            {/* BORDER*/}
            <div
              className={
                "border-slate-600 border-red-400 border-teal-400 border-pink-400 border-blue-400 border-emerald-400"
              }
            ></div>
            <div
              className={
                "hover:border-slate-400 hover:border-red-300 hover:border-teal-300 hover:border-pink-300 hover:border-blue-300 hover:border-emerald-300"
              }
            ></div>
          </div>
    </div>
  );
};
export default Talep;
