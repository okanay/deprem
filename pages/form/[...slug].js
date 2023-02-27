import { useRouter } from "next/router";
import React, { useState } from "react";
import useGetDummyData from "../../components/costumHooks/useGetDummyData";

import Alert from "../../components/UI/Elements/Alert";
import Image from "next/image";
import DestekState from "../../components/UI/Destek/DestekState";
import TalepState from "../../components/UI/Talep/TalepState";
import { determineCaseSuffix, determineToSuffix } from "../../helper/determine";
const FormItem = () => {
  const router = useRouter();
  const [type = "", id = ""] = router.query.slug || [];
  const [data, isLoading, error] = useGetDummyData(type, id);
  const [messageState, setMessageState] = useState("Comments");

  if (error.status) {
    return <p>Hata meydana geldi : {error.message}</p>;
  } else if (isLoading) {
    return <p>Loading...</p>;
  }

  let info1 = data.info1 ? data.info1 : "";
  let info2 = data.info2 ? data.info1 : "";
  let info3 = data.info3 ? data.info1 : "";

  info2 = data.type === "ntd" ? data.info2 + determineToSuffix(data.info2) : data.info2
  info3 = data.type === "ntd" ? data.info3 + determineCaseSuffix(data.info3) : data.info3

  return (
    <div className={"bg-gray-50 max-w-screen-phoneXS phoneLG:max-w-screen-phoneLG phone:max-w-screen-phone w-full"}>

      {/* Uyari / Isim, Form Adi / Info1, Info2, Info3 / Detay / Adres /  Yorum Yap, Mesaj Gönder  / Bir seyler yaz.. = Gonder Butonu*/}
      <div className={"pt-8 pb-8 px-4 mx-auto"}>
        {/* Uyari / Isim, Form Adi */}
        <div className={""}>
          {/* Uyari */}
          <Alert title={"Lütfen Dikkat!"}>
            Lütfen iletişime geçmeden önce formu dikkatlice okuyun. Direkt
            aramaktan çekinin, mesaj atarak iletişime başlayabilirsiniz.
          </Alert>

          {/* Isim, Form Adi */}
          <div className={"flex flex-row justify-between items-center mt-6"}>
            <div className={"relative flex flex-col justify-start items-start"}>
              <div
                className={
                  "flex flex-row justify-start items-center gap-2 pt-1"
                }
              >
                <Image
                  priority={true}
                  loading={"eager"}
                  src={"/svg/manage.svg"}
                  width={"200"}
                  height={"200"}
                  alt={"profile"}
                  className={"w-5 h-5"}
                />
                <h1
                  className={
                    "text-[1.1rem] font-light font-light text-neutral-600"
                  }
                >
                  {data.name}
                </h1>
              </div>
              <div className={"w-max font-light font-serif text-neutral-600 "}>
                {type === "destek" ? (
                  <DestekState state={data.state} />
                ) : (
                  <TalepState state={data.state} />
                )}
              </div>
            </div>

            <p
              className={
                "px-1 py-0.5 border-b border-neutral-800 text-[1.1rem] font-serif text-neutral-600"
              }
            >
              {data.typeName}
            </p>
          </div>
        </div>

        {/* Info1, Info2, Info3 */}
        {data.info1 && (<div className={"flex flex-row justify-end items-end text-end w-full pr-2 gap-2 mt-8"}>
            <div
              className={
                "text-sm bg-slate-100/20 border border-gray-400/50 rounded-lg px-2 py-1 text-neutral-600"
              }
            >
              {data.info1 && <h1 className={'text-xs'}>{info1}</h1>}
            </div>

            {data.info2 && (
              <div
                className={
                  "text-sm bg-slate-100/20 border border-gray-400/50 rounded-lg px-2 py-1 text-neutral-600"
                }
              >
                {data.info2 && <h1 className={'text-xs'}>{info2}</h1>}
              </div>
            )}

            {data.info3 && (
              <div
                className={
                  "text-sm bg-slate-100/20 border border-gray-400/50 rounded-lg px-2 py-1 text-neutral-600"
                }
              >
                {data.info3 && <h1 className={'text-xs'}>{info3}</h1>}
              </div>
            )}
          </div>)}

        {/* Detay */}
        <div className={`font-light font-serif text-neutral-600 w-full mx-auto bg-neutral-100 rounded py-4 px-2 mt-4 mb-4 ${type === "talep" && "mt-12"}`}>
          <p>{data.details}</p>
        </div>

        {/* Adres */}
        <div className={"flex flex-col justify-end items-end text-end px-2"}>
          <div
            className={
              "flex flex-row justify-end w-full font-light font-serif text-neutral-600"
            }
          >
            {data.street && (
              <h1>
                {data.city} \ {data.street}
              </h1>
            )}
          </div>
          <div
            className={
              "flex flex-row justify-end w-full font-light text-neutral-600 text-xs"
            }
          >
            {data.addressDes && <h1>{data.addressDes}</h1>}
          </div>
        </div>

      </div>

      {/* İletişime Geç */}
      <div className={"w-full flex flex-col"}>

        {/* İletişime Geç Baslik ve İletişime Geç Image*/}
        <div className={"px-4 pt-4 pb-2 flex flex-col justify-start items-start"}>
          <div
            className={
              "flex flex-row justify-start items-center gap-2 pt-1"
            }
          >
            <Image
              priority={true}
              loading={"eager"}
              src={"/svg/email.svg"}
              width={"200"}
              height={"200"}
              alt={"profile"}
              className={"w-5 h-5"}
            />
            <h1
              className={
                "text-[1.1rem] font-light font-light text-neutral-600"
              }
            >
              İletişime Geç
            </h1>
          </div>
        </div>
        {/* Yorum Yap, Mesaj Gönder */}
        <div className={"flex justify-center items-center w-full mt-4 gap-2"}>
          <button
            onClick={() => {
              setMessageState("Comments");
            }}
            className={`py-1 text-sm font-OpenSans duration-300 font-semibold transition ${
              messageState === "Comments"
                ? "text-blue-400 hover:text-blue-300"
                : "text-neutral-400 hover:text-neutral-600"
            } `}
          >
            Yorum Yap
          </button>
          <div className={"border-r w-0.5 h-5 border-neutral-600"}></div>
          <button
            onClick={() => {
              setMessageState("Message");
            }}
            className={`py-1 text-sm font-OpenSans duration-300 font-semibold transition ${
              messageState === "Message"
                ? "text-blue-400 hover:text-blue-300"
                : "text-neutral-400 hover:text-neutral-600"
            }`}
          >
            Mesaj Gönder
          </button>
        </div>
        {/* Bir seyler yaz.. ! Gonder Butonu */}
        <div className={"px-4 flex flex-col justify-start gap-4"}>
          <textarea
            className={
              "focus:outline-none transition duration-300 focus:border-slate-800 w-full h-24 bg-white rounded mt-4 px-2 py-1.5 placeholder:text-gray-500/40"
            }
            rows={10}
            maxLength={240}
            placeholder={"Bir seyler yaz.."}
            name={"comments"}
          />

          <div className={"flex flex-row justify-end w-full items-end"}>
            <button
              className={
                "px-2 py-1 rounded bg-blue-400 border border-neutral-400/40 text-white text-sm"
              }
            >
              Gönder
            </button>
          </div>
        </div>

        {/* Yorumlar ve Yorumlar Image*/}
        <div className={"px-4 pt-2 pb-4 flex flex-col justify-start items-start border-b border-gray-600/20"}>
          <div
            className={
              "flex flex-row justify-start items-center gap-2 pt-1"
            }
          >
            <Image
              priority={true}
              loading={"eager"}
              src={"/svg/details.svg"}
              width={"200"}
              height={"200"}
              alt={"profile"}
              className={"w-5 h-5"}
            />
            <h1
              className={
                "text-[1.1rem] font-light font-light text-neutral-600"
              }
            >
              Yorumlar
            </h1>
          </div>
        </div>

        {/* 1. Yorum*/}
        <div className={"border-b border-gray-600/20 w-full py-6 text-sm"}>

          {/* Profile Photo, Name, Date*/}
          <div className={"px-4 flex flex-row items-center gap-2"}>
            <div className={"rounded-full w-12 h-12 border-[2px] border-white bg-violet-500"} />
            <div className={"flex flex-col text-start text-xs text-neutral-700"}>
              <p>Okan Ay</p>
              <p>27.02.2023</p>
            </div>
          </div>

          {/* Message*/}
          <div className={'py-4 px-4'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
            laudantium magnam maiores nesciunt, officia praesentium saepe?
          </div>

        {/*  Raporla Begen Begenme Goruntulenme */}
          <div className={'flex flex-row justify-between px-4 items-center'}>

            <button className={"px-1 py-1 rounded bg-white border border-neutral-400/40 text-neutral-800 text-xs"}>
              Raporla
            </button>

            <div className={'flex flex-row justify-end gap-4'}>
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
                <span className={"pt-[1px] text-xs"}>0</span>
              </p>
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
                <span className={"pt-[1px] text-xs"}>0</span>
              </p>
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
                <span className={"pt-[1px] text-xs"}>0</span>
              </p>
            </div>

          </div>
        </div>
        {/* 2. Yorum*/}
        <div className={"border-b border-gray-600/20 w-full py-6 text-sm"}>

          {/* Profile Photo, Name, Date*/}
          <div className={"px-4 flex flex-row items-center gap-2"}>
            <div className={"rounded-full w-12 h-12 border-[2px] border-white bg-emerald-400"} />
            <div className={"flex flex-col text-start text-xs text-neutral-700"}>
              <p>Berkan Kutlu</p>
              <p>22.02.2023</p>
            </div>
          </div>

          {/* Message*/}
          <div className={'py-4 px-4'}>
            Dolorem earum esse fugiat iusto labore maxime odio perspiciatis, quaerat qui repudiandae unde vitae?
          </div>

          {/*  Raporla Begen Begenme Goruntulenme */}
          <div className={'flex flex-row justify-between px-4 items-center'}>

            <button className={"px-1 py-1 rounded bg-white border border-neutral-400/40 text-neutral-800 text-xs"}>
              Raporla
            </button>

            <div className={'flex flex-row justify-end gap-4'}>
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
                <span className={"pt-[1px] text-xs"}>0</span>
              </p>
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
                <span className={"pt-[1px] text-xs"}>0</span>
              </p>
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
                <span className={"pt-[1px] text-xs"}>0</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FormItem;
