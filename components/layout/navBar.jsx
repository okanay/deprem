import Link from "next/link";
import { AnimatePresence, motion as m } from "framer-motion";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const NavBar = () => {
  const fLinks = [
    {
      name: "Yazilar",
      url: "/",
    },
    {
      name: "Videolar",
      url: "/",
    },
    {
      name: "Podcastler",
      url: "/",
    },
    {
      name: "Dergilik",
      url: "/",
    },
    {
      name: "Yazarlar",
      url: "/",
    },
    {
      name: "Abonelikler",
      url: "/",
    },
    {
      name: "Dukkan",
      url: "/",
    },
  ];
  const sLinks = [
    {
      name: "Basketbol",
      url: "/",
    },
    {
      name: "Futbol",
      url: "/",
    },
    {
      name: "Bisiklet",
      url: "/",
    },
    {
      name: "Formula 1",
      url: "/",
    },
    {
      name: "Voleybol",
      url: "/",
    },
    {
      name: "Tenis",
      url: "/",
    },
  ];

  const container = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, type: "tween" },
    },
    exit: { opacity: 0, y: -100, transition: { duration: 1, type: "tween" } },
  };

  const [state, setState] = useState(0);
  return (
    <AnimatePresence>
      <div className={`max-w-6xl xl:max-w-7xl mx-auto`}>
        <m.div
          key="modal"
          exit={{ opacity: 0 }}
          variants={container}
          initial="hidden"
          animate={state == 0 ? "visible" : "exit"}
          className={`flex justify-between items-center`}
        >
          <div className={"relative"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 66 88"
              className="cursor-pointer w-24 h-20"
            >
              <defs></defs>
              <g opacity=".2">
                <path d="M57.05 62.938c0-6.74-2.115-12.136-6.464-16.496l-.512-.512c-4.986-4.318-11.719-5.8-17.685-7.116-6.447-1.419-12.015-2.647-12.015-7.39 0-5.132 4.815-5.427 7.988-5.486v-.008l.43-.008h19.583L55.685 8H29.003l-.206.005c-8.1.09-15.503 2.732-20.848 7.44C2.825 19.96 0 25.913 0 32.21c0 5.273 1.213 9.884 3.607 13.7 3.342 5.554 9.433 9.596 19.75 13.116 8.144 2.772 12.945 5.496 15.566 8.83l.016.021.013.024c1.56 2.584 1.588 5.72.082 8.384-1.87 3.308-5.707 5.205-10.527 5.205-8.384 0-12.685-4.642-14.817-8.537-1.67-3.55-1.956-7.438-2.26-11.927-3.477-1.583-6.29-3.292-8.574-5.208V88h5.09c.052-.668.271-1.947 1.162-2.867.671-.695 1.585-1.049 2.708-1.049.724 0 1.549.15 2.447.444l.021.008.021.008.069.032.124.055c5.184 2.233 10.08 3.366 14.54 3.366 3.227 0 6.276-.486 9.06-1.448C49.797 83.167 57.05 74.12 57.05 62.94z"></path>
              </g>
              <g opacity=".4">
                <path d="M61.05 58.938c0-6.74-2.115-12.136-6.464-16.496l-.512-.512c-4.986-4.318-11.719-5.8-17.685-7.116-6.447-1.419-12.015-2.647-12.015-7.39 0-5.132 4.815-5.427 7.988-5.486v-.008l.43-.008h19.583L59.685 4H33.003l-.207.005c-8.098.09-15.502 2.732-20.847 7.44C6.825 15.96 4 21.913 4 28.21c0 5.273 1.213 9.884 3.607 13.7 3.342 5.554 9.433 9.596 19.75 13.116 8.144 2.772 12.945 5.496 15.566 8.83l.016.022.013.023c1.56 2.584 1.588 5.72.082 8.384-1.87 3.308-5.707 5.205-10.527 5.205-8.383 0-12.685-4.642-14.817-8.537-1.67-3.55-1.956-7.438-2.26-11.927-3.477-1.583-6.29-3.292-8.574-5.208V84h5.09c.052-.668.271-1.947 1.162-2.867.671-.695 1.585-1.049 2.708-1.049.724 0 1.549.15 2.447.444l.021.008.021.008.069.032.124.055c5.184 2.233 10.08 3.366 14.54 3.366 3.227 0 6.276-.486 9.06-1.448C53.797 79.167 61.05 70.12 61.05 58.94z"></path>
              </g>
              <g>
                <path d="M65.05 54.938c0-6.74-2.115-12.136-6.464-16.496l-.512-.512c-4.986-4.318-11.719-5.8-17.685-7.116-6.447-1.419-12.015-2.647-12.015-7.39 0-5.132 4.815-5.427 7.988-5.486v-.008l.43-.008h19.583L63.685 0H37.003l-.207.005c-8.098.09-15.502 2.732-20.847 7.44C10.825 11.96 8 17.913 8 24.21c0 5.273 1.213 9.884 3.607 13.7 3.342 5.554 9.433 9.596 19.75 13.116 8.144 2.772 12.945 5.496 15.566 8.83l.016.022.013.023c1.56 2.584 1.588 5.72.082 8.384-1.87 3.308-5.707 5.205-10.527 5.205-8.383 0-12.685-4.642-14.817-8.537-1.67-3.55-1.956-7.438-2.26-11.927-3.477-1.583-6.29-3.292-8.574-5.208V80h5.09c.052-.668.272-1.947 1.162-2.867.671-.695 1.585-1.049 2.708-1.049.724 0 1.549.15 2.447.444l.021.008.021.008.069.032.124.055c5.184 2.233 10.08 3.366 14.54 3.366 3.227 0 6.276-.486 9.06-1.448C57.797 75.167 65.05 66.12 65.05 54.94z"></path>
              </g>
            </svg>

            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-14 h-14 absolute top-2 -right-10"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M41 0H5L0 14h36l5-14ZM26.6648 10.3427H25.29l2.627-6.52629h1.2435l2.627 6.52629h-1.4098l-.5604-1.45338h-2.592l-.5605 1.45338Zm1.8565-4.81372-.8144 2.10137h1.6287l-.8143-2.10137ZM11.654 10.3427H8.73804V3.86269H11.584c.7005 0 1.2522.20366 1.6025.57395.2802.29622.4203.65725.4203 1.1016v.01851c0 .73131-.3678 1.13863-.8056 1.39783.7093.28697 1.1471.72206 1.1471 1.59223v.01851c0 1.18492-.9107 1.77738-2.2943 1.77738Zm-1.6024-5.23029v1.37005h1.2434c.5955 0 .972-.20365.972-.68502v-.01852c0-.42583-.3152-.66651-.8844-.66651h-1.331Zm0 2.55497v1.4256h1.6024c.5955 0 .9545-.22217.9545-.70354v-.01852c0-.43508-.3065-.70354-.9982-.70354h-1.5587Zm9.6734 2.67532h-4.6674V3.86269h4.6236v1.26823h-3.2838v1.31452h2.8897v1.26822h-2.8897v1.3608h3.3276v1.26824Zm2.6263 0h1.3485V5.17721h1.8652V3.86269h-5.0789v1.31452h1.8652v5.16549Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>

          <div className={"flex-row hidden lg:flex"}>
            <div>
              {/*-----------------------------------------------*/}
              <div className={"flex justify-center gap-4"}>
                <ul>
                  <Link
                    className={
                      "px-3 font-light text-gray-500 text-[1rem] hover:text-gray-900"
                    }
                    href={"/"}
                  >
                    {fLinks[0].name}
                  </Link>

                  <Link
                    className={
                      "px-3 font-light text-gray-500 text-[1rem] hover:text-gray-900"
                    }
                    href={"/"}
                  >
                    {fLinks[1].name}
                  </Link>

                  <Link
                    className={
                      "px-3 font-light text-gray-500 text-[1rem] hover:text-gray-900"
                    }
                    href={"/"}
                  >
                    {fLinks[2].name}
                  </Link>
                </ul>

                <div
                  className={"-skew-x-12 bg-gray-200/70 px-[0.05rem] py-4"}
                ></div>

                <ul>
                  <Link
                    className={
                      "px-3 font-light text-gray-500 text-[1rem] hover:text-gray-900"
                    }
                    href={"/"}
                  >
                    {fLinks[3].name}
                  </Link>
                  <Link
                    className={
                      "px-3 font-light text-gray-500 text-[1rem] hover:text-gray-900"
                    }
                    href={"/"}
                  >
                    {fLinks[4].name}
                  </Link>

                  <Link
                    className={
                      "px-3 font-light text-gray-500 text-[1rem] hover:text-gray-900"
                    }
                    href={"/"}
                  >
                    {fLinks[5].name}
                  </Link>

                  <Link
                    className={
                      "px-3 font-light text-gray-500 text-[1rem] hover:text-gray-900"
                    }
                    href={"/"}
                  >
                    {fLinks[6].name}
                  </Link>
                </ul>
              </div>

              {/*-----------------------------------------------*/}
              <div
                className={
                  "rounded-sm w-full h-[0.05rem] bg-gradient-to-r from-gray-300/40 via-gray-300/80 to-gray-300/40 opacity-100 px-[0.05rem] my-4"
                }
              />
              {/*-----------------------------------------------*/}
              <Link
                className={
                  "px-4 font-semibold text-gray-800/90 text-lg hover:text-gray-400 "
                }
                href={"/"}
              >
                {sLinks[0].name}
              </Link>
              <Link
                className={
                  "px-4 font-semibold text-gray-800/90 text-lg hover:text-gray-400"
                }
                href={"/"}
              >
                {sLinks[1].name}
              </Link>
              <Link
                className={
                  "px-4 font-semibold text-gray-800/90 text-lg hover:text-gray-400"
                }
                href={"/"}
              >
                {sLinks[2].name}
              </Link>
              <Link
                className={
                  "px-4 font-semibold text-gray-800/90 text-lg hover:text-gray-400"
                }
                href={"/"}
              >
                {sLinks[3].name}
              </Link>
              <Link
                className={
                  "px-4 font-semibold text-gray-800/90 text-lg hover:text-gray-400"
                }
                href={"/"}
              >
                {sLinks[4].name}
              </Link>
              <Link
                className={
                  "px-4 font-semibold text-gray-800/90 text-lg hover:text-gray-400"
                }
                href={"/"}
              >
                {sLinks[5].name}
              </Link>

              <div className={"group inline-flex"}>
                <span
                  className={
                    "group px-4 font-semibold text-gray-800/90 text-lg pb-5 group-hover:text-gray-400"
                  }
                  href={"/"}
                >
                  Tum Sporlar
                  <span className={"inline-flex relative"}>
                    <svg
                      className={
                        "w-4 h-6 absolute -top-[1.18rem] -right-7 group-hover:opacity-40"
                      }
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                  </span>
                </span>

                <div
                  className={
                    "hidden group-hover:block absolute top-36 px-32 py-56 border shadow bg-neutral-50-50 rounded-lg rounded-br-[3rem]"
                  }
                >
                  <ul
                    className={
                      "absolute left-0 top-0 flex w-64 h-80 pt-5 px-4 flex-col gap-4"
                    }
                  >
                    <Link
                      href={"/"}
                      className={
                        "text-slate-800-300 text-2xl font-light hover:bg-gray-100 hover:rounded-md rounded-br-3xl px-2 py-1"
                      }
                    >
                      Snooker
                    </Link>
                    <Link
                      href={"/"}
                      className={
                        "text-slate-800-300 text-2xl font-light hover:bg-gray-100 hover:rounded-md rounded-br-3xl px-2 py-1"
                      }
                    >
                      Atletizm
                    </Link>

                    <Link
                      href={"/"}
                      className={
                        "text-slate-800-300 text-2xl font-light hover:bg-gray-100 hover:rounded-md rounded-br-3xl px-2 py-1"
                      }
                    >
                      Kis Sporlari
                    </Link>

                    <Link
                      href={"/"}
                      className={
                        "text-slate-800-300 text-2xl font-light hover:bg-gray-100 hover:rounded-md rounded-br-3xl px-2 py-1"
                      }
                    >
                      Hentbol
                    </Link>

                    <Link
                      href={"/"}
                      className={
                        "text-slate-800-300 text-2xl font-light hover:bg-gray-100 hover:rounded-md rounded-br-3xl px-2 py-1"
                      }
                    >
                      At Yarisi
                    </Link>

                    <Link
                      href={"/"}
                      className={
                        "text-slate-800-300 text-2xl font-light hover:bg-gray-100 hover:rounded-md rounded-br-3xl px-2 py-1"
                      }
                    >
                      Golf
                    </Link>

                    <Link
                      href={"/"}
                      className={
                        "text-slate-800-300 text-2xl font-light hover:bg-gray-100 hover:rounded-md rounded-br-3xl px-2 py-1"
                      }
                    >
                      Amerikan Futbolu
                    </Link>
                  </ul>
                </div>
              </div>

              {/*-----------------------------------------------*/}

              {/*-----------------------------------------------*/}
            </div>
          </div>

          <div className={"pl-8 flex items-center gap-4 justify-around"}>
            <span className={""}>
              <svg
                className={"w-5 h-5 hover:opacity-50"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
              </svg>
            </span>
            {/*-----------------------------------------------*/}
            <div
              className={"-skew-x-12 bg-gray-200/70 px-[0.05rem] py-4"}
            ></div>
            {/*-----------------------------------------------*/}
            <Link href={"/"} className={"hover:opacity-50"}>
              Giris Yap
            </Link>
          </div>
        </m.div>
      </div>
    </AnimatePresence>
  );
};

export default NavBar;
