import Link from "next/link";
import Image from "next/image";

const EmergencyResponse = () => {


  const YardimAl = [
    {
      key: "YA2",
      url: "/form/ct",
      src: "/menuIcons/camp.png",
      alt : "Çadıra İhtiyacım Var",
      description: "Çadıra İhtiyacım Var",
    },
    {
      key: "YA1",
      url: "/form/gt",
      src: "/menuIcons/foods.png",
      alt : "Gıdaya İhtiyacım Var",
      description: "Gıdaya İhtiyacım Var",
    },
    {
      key: "YA0",
      url: "/form/it",
      src: "/menuIcons/medicine.png",
      alt : "İlaca İhtiyacım Var",
      description: "İlaca İhtiyacım Var",
    },
    {
      key: "YA4",
      url: "/form/ht",
      src: "/menuIcons/amenities.png",
      alt : "Hijyen Ürünlerine İhtiyacım Var",
      description: "Hijyen Ürünlerine İhtiyacım Var",
    },
  ];

  const YardimVer = [
    {
      key: "YV0",
      url: "/",
      src: "/menuIcons/house.png",
      alt : "Konaklama Teklif Et",
      description: "Konaklama Teklif Et",
    },
    {
      key: "YV0",
      url: "/",
      src: "/menuIcons/footprints.png",
      alt : "Arama Kurtarmaya Katilabilirim",
      description: "Arama Kurtarmaya Katılabilirim",
    },
    {
      key: "YV1",
      url: "/",
      src: "/menuIcons/construction-worker.png",
      alt : "Operasyonlarda Bulunabilirim",
      description: "Operasyonlarda Bulunabilirim",
    },
    {
      key: "YV2",
      url: "/",
      src: "/menuIcons/bus-driver.png",
      alt : "Nakliye ve Taşıma Yapabilirim",
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
                      "group px-4 font-light space-x-4 text-slate-600 text-[0.9rem] phone:text-lg"
                    }
                  >
                    <span>
                      <Image
                        src={item.src}
                        width={"200"}
                        height={"200"}
                        alt={item.alt}
                        className={
                          "w-7 h-7 duration-300 group-hover:animate-pulse inline mr-4"
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
              <span className={"text-slate-600/90"}>Destek</span> <span className={'font-light font-serif'}>Oluştur</span> <span className={'text-[0.6rem] text-gray-400 text-light'}>wait until V0-0.5</span>
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
                      "group px-4 font-light space-x-4 text-slate-600 text-slate-600 text-[0.9rem] phone:text-lg"
                    }
                  >
                    <span>
                      <Image
                        src={item.src}
                        width={"200"}
                        height={"200"}
                        alt={item.alt}
                        className={
                          "w-7 h-7 duration-300 group-hover:animate-pulse inline mr-4"
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
