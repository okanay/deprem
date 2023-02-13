import Link from "next/link";
import Image from "next/image";
import FormTitle from "../UI/FormTitle";

const EmergencyResponse = () => {
  const YardimAl = [
    {
      key: "YA0",
      url: "/form/bt",
      src: "/menuIcons/cabin.png",
      alt: "Barınmaya İhtiyacım Var",
      description: "Barınmaya İhtiyacım Var",
    },
    {
      key: "YA1",
      url: "/form/ct",
      src: "/menuIcons/camp.png",
      alt: "Çadıra İhtiyacım Var",
      description: "Çadıra İhtiyacım Var",
    },
    {
      key: "YA2",
      url: "/form/gt",
      src: "/menuIcons/foods.png",
      alt: "Gıdaya İhtiyacım Var",
      description: "Gıdaya İhtiyacım Var",
    },
    {
      key: "YA3",
      url: "/form/it",
      src: "/menuIcons/medicine.png",
      alt: "İlaca İhtiyacım Var",
      description: "İlaca İhtiyacım Var",
    },
    {
      key: "YA4",
      url: "/form/ht",
      src: "/menuIcons/amenities.png",
      alt: "Hijyen Ürünlerine İhtiyacım Var",
      description: "Hijyen Ürünlerine İhtiyacım Var",
    },
  ];
  const YardimVer = [
    {
      key: "YV0",
      url: "/",
      src: "/menuIcons/house.png",
      alt: "Konaklama Teklif Et",
      description: "Konaklama Teklif Et",
    },
    {
      key: "YV1",
      url: "/",
      src: "/menuIcons/footprints.png",
      alt: "Arama Kurtarmaya Katilabilirim",
      description: "Arama Kurtarmaya Katılabilirim",
    },
    {
      key: "YV2",
      url: "/",
      src: "/menuIcons/construction-worker.png",
      alt: "Operasyonlarda Bulunabilirim",
      description: "Operasyonlarda Bulunabilirim",
    },
    {
      key: "YV3",
      url: "/",
      src: "/menuIcons/bus-driver.png",
      alt: "Nakliye ve Taşıma Yapabilirim",
      description: "Nakliye ve Taşıma Yapabilirim",
    },
    {
      key: "YV4",
      url: "/",
      src: "/menuIcons/translator.png",
      alt: "Çevirmenlik Yapabilirim",
      description: "Çevirmenlik Yapabilirim",
    },
  ];



  return (
    <>
      <div className={"bg-gray-50/80 pt-5 px-4 pb-8"}>
        <div className={"flex flex-col gap-12"}>
          <div>

            <div className={"flex flex-row justify-between items-center"}>
              <h1
                className={
                  "text-[1.2rem] font-semibold text-neutral-700 text-start mb-5"
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
                        width={"300"}
                        height={"300"}
                        alt={item.alt}
                        className={
                          "w-6 h-6 duration-300 group-hover:animate-pulse inline mr-4"
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
            <div className={"flex flex-row justify-between items-center"}>
              <h1
                className={
                  "text-[1.2rem] font-semibold text-neutral-700 text-start mb-5"
                }
              >
                <span className={"text-slate-600/90"}>Destek </span>
                <span className={"font-light font-serif"}>Oluştur</span>
              </h1>

              <Link
                href={"/"}
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
                        width={"300"}
                        height={"300"}
                        alt={item.alt}
                        className={
                          "w-6 h-6 duration-300 group-hover:animate-pulse inline mr-4"
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
