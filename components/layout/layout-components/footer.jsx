import Link from "next/link";
import { getVersion } from "/helper/getVersion";

const Footer = () => {
  const versionText = getVersion();

  return (
    <footer className="">
      <div className="text-[0.70rem] phoneLG:text-[0.8rem]">
        <div className="flex flex-row gap-4 justify-between px-8 py-2">
          <div>
            <h2 className="font-semibold text-gray-900 mb-2">OLUŞUMLAR</h2>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li className="">
                <Link href="https://ahbap.org" className="hover:underline">
                  AHBAP
                </Link>
              </li>
              <li className="">
                <Link
                  href="https://www.afad.gov.tr"
                  className="hover:underline"
                >
                  AFAD
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.kizilay.org.tr/deprem2023/"
                  className="hover:underline"
                >
                  KIZILAY
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-gray-900 uppercase mb-2">
              Şartlar ve Koşullar
            </h2>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li className="">
                <Link href="/politika" className="hover:underline">
                  GİZLİLİK POLİTİKASI
                </Link>
              </li>
              <li>
                <Link href="https://github.com/okanay" className="hover:underline">
                  HAKKIMDA
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={"flex flex-row items-center justify-center my-2"}>
        <span className="text-xs text-gray-500">
          © 2023{" "}
          <Link href="/" className="hover:underline">
            Okan™
          </Link>
          {" "}Her türlü hakkı saklıdır!
        </span>
      </div>
    </footer>
  );
};

export default Footer;
