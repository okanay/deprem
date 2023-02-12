import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { motion as m } from "framer-motion";
import Alert from "../../components/UI/Alert";

const Talep = () => {
  const [selected, setSelected] = useState("TFDefault");
  const [createButton, setCreateButton] = useState({
    color: "slate-600",
    url: "/",
  });

  const talepFilter = [
    {
      name: "TFDefault",
      src: "/menuIcons/manage.png",
      alt: "Hepsi",
      description: "Hepsi",
      color: "slate-600",
      hover: "group-hover:border-slate-400",
      url: "/form",
    },
    {
      name: "TFBarinma",
      src: "/menuIcons/cabin.png",
      alt: "Barınmaya İhtiyacım Var",
      description: "Barınma",
      color: "red-400",
      hover: "group-hover:border-red-300",
      url: "/form/bt",
    },
    {
      name: "TFCadir",
      src: "/menuIcons/camp.png",
      alt: "Çadıra İhtiyacım Var",
      description: "Çadır",
      color: "pink-400",
      hover: "group-hover:border-pink-300",
      url: "/form/ct",
    },
    {
      name: "TFYemek",
      src: "/menuIcons/foods.png",
      alt: "Gıdaya İhtiyacım Var",
      description: "Gıda",
      color: "emerald-400",
      hover: "group-hover:border-emerald-300",
      url: "/form/gt",
    },
    {
      name: "TFIlac",
      src: "/menuIcons/medicine.png",
      alt: "İlaca İhtiyacım Var",
      description: "İlaç",
      color: "teal-400",
      hover: "group-hover:border-teal-300",
      url: "/form/it",
    },
    {
      name: "TFHijyen",
      src: "/menuIcons/amenities.png",
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
      y: -10,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      scaleY: 1,
      y: -2,
      display: "block",
      scaleX: 0.95,
      transition: { duration: 0.5, type: "spring" },
    },
  };

  const imageContainer = {
    initial: {},
    unselected: {
      y: 0,
      scale : 1,
      transition: { duration: 0.3 },
    },
    selected: {
      y: -4,
      scale : 1.15,
      transition: { duration: 0.5, type: "spring" },
    },
  };

  const handleFilterForm = (item) => {
    const selectedValue = { color: item.color, url: item.url };
    setCreateButton(selectedValue);

    setSelected(item.name);
  };

  return (
    <div
      className={
        "bg-gray-50 max-w-screen-phoneXS phoneLG:max-w-screen-phoneLG phone:max-w-screen-phone w-full m-20 my-8 mx-auto px-4 py-8"
      }
    >
      {/*Uyari*/}

      <Alert title={"Lütfen Dikkat!"}>
        İnsanlara yardım edebileceğinizden emin olmadan iletişim teklifinde
        bulunmayın.
      </Alert>

      {/*Baslik*/}
      <div className="my-6 flex justify-between items-center text-center">
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
          href={createButton.url}
          className={`mb-4 py-2 px-2 rounded-md bg-slate-50 border-[0.01rem] border-gray-200 text-${createButton.color} shadow shadow-gray-300/30 uppercase font-bold text-sm transition-colors duration-300 hover:bg-${createButton.color} hover:text-slate-50`}
        >
          YENİ-TALEP
        </Link>
      </div>

      {/*  FILTER*/}
      <div
        className={
          "flex flex-row justify-center gap-4 bg-gray-50 w-full pb-7 pt-2 border-b-2 border-gray-800 rounded-[2px]"
        }
      >
        {talepFilter.map((item) => {
          return (
            <div className={'relative flex flex-col items-center text-center group'}>
              <m.div
                key={item.name}
                variants={imageContainer}
                initial={"unselected"}
                animate={selected === item.name ? "selected" : "unselected"}
              >
                <button
                  onClick={() => {
                    handleFilterForm(item);
                  }}
                  className={`w-10 h-10 p-2 border-2 transition duration-300 rounded group ${
                    selected === item.name
                      ? `border-${item.color} border-b-[4px]`
                      : ""
                  } `}
                >
                  <Image
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
                animate={selected === item.name ? "open" : "hidden"}
                htmlFor={item.name}
                className={`absolute top-10 text-gray-800 font-light border-b-2 mt-1.5 w-[4rem] border-${item.color} ${item.hover}`}
              >
                {item.description}
              </m.label>
            </div>
          );
        })}
      </div>

      {/*  TAILWIND CLASS CREATOR*/}
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
