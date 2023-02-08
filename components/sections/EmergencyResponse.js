import Link from "next/link";
import Image from "next/image";

const EmergencyResponse = () => {
  return (
    <>
      <div className={"bg-gray-50/80 pt-12 px-4 pb-12"}>
        <div className={"grid grid-rows-2 gap-12"}>
          <div>
            <h1
              className={
                "text-3xl font-semibold text-neutral-700 text-start mb-5"
              }
            >
              Yardim <span className={"text-sky-800/75"}>Al</span>
            </h1>

            <div className="flex flex-cols mt-6"></div>
            <div
              className={
                "mx-3 py-4 rounded-2xl shadow-md shadow-sky-800/25 mb-3"
              }
            >
              <Link
                href={"/"}
                className={
                  "group px-4 text-xl font-semibold space-x-4 text-slate-600"
                }
              >
                <span>
                  <Image
                    src={"/help.png"}
                    width={"200"}
                    height={"200"}
                    alt={"warm"}
                    className={
                      "w-8 h-8 duration-300 group-hover:animate-pulse inline mr-4"
                    }
                  />
                  <span className={"duration-500 group-hover:text-sky-700"}>
                    Ben / Tanidigim Enkazda
                  </span>
                </span>
              </Link>
            </div>

            <div
              className={
                "mx-3 py-4 rounded-2xl shadow-md shadow-sky-800/25 mb-3"
              }
            >
              <Link
                href={"/"}
                className={
                  "group px-4 text-xl font-semibold space-x-4 text-slate-600"
                }
              >
                <span>
                  <Image
                    src={"/foods.png"}
                    width={"200"}
                    height={"200"}
                    alt={"food"}
                    className={
                      "w-8 h-8 duration-300 group-hover:animate-pulse inline mr-4"
                    }
                  />
                  <span className={"duration-500 group-hover:text-sky-700"}>
                    Gidaya Ihtiyacim Var
                  </span>
                </span>
              </Link>
            </div>

            <div
              className={
                "mx-3 py-4 rounded-2xl shadow-md shadow-sky-800/25 mb-3"
              }
            >
              <Link
                href={"/"}
                className={
                  "group px-4 text-xl font-semibold space-x-4 text-slate-600"
                }
              >
                <span>
                  <Image
                    src={"/warm.png"}
                    width={"200"}
                    height={"200"}
                    alt={"warm"}
                    className={
                      "w-8 h-8 duration-300 group-hover:animate-pulse inline mr-4"
                    }
                  />
                  <span className={"duration-500 group-hover:text-sky-700"}>
                    Isinmaya Ihtiyacim Var
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div>
            <h1
              className={
                "text-3xl font-semibold text-neutral-700 text-start mb-5"
              }
            >
              Yardim <span className={"text-lime-900/75"}>Gönder</span>
            </h1>

            <div className="flex flex-cols mt-6"></div>
            <div
              className={
                "mx-3 py-4 rounded-2xl shadow-md shadow-lime-800/25 mb-3"
              }
            >
              <Link
                href={"/"}
                className={
                  "group px-4 text-xl font-semibold space-x-4 text-slate-600"
                }
              >
                <span>
                  <Image
                    src={"/house.png"}
                    width={"200"}
                    height={"200"}
                    alt={"share my house"}
                    className={
                      "w-8 h-8 duration-300 group-hover:animate-pulse inline mr-4"
                    }
                  />
                  <span className={"duration-500 group-hover:text-sky-700"}>
                    Konaklama Saglayabilirim
                  </span>
                </span>
              </Link>
            </div>

            <div
              className={
                "mx-3 py-4 rounded-2xl shadow-md shadow-lime-800/25 mb-3"
              }
            >
              <Link
                href={"/"}
                className={
                  "group px-4 text-xl font-semibold space-x-4 text-slate-600"
                }
              >
                <span>
                  <Image
                    src={"/construction-worker.png"}
                    width={"200"}
                    height={"200"}
                    alt={"worker"}
                    className={
                      "w-8 h-8 duration-300 group-hover:animate-pulse inline mr-4"
                    }
                  />
                  <span className={"duration-500 group-hover:text-sky-700"}>
                    İş Makinesi Kullanabilirim
                  </span>
                </span>
              </Link>
            </div>

            <div
              className={
                "mx-3 py-4 rounded-2xl shadow-md shadow-lime-800/25 mb-3"
              }
            >
              <Link
                href={"/"}
                className={
                  "group px-4 text-xl font-semibold space-x-4 text-slate-600"
                }
              >
                <span>
                  <Image
                    src={"/bus-driver.png"}
                    width={"200"}
                    height={"200"}
                    alt={"bus driver"}
                    className={
                      "w-8 h-8 duration-300 group-hover:animate-pulse inline mr-4"
                    }
                  />
                  <span className={"duration-500 group-hover:text-sky-700"}>
                    Yolcu Taşıyabilirim
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmergencyResponse;
