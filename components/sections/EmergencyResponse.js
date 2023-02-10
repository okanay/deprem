import Link from "next/link";
import Image from "next/image";

const EmergencyResponse = () => {


  const YardimAl = [
    {
      key: "YA0",
      url: "/form/enkazTalep",
      src: "/menuIcons/help.png",
      alt : "help",
      description: "Enkaz Formu Oluştur",
    },
    {
      key: "YA1",
      url: "/form/gidaTalep",
      src: "/menuIcons/foods.png",
      alt : "help",
      description: "Gıda Formu Oluştur",
    },
    {
      key: "YA2",
      url: "/form/barinmaTalep",
      src: "/menuIcons/warm.png",
      alt : "help",
      description: "Barınma Formu Oluştur",
    },
  ];

  const YardimVer = [
    {
      key: "YV0",
      url: "/",
      src: "/menuIcons/house.png",
      alt : "share-house",
      description: "Konaklama Teklif Et",
    },
    {
      key: "YV1",
      url: "/",
      src: "/menuIcons/construction-worker.png",
      alt : "construction-worker",
      description: "Operasyonlarda Bulunabilirim",
    },
    {
      key: "YV2",
      url: "/",
      src: "/menuIcons/bus-driver.png",
      alt : "bus-driver",
      description: "Nakliye ve Taşıma Yapabilirim",
    },
  ];

  return (
    <>
      <div className={"bg-gray-50/80 pt-5 px-4 pb-8"}>
        <div className={"grid grid-rows-2 gap-12"}>
          <div>
            <h1 className={"text-[1.4rem] font-semibold text-neutral-700 text-start mb-5"}>
              <span className={"text-slate-600/90 "}>Talep</span> <span className={'font-light font-serif'}>Oluştur</span>
            </h1>

            {YardimAl.map((item) => {
              return (
                <div
                  key={item.key}
                  className={
                    "mx-3 py-4 rounded-2xl shadow-md shadow-pink-900/10 mb-3"
                  }
                >
                  <Link
                    href={item.url}
                    className={
                      "group px-4 font-light space-x-4 text-slate-600 text-[0.95rem] phone:text-lg"
                    }
                  >
                    <span>
                      <Image
                        src={item.src}
                        width={"200"}
                        height={"200"}
                        alt={item.alt}
                        className={
                          "w-8 h-8 duration-300 group-hover:animate-pulse inline mr-4"
                        }
                      />
                      <span className={"duration-500 group-hover:text-red-700"}>
                        {item.description}
                      </span>
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
          <div>

            <h1 className={"text-[1.4rem] font-semibold text-neutral-700 text-start mb-5"}>
              <span className={"text-slate-600/90"}>Yardım</span> <span className={'font-light font-serif'}>Oluştur</span> <span className={'text-[0.6rem] text-gray-400 text-light'}>wait until V0-0.5</span>
            </h1>

            {YardimVer.map((item) => {
              return (
                <div
                  key={item.key}
                  className={
                    "mx-3 py-4 rounded-2xl shadow-md shadow-sky-900/10 mb-3"
                  }
                >
                  <Link
                    href={item.url}
                    className={
                      "group px-4 font-light space-x-4 text-slate-600 text-slate-600 text-[0.95rem] phone:text-lg"
                    }
                  >
                    <span>
                      <Image
                        src={item.src}
                        width={"200"}
                        height={"200"}
                        alt={item.alt}
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
        </div>
      </div>
    </>
  );
};

export default EmergencyResponse;
