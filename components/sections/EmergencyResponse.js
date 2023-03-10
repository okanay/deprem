import Link from "next/link";
import Image from "next/image";

const EmergencyResponse = () => {
  const YardimAl = [
    {
      key: "YA0",
      url: "/form/bt",
      src: "/svg/cabin.svg",
      alt: "Barınmaya İhtiyacım Var",
      description: "Barınmaya İhtiyacım Var",
    },
    {
      key: "YA1",
      url: "/form/ct",
      src: "/svg/camp.svg",
      alt: "Çadıra İhtiyacım Var",
      description: "Çadıra İhtiyacım Var",
    },
    {
      key: "YA2",
      url: "/form/gt",
      src: "/svg/foods.svg",
      alt: "Gıdaya İhtiyacım Var",
      description: "Gıdaya İhtiyacım Var",
    },
    {
      key: "YA3",
      url: "/form/it",
      src: "/svg/medicine.svg",
      alt: "İlaca İhtiyacım Var",
      description: "İlaca İhtiyacım Var",
    },
    {
      key: "YA4",
      url: "/form/ht",
      src: "/svg/amenities.svg",
      alt: "Hijyen Ürünlerine İhtiyacım Var",
      description: "Hijyen Ürünlerine İhtiyacım Var",
    },
  ];
  const YardimVer = [
    {
      key: "YV0",
      url: "/form/kd",
      src: "/svg/house.svg",
      alt: "Konaklama Teklif Et",
      description: "Konaklama Teklif Et",
    },
    {
      key: "YV1",
      url: "/form/akd",
      src: "/svg/footprints.svg",
      alt: "Arama Kurtarmaya Katilabilirim",
      description: "Arama Kurtarmaya Katılabilirim",
    },
    {
      key: "YV2",
      url: "/form/obd",
      src: "/svg/constructionWorker.svg",
      alt: "Operasyonlarda Bulunabilirim",
      description: "Operasyonlarda Bulunabilirim",
    },
    {
      key: "YV3",
      url: "/form/ntd",
      src: "/svg/busDriver.svg",
      alt: "Nakliye ve Taşıma Yapabilirim",
      description: "Nakliye ve Taşıma Yapabilirim",
    },
    {
      key: "YV4",
      url: "/form/cd",
      src: "/svg/translator.svg",
      alt: "Çevirmenlik Yapabilirim",
      description: "Çevirmenlik Yapabilirim",
    },
  ];

  return (
    <div className={"bg-gray-50/80 pt-5 px-4 pb-8"}>
      <div className={"flex flex-col gap-12 max-w-screen-tablet w-full"}>
        <div id={"talep"}>
          <div className={"flex flex-row justify-between items-center mb-3"}>
            <h1
              className={
                "text-[1.2rem] font-semibold text-neutral-700 text-start"
              }
            >
              <span className={"text-slate-600/90"}>İhtiyaç </span>
              <span className={"font-light font-serif"}>Oluştur</span>
            </h1>

            <Link
              href={"/talep"}
              className={
                "py-2 px-2 rounded-md bg-slate-50 border border-slate-800/20 text-blue-400/90 shadow shadow-blue-400/30 uppercase font-bold text-sm transition-colors duration-300 hover:bg-red-400/90 hover:text-slate-50"
              }
            >
              TAM-LİSTE
            </Link>
          </div>
          {YardimAl.map((item) => {
            return (
              <div
                key={item.key}
                className={
                  "mx-3 py-4 rounded-lg shadow-md shadow-neutral-600/10 mb-3"
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
                      priority={true}
                      loading={"eager"}
                      src={item.src}
                      width={"300"}
                      height={"300"}
                      alt={item.alt}
                      className={
                        "w-6 h-6 duration-300 group-hover:animate-pulse inline mr-4"
                      }
                    />
                    <span className={"duration-500 group-hover:text-red-500"}>
                      {item.description}
                    </span>
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
        <div id={"destek"}>
          <div className={"flex flex-row justify-between items-center mb-3"}>
            <h1
              className={
                "text-[1.2rem] font-semibold text-neutral-700 text-start"
              }
            >
              <span className={"text-slate-600/90"}>Destek </span>
              <span className={"font-light font-serif"}>Oluştur</span>
            </h1>

            <Link
              href={"/destek"}
              className={
                "py-2 px-2 rounded-md bg-slate-50 border border-slate-800/20 text-blue-400/90 shadow shadow-blue-400/30 uppercase font-bold text-sm transition-colors duration-300 hover:bg-emerald-400/90 hover:text-slate-50"
              }
            >
              TAM-LİSTE
            </Link>
          </div>
          {YardimVer.map((item) => {
            return (
              <div
                key={item.key}
                className={
                  "mx-3 py-4 rounded-lg shadow-md shadow-neutral-600/10 mb-3"
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
                      priority={true}
                      loading={"eager"}
                      src={item.src}
                      width={"300"}
                      height={"300"}
                      alt={item.alt}
                      className={
                        "w-6 h-6 duration-300 group-hover:animate-pulse inline mr-4"
                      }
                    />
                    <span
                      className={"duration-500 group-hover:text-emerald-400/90"}
                    >
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
  );
};

export default EmergencyResponse;
