import Carousel from "framer-motion-carousel";
import Link from "next/link";
import { useState } from "react";

const TwitterAccounts = [
  {
    key: "TA0",
    profilePhoto: "TwitterAccounts/teyfiksikret.jpg",
    profileUrl: "https://twitter.com/huorelensarr",
    sendMessageUrl: "https://twitter.com/huorelensarr",
    name: "Teyfik Sikret",
    follower: "305.619",
  },
  {
    key: "TA1",
    profilePhoto: "TwitterAccounts/player2.jpg",
    profileUrl: "https://twitter.com/weldsx",
    sendMessageUrl: "https://twitter.com/weldsx",
    name: "Player 2",
    follower: "50.439",
  },
  {
    key: "TA2",
    profilePhoto: "TwitterAccounts/sunguralpesat.jpg",
    profileUrl: "https://twitter.com/sunguralpesat",
    sendMessageUrl: "https://twitter.com/sunguralpesat",
    name: "Sunguralp Esat",
    follower: "53.821",
  },
];

const TwitterHelperAccounts = () => {
  const [show, setShow] = useState(false);
  const handleAllAccounts = () => {
    setShow(!show);
  };

  return (
    <div
      className={
        "max-w-screen-tablet w-full mx-auto text-center pt-4"
      }
    >
      <div className={"flex flex-row justify-between items-center px-4"}>
        <h1
          className={"text-lg font-semibold text-neutral-700 text-start my-5"}
        >
          <span className={"text-slate-50 bg-blue-400/90 p-2 rounded-lg"}>
            Twitter
          </span>{" "}
          <span className={"font-serif font-light"}>Hesapları</span>
        </h1>
        <button
          onClick={handleAllAccounts}
          className={
            "py-2 px-2 rounded-md bg-slate-50 border border-slate-800/20 text-blue-400/90 shadow shadow-blue-400/30 uppercase font-bold text-sm transition-colors duration-300 hover:bg-blue-400/90 hover:text-slate-50"
          }
        >
          {`${!show ? "TAM-LİSTE" : "KAPAT"}`}
        </button>
      </div>

      {/* GIZLENMIS FULL LISTE */}
      {show && (
        <div className={"absolute z-20 bg-slate-50 max-w-screen-tablet w-full mx-auto "}>

         <div className="flex flex-col justify-start">

          <div className="flex flex-row justify-around w-full items-center pb-10 text-xs phoneLG:text-sm bg-white border-b border-gray-400/40">
            <div className="flex flex-col justify-center items-center gap-10 w-full ">
              <p className={'font-semibold w-full bg-slate-100 py-4'}>KULLANICI ADI</p>

              {TwitterAccounts.map((item, index) => {
                return ( <div key={`${item.key} Table${index}`} className="">
                    {item.name}
                  </div>
                );
              })}

            </div>
            <div className="flex flex-col justify-center items-center gap-10 w-full">
              <p className={'font-semibold w-full bg-slate-100 py-4'}>TAKİPÇİ SAYISI</p>

              {TwitterAccounts.map((item, index) => {
                return ( <div key={`${item.key} Table${index}`} className="">
                    {item.follower}
                  </div>
                );
              })}

            </div>
            <div className="flex flex-col justify-center items-center gap-10 w-full">
              <p className={'font-semibold w-full bg-slate-100 py-4'}>BAĞLANTI</p>

              {TwitterAccounts.map((item, index) => {
                return ( <div key={`${item.key} Table${index}`} className="">
                    <Link
                      href={item.profileUrl}
                      className="px-2 py-3 phoneLG:p-4 bg-blue-400 text-white rounded-lg border border-white"
                    >
                      Mesaj Gönder
                    </Link>
                  </div>
                );
              })}

            </div>
          </div>

         </div>
        </div>
      )}

      <Carousel interval={8000} renderDots={() => {}}>
        {TwitterAccounts.map((item) => {
          return (
            <div key={item.key} className={"h-fit"}>
              <div className="w-full max-w-screen-phone mx-auto  ">
                <div className="flex justify-end px-4 pt-4"></div>
                <div className="flex flex-col items-center pb-10">
                  <img
                    className="w-20 h-20 mb-3 rounded-full shadow-lg object-contain"
                    src={item.profilePhoto}
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Takipci Sayisi : {item.follower}
                  </span>
                  <div className="flex mt-4 space-x-3 md:mt-6">
                    <Link
                      href={item.sendMessageUrl}
                      className="inline-flex items-center px-2 py-3 phoneLG:p-3 text-sm font-medium text-center text-gray-900 bg-white hover:bg-gray-500 hover:text-white border border-gray-300 rounded-lg"
                    >
                      Mesaj Gönder
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>

      <div></div>
    </div>
  );
};

export default TwitterHelperAccounts;

