import Carousel from "framer-motion-carousel";
import Link from "next/link";
import Diveded from "../UI/diveded";

const TwitterHelperAccounts = () => {
  const TwitterAccounts = [
    {
      key: "TA0",
      profilePhoto : "TwitterAccounts/teyfiksikret.jpg",
      profileUrl: "/",
      sendMessageUrl: "/house.png",
      name: "Teyfik Sikret",
      follower : '305.619'
    },
    {
      key: "TA0",
      profilePhoto : "TwitterAccounts/player2.jpg",
      profileUrl: "/",
      sendMessageUrl: "/warm.png",
      name: "Player 2",
      follower : '50.439'
    },
    {
      key: "TA0",
      profilePhoto : "TwitterAccounts/sunguralpesat.jpg",
      profileUrl: "/",
      sendMessageUrl: "/warm.png",
      name: "Sunguralp Esat",
      follower : '83.821'
    },
  ];

  return (
    <div className={"max-w-screen-phoneXS phoneLG:max-w-screen-phoneLG phone:max-w-screen-phone w-full mx-auto text-center pt-4"}>

      <div className={'flex flex-row justify-between items-center px-4'}>
        <h1 className={"text-lg font-semibold text-neutral-700 text-start my-5"}>
          <span className={"text-blue-800/75"}>Twitter</span> Hesaplari
        </h1>
        <Link href={'/'} className={'py-3 px-2 rounded-md bg-slate-50 border border-slate-800/20 text-blue-800/75 shadow shadow-blue-800/75 uppercase font-bold text-sm'} >Hesaplar</Link>
      </div>

      <Carousel interval={8000} renderDots={() => {}}>
        {TwitterAccounts.map((item) => {
          return (
            <div key={item.key} className={"h-fit"}>
              <div className="w-full max-w-screen-phone mx-auto  ">
                <div className="flex justify-end px-4 pt-4"></div>
                <div className="flex flex-col items-center pb-10">
                  <img
                    className="w-20 h-20 mb-3 rounded-full shadow-lg object-contain"
                    src={item.profilePhoto}
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Takipci Sayisi : {item.follower}
                  </span>
                  <div className="flex mt-4 space-x-3 md:mt-6">
                    <Link
                      href={item.sendMessageUrl}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg"
                    >
                      Mesaj Gönder
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>

      <div></div>

    </div>
  );
};

export default TwitterHelperAccounts;
