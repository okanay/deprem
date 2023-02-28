import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { motion as m } from "framer-motion";

import Alert from "../../components/UI/Elements/Alert";
import CustomInputNotFormik from "../../components/UI/Inputs/CustomInputNotFormik";
import ScrollComponent from "../../components/UI/Re-Useables/ScrollComponent";

import { StartDummyDataDestek } from "/helper/DummyData";
import DestekItem from "../../components/UI/Destek/DestekItem.jsx";
const destekFilter = [
  {
    width : "4rem",
    name: "TFDefault",
    type: "",
    src: "/svg/manage.svg",
    alt: "Hepsi",
    description: "Hepsi",
    color: "slate-600",
    hover: "group-hover:border-slate-400",
    url: "/#destek",
  },
  {
    width : "5rem",
    name: "DFKonaklama",
    type: "kd",
    url: "/form/kd",
    src: "/svg/house.svg",
    alt: "Konaklama",
    description: "Konaklama",
    color: "lime-400",
    hover: "group-hover:border-lime-300",
  },
  {
    width : "4rem",
    name: "DFAramaKurtarma",
    type: "akd",
    url: "/form/akd",
    src: "/svg/footprints.svg",
    alt: "Arama",
    description: "Arama",
    color: "fuchsia-400",
    hover: "group-hover:border-fuchsia-300",
  },
  {
    width : "5rem",
    name: "DFOperasyon",
    type: "obd",
    url: "/form/obd",
    src: "/svg/constructionWorker.svg",
    alt: "Operasyonlarda Bulunabilirim",
    description: "Operasyon",
    color: "rose-400",
    hover: "group-hover:border-rose-300",
  },
  {
    width : "4rem",
    name: "DFNakliye",
    type: "ntd",
    url: "/form/ntd",
    src: "/svg/busDriver.svg",
    alt: "Nakliye",
    description: "Nakliye",
    color: "cyan-400",
    hover: "group-hover:border-cyan-300",
  },
  {
    width : "5rem",
    name: "DFCevirmenlik",
    type: "cd",
    url: "/form/cd",
    src: "/svg/translator.svg",
    alt: "Cevirmenlik",
    description: "Cevirmenlik",
    color: "indigo-400",
    hover: "group-hover:border-indigo-300",
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
const searchAnimation = {
  shake: {
    x: [-2, 2, -2, 2, -2, 2,0],
    transition: {
      duration: 0.5,
    },
  },
  initial : {
    x : 0,
    scale : 1,
    transition: {
      duration: 0.25,
    },
  }

};
const DestekIndex = () => {

  /// ------------------------------ USE_STATES ------------------------------ ///

  const [initialDummyData, setInitialDummyData] = useState(StartDummyDataDestek);
  const [filteredData, setFilteredData] = useState(StartDummyDataDestek);
  const [iconFilter, setIconFilter] = useState({
    prev: destekFilter[0],
    current: destekFilter[0],
  });
  const [timeFilter, setTimeFilter] = useState("");
  const [searchParamFilter, setSearchParamFilter] = useState("");
  const [formCount, setFormCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState({ min: 1, max: 0 });
  const [searchButtonVariants , setSearchButtonVariants] = useState('initial')

  /// ------------------------------ USE_EFFECTS ------------------------------ ///

  /// *************** TimeFilter, IconFilter,CurrentPage set olursa tetikler yeniden FILTRELEME Yapar *************** ///
  useEffect(() =>
  {

    filterData();

  }, [timeFilter, iconFilter, currentPage]);

  /// *************** Bulunan Toplam Sonucu Ogrenir *************** ///
  useEffect(() =>
  {

    setPageData({
      min: 1,
      max: formCount !== 0 ? Math.ceil(formCount / (currentPage * 5)) : 1,
    });

  }, [formCount]);

  /// *************** Arama basarili olursa arama input kutusuna yazilan ifadeyi sifirlar. *************** ///
  useEffect(() =>
  {

    setSearchParamFilter("");

  }, [filteredData]);

  /// ------------------------------ HANDLE FUNCTIONS ------------------------------ ///
  const handleIconFilterButton = (item) => {
    if (iconFilter.current.type !== item.type) {
      setCurrentPage(1);
    }

    const value = { prev: iconFilter.current, current: item };
    setIconFilter(value);

    if (item.type === "") {
      setTimeFilter("");
      setFilteredData([...initialDummyData]);
    }
  };
  const handleTimeFilterButton = (value) => {
    if (timeFilter !== value) {
      setCurrentPage(1);
    }

    if (timeFilter === value) {
      setTimeFilter("");
      return;
    }

    setTimeFilter(value);
  };
  const handlePageFilterButton = (value) => {
    let newValue = currentPage + value;

    if (newValue > pageData.max)
    {
      newValue = pageData.max;
    }
    else if (newValue < pageData.min)
    {
      newValue = pageData.min;
    }

    setCurrentPage(newValue);
  };
  const handleSearchButton = () => {
    const searchedData = initialDummyData.filter((data) => {
      if (data.phone === searchParamFilter) {
        return data;
      } else if (data.name === searchParamFilter) {
        return data;
      } else if (data.id === searchParamFilter) {
        return data;
      }
    });

    const count = Object(searchedData).length;

    if (count === 0) {
      handleSearchButtonShakeAnimation()
      setSearchParamFilter("");
      return;
    }

    const newSelectedValue = { prev: destekFilter[0], current: destekFilter[0] };
    setIconFilter(newSelectedValue);

    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });

    setFormCount(count);
    setCurrentPage(1);
    setTimeFilter("");
    setFilteredData([...searchedData]);
  };
  const handleSearchButtonShakeAnimation = () => {

    setSearchButtonVariants('shake')

    setTimeout(() => {
      setSearchButtonVariants(""); }, 2000);
  }

  /// ------------------------------ FILTERED FUNCTIONS - Limitler Kisitlamalar ------------------------------ ///
  const pageSelectedFiltered = (filtered) => {
    const min =
      currentPage === 1
        ? `${(currentPage - 1) * 5}`
        : `${(currentPage - 1) * 5}`;
    const max =
      currentPage === 1 ? `${currentPage * 5}` : `${currentPage * 5 + 1}`;

    return filtered.slice(min, max);
  };
  const typeSelectedFiltered = (filtered) => {
    if (iconFilter.current.type !== "") {
      const data = filtered.filter(
        (data) => data.type === iconFilter.current.type
      );
      setFormCount(Object(data).length);
      return data;
    }

    return filtered;
  };
  const timeSelectedFiltered = (filtered) => {
    if (timeFilter === "") {
      return filtered;
    } else {
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

      const data = filtered.filter(
        (data) => Math.abs(currentTime - data.time) < targetTime
      );
      setFormCount(Object(data).length);
      return data;
    }
  };
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
  };
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
  };
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
  };
  const filterData = () => {
    if (searchParamFilter !== "") return;
    let filtered = initialDummyData;
    setFormCount(Object(filtered).length);

    filtered = timeFiltered(filtered);
    filtered = statesFiltered(filtered);

    filtered = timeSelectedFiltered(filtered);
    filtered = typeSelectedFiltered(filtered);
    filtered = pageSelectedFiltered(filtered);

    setFilteredData([...filtered]);
  };

  return (
    <div className={"bg-gray-50 max-w-screen-phoneXS phoneLG:max-w-screen-phoneLG phone:max-w-screen-phone w-full m-20 my-8 mx-auto py-8"}>

      {/* UYARI - BASLIK  */}
      <div className={"px-4"}>
        {/* Uyari */}
        <Alert title={"Lütfen Dikkat!"}>
          İletişime geçmeden önce formu dikkatlice okuyun. Her destek size uygun olmayabilir!
        </Alert>

        {/* Baslik */}
        <div className="mt-6 mb-3 flex justify-between items-center text-center">
          <div>
            <h1
              className={
                "text-[1.25rem] font-semibold text-neutral-700 text-start mb-5"
              }
            >
              <span className={"text-slate-600/90"}>Destek </span>
              <span className={"font-light font-serif"}>Formları</span>
            </h1>
          </div>

          {/* YENI TALEP OLUSTURMA BUTONU*/}
          <Link
            href={iconFilter.current.url}
            className={`mb-4 py-2 px-2 rounded-md bg-slate-50 border-[0.01rem] border-gray-200 text-${iconFilter.current.color} shadow shadow-gray-300/30 uppercase font-bold text-sm transition-colors duration-300 hover:bg-${iconFilter.current.color} hover:text-slate-50`}
          >
            YENİ-DESTEK
          </Link>
        </div>
      </div>

      {/* FILTER */}
      <div className={"flex flex-col justify-center items-center gap-4"}>
        {/* Arama Kutusu */}

        <div
          id={"filter"}
          className={"w-full flex flex-row justify-center gap-2"}
        >
          <CustomInputNotFormik
            type={"text"}
            name={"search"}
            src={"/svg/search.svg"}
            id={"manage"}
            minLength={0}
            maxLength={40}
            inputMode={"text"}
            description={"Talep Arayin"}
            handleChange={(e) => {
              setSearchParamFilter(e.target.value);
            }}
            value={searchParamFilter}
          />

          {/*  ARA BUTONU */}

          <m.button
            variants={searchAnimation}
            animate={searchButtonVariants === "shake" ? "shake" : ""}
            onClick={handleSearchButton}
            className={`mt-1 p-2 rounded-md bg-slate-50 border-[0.01rem] border-gray-200 text-gray-600 shadow shadow-gray-300/30 uppercase font-bold text-sm transition-colors duration-300 hover:bg-slate-600 hover:text-slate-50`}
          >
            Ara
          </m.button>
        </div>

        {/* 24 - 12 - 4 Saat \\ Sonuc Sayisi \\ Güncelle*/}
        <div
          className={
            "flex flex-row gap-2 justify-center px-4 text-xs phone:text-xs phoneLG:text-sm"
          }
        >
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
              }  rounded bg-slate-50 border  p-1.5`}
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
              } rounded bg-slate-50 border  p-1.5`}
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
              } rounded bg-slate-50 border  p-1.5`}
            >
              {" "}
              4 saat
            </button>
          </div>
          {/* Sonuc Count */}
          <p
            className={`text-gray-400 rounded bg-slate-50 border border-gray-200 p-1.5`}
          >
            Sonuç : {formCount}
          </p>
          {/* Güncelle */}
          <div className={"flex flex-col items-center justify-center"}>
            <button
              onClick={() => {
                window.location.reload(false);
              }}
              className={`text-gray-400 border-gray-200 bg-slate-50 transition duration-300 hover:bg-slate-100 rounded bg-slate-50 border  p-1.5`}
            >
              {" "}
              Güncelle
            </button>
          </div>
        </div>

        {/* ICON FILTER */}
        <div
          className={
            "flex flex-row justify-center gap-4 bg-gray-50 pb-8 pt-2 rounded-[2px] border-b border-b-gray-300 w-full"
          }
        >
          {destekFilter.map((item) => {
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
                    iconFilter.current.name === item.name
                      ? "selected"
                      : "unselected"
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
                      loading={"eager"}
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
                  animate={
                    iconFilter.current.name === item.name ? "open" : "hidden"
                  }
                  htmlFor={item.name}
                  className={`absolute top-11 text-gray-800 font-light border-b-[3px] mt-1.5 w-[${item.width}] border-${item.color} ${item.hover}`}
                >
                  {item.description}
                </m.label>
              </div>
            );
          })}
        </div>
      </div>

      {/* IHTIYAC TALEP FORMLARI (MAP EDILEN DIV) */}
      <div className="flex flex-col gap-12 mt-10 text-[0.5rem] phone:text-[0.55rem] phoneLG:text-[0.7rem]">
        {filteredData.map((item) => {
          return <DestekItem item={item} key={item.id} />;
        })}
      </div>

      {/* SAYFA DEGISTIR*/}
      <div className="flex flex-col justify-between items-center mt-11 gap-4">
        {/* CIZGI / HR*/}
        <div
          className={
            "border-b border-b-gray-300 drop-shadow shadow-gray-100 w-full h-0.5 rounded-md"
          }
        />

        {/* SAYFA DEGISTIR */}
        <div className={"flex flex-row justify-between items-center text-xs w-full text-blue-500 px-4"}>


          {/*  SOL TARAF */}
          <ScrollComponent disabled={pageData.min === currentPage} where={'filter'}>

            <button
              disabled={pageData.min === currentPage}
              onClick={() => {
                handlePageFilterButton(-1);
              }}
              className={"flex flex-row justify-between items-center hover:text-gray-900 disabled:text-gray-300"}
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
          </ScrollComponent>


          {/*  SAG TARAF */}
          <ScrollComponent disabled={pageData.max === currentPage} where={'filter'}>
            <button
              disabled={pageData.max === currentPage}
              onClick={() => {
                handlePageFilterButton(+1);
              }}
              className={"flex flex-row justify-between items-center hover:text-gray-900 disabled:text-gray-400"}
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
          </ScrollComponent>
        </div>
      </div>

      {/*  TAILWIND CLASS CREATOR */}
      <div>
        {/* BackGround*/}
        <div
          className={
            "hover:bg-slate-600 hover:bg-fuchsia-400 hover:bg-green-400 hover:bg-cyan-400 hover:bg-lime-400 hover:bg-rose-400 hover:bg-indigo-400"
          }
        ></div>
        {/* TEXT */}
        <div
          className={
            "text-slate-600 text-fuchsia-400 text-green-400 text-cyan-400 text-lime-400 text-rose-400 text-indigo-400"
          }
        ></div>
        {/* BORDER*/}
        <div
          className={
            "border-slate-600 border-fuchsia-400 border-green-400 border-cyan-400 border-lime-400 border-rose-400 border-indigo-400"
          }
        ></div>
        <div
          className={
            "hover:border-slate-400 hover:border-fuchsia-300 hover:border-green-300 hover:border-cyan-300 hover:border-lime-300 hover:border-rose-300 hover:border-indigo-300"
          }
        ></div>
      </div>

    </div>
  );
};
export default DestekIndex;
