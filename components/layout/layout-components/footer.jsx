import Logo from "../../UI/Re-Useables/Logo";
import Link from "next/link";
import { useQuery } from "react-query";
import { getVersion } from "/helper/getVersion";

const Footer = () => {

  const versionText = getVersion();


  return (
    <footer className="px-4 py-4">
      <div className="text-[0.70rem] phoneLG:text-[0.8rem]">
        <div className="grid grid-cols-2 gap-8 phoneXS:gap-6 mb-3">
          <div>
            <h2 className="mb-3 font-semibold text-gray-900">
              OLUŞUMLAR
            </h2>
            <ul className="text-gray-600">
              <li className="mb-3">
                <Link href="https://ahbap.org/" className="hover:underline">
                  AHBAP
                </Link>
              </li>
              <li className="mb-3">
                <Link href="https://www.afad.gov.tr/" className="hover:underline">
                  AFAD
                </Link>
              </li>
              <li>
                <Link href="https://www.kizilay.org.tr/deprem2023/" className="hover:underline">
                  KIZILAY
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 font-semibold text-gray-900 uppercase">
              Şartlar ve Koşullar
            </h2>
            <ul className="text-gray-600">
              <li className="mb-3">
                <Link href="/politika" className="hover:underline">
                  GİZLİLİK POLİTİKASI
                </Link>
              </li>
              <li>
                <Link href="/hakkimda" className="hover:underline">
                  HAKKIMDA
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-gray-200 w-full absolute border-b border-gray-400 left-0" />
      <div className="mt-6 w-full flex flex-row justify-between text-[0.60rem] phoneLG:text-[0.7rem] text-gray-500 ">
        <span className="">
          Okan Ay tarafindan gelistirilmektedir
        </span>
        <span className={'font-semibold'}>{versionText}</span>
      </div>
    </footer>
  );
};

export default Footer;
