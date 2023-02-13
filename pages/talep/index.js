import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { motion as m } from "framer-motion";
import Alert from "../../components/UI/Alert";
import Diveded from "../../components/UI/diveded";
import CostumInput from "../../components/UI/CostumInput";

const talepFilter = [
  {
    name: "TFDefault",
    src: "/menuIcons/manage.png",
    alt: "Hepsi",
    description: "Hepsi",
    color: "slate-600",
    hover: "group-hover:border-slate-400",
    url: "/",
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

  const [selected, setSelected] = useState("TFDefault");
  const [createButton, setCreateButton] = useState({
    color: "slate-600",
    url: "/",
  });
  const handleFilterForm = (item) => {
    const selectedValue = { color: item.color, url: item.url };
    setCreateButton(selectedValue);

    setSelected(item.name);
  };

  return (
    <div className={"bg-gray-50 max-w-screen-phoneXS phoneLG:max-w-screen-phoneLG phone:max-w-screen-phone w-full m-20 my-8 mx-auto px-4 py-8"}>

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
          href={createButton.url}
          className={`mb-4 py-2 px-2 rounded-md bg-slate-50 border-[0.01rem] border-gray-200 text-${createButton.color} shadow shadow-gray-300/30 uppercase font-bold text-sm transition-colors duration-300 hover:bg-${createButton.color} hover:text-slate-50`}
        >
          YENİ-TALEP
        </Link>
      </div>

      {/* FILTER */}
      <div>
        {/* ICON FILTER */}
        <div className={"flex flex-row justify-center gap-4 bg-gray-50 pb-7 pt-2 rounded-[2px] border-b border-b-gray-300 w-full"}>
            {talepFilter.map((item) => {
              return (
                <div className={"relative flex flex-col items-center text-center group"} key={item.name}>
                  <m.div
                    variants={imageContainer}
                    initial={"unselected"}
                    animate={selected === item.name ? "selected" : "unselected"}
                  >
                    <button
                      onClick={() => {handleFilterForm(item);}}
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
                    className={`absolute top-10 text-gray-800 font-light border-b-[3px] mt-1.5 w-[4rem] border-${item.color} ${item.hover}`}
                  >
                    {item.description}
                  </m.label>
                </div>
              );
            })}
        </div>
      </div>

      {/* IHTIYAC TALEP FORMLARI (MAP EDILEN DIV) */}
      <div className="flex flex-col gap-10 mt-14 text-[0.5rem] phone:text-[0.55rem] phoneLG:text-[0.7rem]">

        {/* 1 ADET TALEP KUTUSU */}
        <div className={"bg-neutral-50 text-gray-600/90 pb-0 w-full flex flex-col rounded border border-slate-700/40 drop-shadow-lg shadow-gray-300/10 relative font-semibold relative"}>

          {/* TELEFON NUMARASI - AD - DURUM - ID - TALEP GORSELI */}
          <div className={"absolute -top-[1rem] -right-[0.05rem] w-full flex flex-row gap-2 justify-end text-[0.5rem] items-center"}>

            {/* TELEFON NUMARASI */}
            <div className={"bg-gray-100 px-2 py-1 rounded border border-slate-700/40"}>
              <p className={"p-[0.02rem] mt-0.5"}>532 789 54 32</p>
            </div>

            {/* ISIM SOYISIM */}

            <div className={"bg-gray-100 px-2 py-1 rounded border border-slate-700/40"}>
              <p className={"p-[0.02rem] mt-0.5"}>Okan Ay</p>
            </div>

            {/* DURUM BILGILENDIRMESI */}

            <div className={"bg-red-400 px-2 py-1 rounded border border-slate-700/40 text-gray-700"}>
              <p className={"p-[0.02rem] mt-0.5"}>Kritik</p>
            </div>

            {/* TALEP ID */}

            <div className={"bg-sky-400 px-2 py-1 rounded border border-slate-700/40 text-gray-700"}>
              <p className={"p-[0.02rem] mt-0.5"}>#O982A</p>
            </div>

            {/* KATEGORI RESMI */}

            <div className={"bg-gray-100 px-2 py-1 rounded border border-slate-700/40"}>
              <Image
                src={talepFilter[1].src}
                alt={talepFilter[0].alt}
                width={200}
                height={200}
                className={"w-4 h-4 mt-0.5"}
              />
            </div>

          </div>

          {/* YARDIM BEKLENIYOR - LOKASYON - DAKIKA - DETAYA GIT */}
          <div className={"w-full flex flex-row justify-between px-2 text-gray-600/90 items-start mt-[1.1rem] items-start"}>
            {/* YARDIM BEKLENIYOR VE LOKASYON */}
            <div className={"flex flex-col items-start"}>
              <p className={"animate-pulse text-red-300"}>
                Yardim Bekleniyor!
              </p>
              <p className={""}>Merkez/Kahramanmaraş</p>
            </div>

            {/* GECEN SURE VE DETAYA GIT BAGLANTISI*/}
            <div className={"flex flex-col items-end"}>
              <p className={""}>8s 45dk</p>
              <Link
                href={"/"}
                className={"text-blue-500 font-semibold underline"}
              >
                Detaya Git
              </Link>
            </div>
          </div>

          {/* ACIKLAMA OZETI */}
          <div className={"flex flex-col mx-4 mt-2 mb-4 h-full bg-gray-100 rounded"}>
            <p className={"py-1 px-2"}>
              <span className={"text-semibold text-gray-900"}>ÖZET :</span>{" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              adipisci asperiores atque corporis deleniti dicta dignissimos,
              dolorum eaque eius hic itaque laudantium odit optio porro quas
              quibusdam quidem reiciendis tempora.{" "}
            </p>
          </div>


          {/* GORUNTULENME - ILETISIM SAYISI */}
          <div className={"absolute -bottom-[0.75rem] -right-[0.05rem] w-full flex flex-row gap-2 justify-end text-[0.5rem] items-center"}>
            {/* ESNEYEN DIV */}
            <div className={"bg-gray-100 px-2 py-0.5 rounded border border-slate-700/40 flex flex-row justify-around gap-2"}>
              {/* GORUNTULENME */}
              <p className={'flex flex-row justify-between items-center gap-1'}>
                <Image src={'/formIcons/statistics.png'} alt={'Goruntulenme Sayisi'} width={200} height={200} className={'w-2 h-2'}/>
                <span className={'pt-[1px]'}>23</span>
              </p>

              {/* AYIRMA CIZGISI */}
              <div className={`border-r-[1px] border-r-slate-800/50 w-1 h-[1rem]`}></div>


              {/* ILETISIM SAYISI */}
              <p className={'flex flex-row justify-between items-center gap-1'}>
                <Image src={'/formIcons/chat.png'} alt={'Iletisim Sayisi'} width={200} height={200} className={'w-2.5 h-2.5'}/>
                <span className={'pt-[1px]'}>0</span>
              </p>
            </div>

          </div>
        </div>
        <div className={"bg-neutral-50 text-gray-600/90 pb-0 w-full flex flex-col rounded border border-slate-700/40 drop-shadow-lg shadow-gray-300/10 relative font-semibold relative"}>

          {/* TELEFON NUMARASI - AD - DURUM - ID - TALEP GORSELI */}
          <div className={"absolute -top-[1rem] -right-[0.05rem] w-full flex flex-row gap-2 justify-end text-[0.5rem] items-center"}>

            {/* TELEFON NUMARASI */}
            <div className={"bg-gray-100 px-2 py-1 rounded border border-slate-700/40"}>
              <p className={"p-[0.02rem] mt-0.5"}>532 789 54 32</p>
            </div>

            {/* ISIM SOYISIM */}

            <div className={"bg-gray-100 px-2 py-1 rounded border border-slate-700/40"}>
              <p className={"p-[0.02rem] mt-0.5"}>Okan Ay</p>
            </div>

            {/* DURUM BILGILENDIRMESI */}

            <div className={"bg-red-400 px-2 py-1 rounded border border-slate-700/40 text-gray-700"}>
              <p className={"p-[0.02rem] mt-0.5"}>Kritik</p>
            </div>

            {/* TALEP ID */}

            <div className={"bg-sky-400 px-2 py-1 rounded border border-slate-700/40 text-gray-700"}>
              <p className={"p-[0.02rem] mt-0.5"}>#O982A</p>
            </div>

            {/* KATEGORI RESMI */}

            <div className={"bg-gray-100 px-2 py-1 rounded border border-slate-700/40"}>
              <Image
                src={talepFilter[1].src}
                alt={talepFilter[0].alt}
                width={200}
                height={200}
                className={"w-4 h-4 mt-0.5"}
              />
            </div>

          </div>

          {/* YARDIM BEKLENIYOR - LOKASYON - DAKIKA - DETAYA GIT */}
          <div className={"w-full flex flex-row justify-between px-2 text-gray-600/90 items-start mt-[1.1rem] items-start"}>
            {/* YARDIM BEKLENIYOR VE LOKASYON */}
            <div className={"flex flex-col items-start"}>
              <p className={"animate-pulse text-red-300"}>
                Yardim Bekleniyor!
              </p>
              <p className={""}>Merkez/Kahramanmaraş</p>
            </div>

            {/* GECEN SURE VE DETAYA GIT BAGLANTISI*/}
            <div className={"flex flex-col items-end"}>
              <p className={""}>8s 45dk</p>
              <Link
                href={"/"}
                className={"text-blue-500 font-semibold underline"}
              >
                Detaya Git
              </Link>
            </div>
          </div>

          {/* ACIKLAMA OZETI */}
          <div className={"flex flex-col mx-4 mt-2 mb-4 h-full bg-gray-100 rounded"}>
            <p className={"py-1 px-2"}>
              <span className={"text-semibold text-gray-900"}>ÖZET :</span>{" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              adipisci asperiores atque corporis deleniti dicta dignissimos,
              dolorum eaque eius hic itaque laudantium odit optio porro quas
              quibusdam quidem reiciendis tempora.{" "}
            </p>
          </div>


          {/* GORUNTULENME - ILETISIM SAYISI */}
          <div className={"absolute -bottom-[0.75rem] -right-[0.05rem] w-full flex flex-row gap-2 justify-end text-[0.5rem] items-center"}>
            {/* ESNEYEN DIV */}
            <div className={"bg-gray-100 px-2 py-0.5 rounded border border-slate-700/40 flex flex-row justify-around gap-2"}>
              {/* GORUNTULENME */}
              <p className={'flex flex-row justify-between items-center gap-1'}>
                <Image src={'/formIcons/statistics.png'} alt={'Goruntulenme Sayisi'} width={200} height={200} className={'w-2 h-2'}/>
                <span className={'pt-[1px]'}>23</span>
              </p>

              {/* AYIRMA CIZGISI */}
              <div className={`border-r-[1px] border-r-slate-800/50 w-1 h-[1rem]`}></div>


              {/* ILETISIM SAYISI */}
              <p className={'flex flex-row justify-between items-center gap-1'}>
                <Image src={'/formIcons/chat.png'} alt={'Iletisim Sayisi'} width={200} height={200} className={'w-2.5 h-2.5'}/>
                <span className={'pt-[1px]'}>0</span>
              </p>
            </div>

          </div>
        </div>
        <div className={"bg-neutral-50 text-gray-600/90 pb-0 w-full flex flex-col rounded border border-slate-700/40 drop-shadow-lg shadow-gray-300/10 relative font-semibold relative"}>

          {/* TELEFON NUMARASI - AD - DURUM - ID - TALEP GORSELI */}
          <div className={"absolute -top-[1rem] -right-[0.05rem] w-full flex flex-row gap-2 justify-end text-[0.5rem] items-center"}>

            {/* TELEFON NUMARASI */}
            <div className={"bg-gray-100 px-2 py-1 rounded border border-slate-700/40"}>
              <p className={"p-[0.02rem] mt-0.5"}>532 789 54 32</p>
            </div>

            {/* ISIM SOYISIM */}

            <div className={"bg-gray-100 px-2 py-1 rounded border border-slate-700/40"}>
              <p className={"p-[0.02rem] mt-0.5"}>Okan Ay</p>
            </div>

            {/* DURUM BILGILENDIRMESI */}

            <div className={"bg-red-400 px-2 py-1 rounded border border-slate-700/40 text-gray-700"}>
              <p className={"p-[0.02rem] mt-0.5"}>Kritik</p>
            </div>

            {/* TALEP ID */}

            <div className={"bg-sky-400 px-2 py-1 rounded border border-slate-700/40 text-gray-700"}>
              <p className={"p-[0.02rem] mt-0.5"}>#O982A</p>
            </div>

            {/* KATEGORI RESMI */}

            <div className={"bg-gray-100 px-2 py-1 rounded border border-slate-700/40"}>
              <Image
                src={talepFilter[1].src}
                alt={talepFilter[0].alt}
                width={200}
                height={200}
                className={"w-4 h-4 mt-0.5"}
              />
            </div>

          </div>

          {/* YARDIM BEKLENIYOR - LOKASYON - DAKIKA - DETAYA GIT */}
          <div className={"w-full flex flex-row justify-between px-2 text-gray-600/90 items-start mt-[1.1rem] items-start"}>
            {/* YARDIM BEKLENIYOR VE LOKASYON */}
            <div className={"flex flex-col items-start"}>
              <p className={"animate-pulse text-red-300"}>
                Yardim Bekleniyor!
              </p>
              <p className={""}>Merkez/Kahramanmaraş</p>
            </div>

            {/* GECEN SURE VE DETAYA GIT BAGLANTISI*/}
            <div className={"flex flex-col items-end"}>
              <p className={""}>8s 45dk</p>
              <Link
                href={"/"}
                className={"text-blue-500 font-semibold underline"}
              >
                Detaya Git
              </Link>
            </div>
          </div>

          {/* ACIKLAMA OZETI */}
          <div className={"flex flex-col mx-4 mt-2 mb-4 h-full bg-gray-100 rounded"}>
            <p className={"py-1 px-2"}>
              <span className={"text-semibold text-gray-900"}>ÖZET :</span>{" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              adipisci asperiores atque corporis deleniti dicta dignissimos,
              dolorum eaque eius hic itaque laudantium odit optio porro quas
              quibusdam quidem reiciendis tempora.{" "}
            </p>
          </div>


          {/* GORUNTULENME - ILETISIM SAYISI */}
          <div className={"absolute -bottom-[0.75rem] -right-[0.05rem] w-full flex flex-row gap-2 justify-end text-[0.5rem] items-center"}>
            {/* ESNEYEN DIV */}
            <div className={"bg-gray-100 px-2 py-0.5 rounded border border-slate-700/40 flex flex-row justify-around gap-2"}>
              {/* GORUNTULENME */}
              <p className={'flex flex-row justify-between items-center gap-1'}>
                <Image src={'/formIcons/statistics.png'} alt={'Goruntulenme Sayisi'} width={200} height={200} className={'w-2 h-2'}/>
                <span className={'pt-[1px]'}>23</span>
              </p>

              {/* AYIRMA CIZGISI */}
              <div className={`border-r-[1px] border-r-slate-800/50 w-1 h-[1rem]`}></div>


              {/* ILETISIM SAYISI */}
              <p className={'flex flex-row justify-between items-center gap-1'}>
                <Image src={'/formIcons/chat.png'} alt={'Iletisim Sayisi'} width={200} height={200} className={'w-2.5 h-2.5'}/>
                <span className={'pt-[1px]'}>0</span>
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* SAYFA DEGISTIR*/}
      <div className="flex flex-col justify-between items-center mt-11 gap-4">

        <div className={'border-b border-b-gray-300 drop-shadow shadow-gray-100 w-full h-0.5 rounded-md'}/>

        <div className={'flex flex-row justify-between items-center text-xs w-full text-gray-600 '}>
          {/*  SOL TARAF */}
          <button className={'flex flex-row justify-between items-center hover:text-gray-400'}>
            <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd">
              </path>
            </svg>
            <span className={'mt-0.5'}>Önceki</span>
          </button>

          {/* SAYFA SAYISI*/}
          <div className={'flex flex-row justify-between items-center gap-4 text-[0.8rem] font-semibold'}>
            <button className="hover:text-gray-400 text-blue-400">1</button>
            <button className="hover:text-gray-400">2</button>
            <button className="hover:text-gray-400">3</button>
            <p>...</p>
            <button className="hover:text-gray-400">8</button>
            <button className="hover:text-gray-400">9</button>
            <button className="hover:text-gray-400">10</button>
          </div>

          {/*  SAG TARAF */}
          <button className={'flex flex-row justify-between items-center hover:text-gray-400'}>
            <span className={'mt-0.5'}>Sonraki</span>
            <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd">
              </path>
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
