import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { motion as m } from "framer-motion";
import Alert from "../../components/UI/Alert";

const Talep = () => {
  const [selected, setSelected] = useState("TFDefault");
  const talepFilter = [
    {
      name: "TFDefault",
      src: "/menuIcons/manage.png",
      alt: "Hepsi",
      description: "Hepsi",
      color : "border-slate-600 group-hover:border-slate-400",
    },
    {
      name: "TFBarinma",
      src: "/menuIcons/cabin.png",
      alt: "Barınmaya İhtiyacım Var",
      description: "Barınma",
      color : "border-red-400 group-hover:border-red-300",
    },
    {
      name: "TFCadir",
      src: "/menuIcons/camp.png",
      alt: "Çadıra İhtiyacım Var",
      description: "Çadır",
      color : "border-pink-400 group-hover:border-pink-300",
    },
    {
      name: "TFYemek",
      src: "/menuIcons/foods.png",
      alt: "Gıdaya İhtiyacım Var",
      description: "Gıda",
      color : "border-emerald-400 group-hover:border-emerald-300",
    },
    {
      name: "TFIlac",
      src: "/menuIcons/medicine.png",
      alt: "İlaca İhtiyacım Var",
      description: "İlaç",
      color : "border-teal-400 group-hover:border-teal-300",
    },
    {
      name: "TFHijyen",
      src: "/menuIcons/amenities.png",
      alt: "Hijyen Ürünlerine İhtiyacım Var",
      description: "Hijyen",
      color : "border-blue-400 group-hover:border-blue-300",
    },
  ];

  const labelContainer = {
    initial: {},
    hidden: {
      opacity: 0,
      scaleY: 0,
      y: -10,
      transition: { duration: 0.25 },
    },
    open: {
      opacity: 1,
      scaleY: 1,
      y: 0,
      display: "block",
      scaleX: 0.95,
      transition: { duration: 0.5, type: "spring" },
    },
  };
  const handleFilterForm = (formName) => {
    setSelected(formName);
  };

  return (
    <div
      className={
        "bg-gray-50 max-w-screen-phoneXS phoneLG:max-w-screen-phoneLG phone:max-w-screen-phone w-full m-20 my-8 mx-auto px-4 py-4"
      }
    >
      {/*Uyari*/}
      <Alert title={"Lütfen Dikkat!"}>
        İnsanlara yardım edebileceğinizden emin olmadan iletişim teklifinde
        bulunmayın.
      </Alert>

      {/*Baslik*/}
      <div className="mt-8 flex justify-between">
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
      </div>

      {/*  Talep Iconlari olsun ve o iconlara gore filtreleme olsun.. baslayalim..*/}
      <div
        className={
          "flex flex-row justify-center gap-4 bg-gray-50 w-full pb-7 pt-2 border-b-2 border-gray-800 rounded-[2px]"
        }
      >
        {talepFilter.map((item) => {
          return (
            <button
              key={item.name}
              onClick={() => {
                handleFilterForm(item.name);
              }}
              className={`w-10 h-10 p-2 border-2 transition duration-300 rounded flex flex-col items-center group ${
                selected === item.name
                  ? `${item.color} border-b-[4px]`
                  : ""
              } relative`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={"200"}
                height={"200"}
              />

              <m.label
                variants={labelContainer}
                initial={"hidden"}
                animate={selected === item.name ? "open" : "hidden"}
                htmlFor={item.name}
                className={`absolute top-10 text-gray-800 font-light border-b-2 pb-0.5 w-[4rem] ${item.color}`}
              >
                {item.description}
              </m.label>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Talep;
