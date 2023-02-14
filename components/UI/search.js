import Image from "next/image";
import Link from "next/link";

const SearchTicket = () => {
  return (

    <div>
      {/* ID FILTER */}
      <div className={"flex flex-row justify-start items-center"}>
        {/* KOD INPUT */}
        <div className={"relative mr-2 pb-1"}>
          {/* INPUT */}
          <input
            className={
              "peer appearance-none focus:outline-none transition duration-300 focus:border-slate-800 placeholder:text-transparent w-full px-9 h-8 bg-gray-50 border-[0px] rounded-[0px] border-b-2 border-slate-500 "
            }
            type={"text"}
            maxLength={8}
            inputMode={"text"}
            placeholder={"Talep Arayin"}
            name={"arama"}
            id={`arama`}
          />

          {/* ICON */}
          <div
            className={
              "w-7 h-7 absolute top-0.5 left-0.5 flex flex-col justify-center items-center"
            }
          >
            <Image
              src={"/formIcons/research.png"}
              width={"200"}
              height={"200"}
              alt={"Talep Arama"}
              className={"w-5 h-5"}
            />
          </div>

          {/* PLACEHOLDER */}
          <label
            htmlFor={"arama"}
            className={`text-[0.5rem] phone:text-[0.65rem] absolute left-0 -top-4 text-gray-400 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-[0.6rem] peer-placeholder-shown:phone:text-[0.75rem] peer-placeholder-shown:top-2 peer-placeholder-shown:phone:top-1.5 peer-placeholder-shown:left-10 transition-all duration-300 pointer-events-none`}
          >
            # Talep Arama
          </label>
        </div>

        {/* ARA BUTONU */}
        <div className={""}>
          <Link
            href={"/"}
            className={
              "p-2 rounded-md bg-slate-50 border border-slate-800/20 text-slate-700/90 uppercase font-bold text-sm transition-colors duration-300 hover:bg-slate-600/90 hover:text-slate-50"
            }
          >
            Ara
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchTicket;
