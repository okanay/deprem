import Link from "next/link";
import Image from "next/image";

const EmergencyResponse = () => {


  const YardimAl = [
    {
      key: "YA0",
      url: "/",
      src: "/help.png",
      description: "Ben / Tanidigim Enkazda",
    },
    {
      key: "YA1",
      url: "/",
      src: "/foods.png",
      description: "Gidaya Ihtiyacim Var",
    },
    {
      key: "YA2",
      url: "/",
      src: "/warm.png",
      description: "Isinmaya Ihtiyacim Var",
    },
  ];

  const YardimVer = [
    {
      key: "YV0",
      url: "/",
      src: "/house.png",
      description: "Konaklama Saglayabilirim",
    },
    {
      key: "YV1",
      url: "/",
      src: "/construction-worker.png",
      description: "İş Makinesi Kullanabilirim",
    },
    {
      key: "YV2",
      url: "/",
      src: "/bus-driver.png",
      description: "Yolcu Taşıyabilirim",
    },
  ];

  return (
    <>
      <div className={"bg-gray-50/80 pt-12 px-4 pb-8"}>
        <div className={"grid grid-rows-2 gap-12"}>
          <div>
            <h1 className={"text-3xl font-semibold text-neutral-700 text-start mb-5"}>
              Yardim <span className={"text-sky-800/75"}>Al</span>
            </h1>

            {YardimAl.map((item) => {
              return (
                <div
                  key={item.key}
                  className={
                    "mx-3 py-4 rounded-2xl shadow-md shadow-sky-800/25 mb-3"
                  }
                >
                  <Link
                    href={item.url}
                    className={
                      "group px-4 font-semibold space-x-4 text-slate-600 text-[0.95rem] phone:text-lg"
                    }
                  >
                    <span>
                      <Image
                        src={item.src}
                        width={"200"}
                        height={"200"}
                        alt={"help"}
                        className={
                          "w-8 h-8 duration-300 group-hover:animate-pulse inline mr-4"
                        }
                      />
                      <span className={"duration-500 group-hover:text-sky-700"}>
                        {item.description}
                      </span>
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
          <div>

            <h1 className={"text-3xl font-semibold text-neutral-700 text-start mb-5"}>
              Yardim <span className={"text-lime-800/75"}>Gönder</span>
            </h1>

            {YardimVer.map((item) => {
              return (
                <div
                  key={item.key}
                  className={
                    "mx-3 py-4 rounded-2xl shadow-md shadow-lime-800/25 mb-3"
                  }
                >
                  <Link
                    href={item.url}
                    className={
                      "group px-4 font-semibold space-x-4 text-slate-600 text-slate-600 text-[0.95rem] phone:text-lg"
                    }
                  >
                    <span>
                      <Image
                        src={item.src}
                        width={"200"}
                        height={"200"}
                        alt={"share my house"}
                        className={
                          "w-8 h-8 duration-300 group-hover:animate-pulse inline mr-4"
                        }
                      />
                      <span className={"duration-500 group-hover:text-lime-700"}>
                        {item.description}
                      </span>
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmergencyResponse;
