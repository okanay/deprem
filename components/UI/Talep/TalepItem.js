import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import TalepStatus from "./TalepStatus";
import { getImageData, imageData } from "../../../helper/getImageData";
import TalepState from "./TalepState";
import { getTimeDiffString } from "../../../helper/getDiffTime";

const TalepItem = ({ item }) => {

  const image = imageData.filter((image) => {
    if (image.name === item.type) {
      return image;
    }
  });
  const time = getTimeDiffString(item.time)

  return (
    <div
      className={
        "bg-neutral-50 text-gray-800/90 w-full flex flex-col rounded border-b border-t border-slate-200/40 relative font-semibold relative"
      }
    >
      {/* TELEFON NUMARASI - AD - DURUM - ID - TALEP GORSELI */}
      <div
        className={
          "absolute -top-[1rem] right-3 w-full flex flex-row gap-2 justify-end text-[0.5rem] items-center"
        }
      >
        {/* TELEFON NUMARASI */}
        <div
          className={"bg-gray-100 px-2 py-1 rounded border border-slate-700/10"}
        >
          <p className={"p-[0.02rem] mt-0.5"}>{item.phone}</p>
        </div>

        {/* ISIM SOYISIM */}

        <div
          className={"bg-gray-100 px-2 py-1 rounded border border-slate-700/10"}
        >
          <p className={"p-[0.02rem] mt-0.5"}>{item.name}</p>
        </div>

        {/* TALEP ID */}

        <div
          className={"bg-gray-100 px-2 py-1 rounded border border-slate-700/10"}
        >
          <p className={"p-[0.02rem] mt-0.5"}>#{item.id}</p>
        </div>

        {/* DURUM BILGILENDIRMESI */}

        <TalepStatus status={item.status} />


        {/* KATEGORI RESMI */}

        <div
          className={"bg-gray-100 px-2 py-1 rounded border border-slate-700/10"}
        >
          <Image
            priority={true}
            loading={'eager'}
            src={image[0].src}
            alt={image[0].alt}
            width={200}
            height={200}
            className={"w-4 h-4 mt-0.5"}
          />
        </div>
      </div>

      {/* YARDIM BEKLENIYOR - LOKASYON - DAKIKA - DETAYA GIT */}
      <div
        className={
          "w-full flex flex-row justify-between px-3 text-gray-600/90 items-start mt-[1.3rem] items-start"
        }
      >
        {/* YARDIM BEKLENIYOR VE LOKASYON */}
        <div
          className={
            "flex flex-col items-start bg-gray-100/20 p-2 rounded border border-neutral-400/10"
          }
        >
          <TalepState state={item.state} />
          <p className={""}>
            {item.city} \ {item.street}
          </p>
        </div>

        {/* GECEN SURE VE DETAYA GIT BAGLANTISI*/}
        <div
          className={
            "flex flex-col items-end bg-gray-100/20 p-2 rounded border border-neutral-400/10"
          }
        >
          <p className={"text-gray-500/80"}>{time}</p>
          <Link
            href={`/form/talep/${item.id}`}
            className={"text-blue-400 font-semibold"}
          >
            Detaya Git
          </Link>
        </div>
      </div>

      {/* ACIKLAMA OZETI */}
      <div
        className={
          "flex flex-col mx-3 mt-3 mb-4 h-full bg-gray-100/60 p-2 rounded border border-neutral-400/10"
        }
      >
        <p className={"py-1 px-2 text-neutral-600"}>
          {item.details}
        </p>
      </div>

      {/* GORUNTULENME - ILETISIM SAYISI */}
      <div
        className={
          "absolute -bottom-[0.75rem] right-3 w-full flex flex-row gap-2 justify-end text-[0.5rem] items-center"
        }
      >
        {/* ESNEYEN DIV */}
        <div
          className={
            "bg-gray-100 px-2 py-0.5 rounded border border-slate-700/10 flex flex-row justify-around gap-2"
          }
        >
          {/* GORUNTULENME */}
          <p className={"flex flex-row justify-between items-center gap-1"}>
            <Image
              loading={'eager'}

              priority={true}
              src={"/svg/statistics.svg"}
              alt={"Goruntulenme Sayisi"}
              width={200}
              height={200}
              className={"w-2 h-2"}
            />
            <span className={"pt-[1px]"}>0</span>
          </p>

          {/* AYIRMA CIZGISI */}
          <div
            className={`border-r-[1px] border-r-slate-800/20 w-1 h-[1rem]`}
          ></div>

          {/* ILETISIM SAYISI */}
          <p className={"flex flex-row justify-between items-center gap-1"}>
            <Image
              loading={'eager'}

              priority={true}
              src={"/svg/chat.svg"}
              alt={"Iletisim Sayisi"}
              width={200}
              height={200}
              className={"w-2.5 h-2.5"}
            />
            <span className={"pt-[1px]"}>0</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TalepItem;
