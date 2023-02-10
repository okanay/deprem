import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const EnkazTalep = ({formName, formFullListURL}) => {


  const formElements = [
    {
      key: "FE0",
      type: "text",
      id: "formElementsEnkazName",
      name: "name",
      description: "Adınız",
      src: "/formIcons/profile.png",
    },
    {
      key: "FE1",
      type: "email",
      id: "formElementsEnkazEmail",
      name: "email",
      description: "Email Adresiniz",
      src: "/formIcons/email.png",
    },
    {
      key: "FE2",
      type: "number",
      id: "formElementsEnkazPhone",
      name: "phone",
      description: "Telefon Numaranız",
      src: "/formIcons/phone.png",
    },
    {
      key: "FE4",
      type: "text",
      id: "formElementsEnkazAddress",
      name: "Address",
      description: "Adresiniz",
      src: "/formIcons/address.png",
    },
    {
      key: "FE5",
      type: "text",
      id: "formElementsEnkazAddressDes",
      name: "AddressDes",
      description: "Açık Adres Tarifiniz",
      src: "/formIcons/infoAddress.png",
    },
  ];

  const radioInput = [
    {
      id: "radioInputEnkazTalepHafif",
      name: "Hafif",
      labelColor: "peer-checked:text-emerald-400",
    },
    {
      id: "radioInputEnkazTalepOrta",
      name: "Orta",
      labelColor: "peer-checked:text-orange-300",
    },
    {
      id: "radioInputEnkazTalepKritik",
      name: "Kritik",
      labelColor: "peer-checked:text-red-400",
    },
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div
      className={
        "bg-gray-50 max-w-screen-phoneXS phoneLG:max-w-screen-phoneLG phone:max-w-screen-phone w-full py-8 px-4 mx-auto"
      }
    >
      <div className={"flex flex-col justify-between gap-6"}>
        <div
          className=" bg-red-100 border-l-4 border-orange-400 text-orange-700 p-4"
          role="alert"
        >
          <p className="font-bold">Lütfen Dikkat!</p>

          <p className={"row-span-1"}>
            Eğer bu yardım talebini daha önce gönderdiysen lütfen tekrar
            gönderme.
          </p>
        </div>

        <div className={"flex flex-row justify-between items-center"}>
          <h1
            className={"text-lg font-semibold text-neutral-700 text-start my-5"}
          >
            <span className={"text-slate-600/90 "}>{formName}</span>{" "}
            <span className={"font-light font-serif"}>Formu</span>
          </h1>
          <Link
            href={formFullListURL}
            className={
              "py-2 px-2 rounded-md bg-slate-50 border border-slate-800/20 text-slate-700/90 shadow shadow-blue-400/30 uppercase font-bold text-sm transition-colors duration-300 hover:bg-slate-600/90 hover:text-slate-50"
            }
          >
            TAM-LISTE
          </Link>
        </div>

        <form>
          {formElements.map((item) => {
            return (
              <div key={item.key} className={"relative mb-1 pb-[0.7rem]"}>
                <input
                  className={
                    "peer appearance-none focus:outline-none transition duration-300 focus:border-slate-800 placeholder:text-transparent w-full px-9 h-10 bg-gray-50 border-b-2 border-slate-500"
                  }
                  type={item.type}
                  placeholder={item.description}
                  name={item.name}
                  id={item.id}
                />

                <Image
                  src={item.src}
                  width={"200"}
                  height={"200"}
                  alt={item.name}
                  className={"absolute top-2.5 left-2 w-5 h-5"}
                />

                <label
                  htmlFor={item.name}
                  className={
                    "absolute left-0 -top-2.5 text-gray-400 text-[0.7rem] peer-placeholder-shown:text-[0.85rem] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 transition-all duration-300 pointer-events-none"
                  }
                >
                  {item.description}
                </label>
              </div>
            );
          })}

          <div className="flex flex-row justify-between mt-5 content-center">
            <div className={"flex flex-col"}>
              <div className={"mb-3 "}>
                <p className={"text-[0.7rem] text-gray-400"}>
                  Doğru durumu secmeye özen gösterin.
                </p>
              </div>
              {radioInput.map((item) => {
                return (
                  <div key={item.id} className="mb-2 relative">
                    <input
                      type="radio"
                      id={item.id}
                      name={item.name}
                      value={item.name}
                      checked={selectedOption === item.name}
                      onChange={handleOptionChange}
                      placeholder={"test"}
                      className="rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer peer"
                    />
                    <label
                      htmlFor={item.name}
                      className={`${item.labelColor} absolute top-0 left-6 peer-checked:font-semibold`}
                    >
                      {item.name}
                    </label>
                  </div>
                );
              })}
            </div>
            <div className={"flex flex-col"}>
              <div className={"mb-3 "}>
                <p className={"text-[0.7rem] text-gray-400 w-48"}>
                  Bu formdaki paylaşılan kişisel bilgileri şifreleyin. Sadece şifre sahibi kişiler formdaki bilgilere ulaşabilir.
                </p>
              </div>
              <div className={"relative py-2"}>
                <input
                  className={
                    "peer focus:outline-none transition duration-300 focus:border-slate-800 placeholder:text-transparent w-full px-9 h-10 bg-gray-50 border-b-2 border-slate-500"
                  }
                  type={"password"}
                  placeholder={"Password"}
                  name="email"
                />
                <Image
                  src={"/formIcons/password.png"}
                  width={"200"}
                  height={"200"}
                  alt={"hash"}
                  className={"absolute top-3.5 left-2 w-5 h-5"}
                />

                <label
                  htmlFor={"password"}
                  className={
                    "absolute left-0 -top-1 text-gray-400 text-[0.7rem] peer-placeholder-shown:text-[0.85rem] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-10 transition-all duration-300 pointer-events-none"
                  }
                >
                  Şifrenizi Girin
                </label>
              </div>

              <div className={"relative py-2"}>
                <input
                  className={
                    "peer focus:outline-none transition duration-300 focus:border-slate-800 placeholder:text-transparent w-full px-9 h-10 bg-gray-50 border-b-2 border-slate-500"
                  }
                  type={"password"}
                  placeholder={"Password"}
                  name="email"
                />
                <Image
                  src={"/formIcons/confirmPassword.png"}
                  width={"200"}
                  height={"200"}
                  alt={"hash"}
                  className={"absolute top-3.5 left-2 w-5 h-5"}
                />

                <label
                  htmlFor={"password"}
                  className={
                    "absolute left-0 -top-1 text-gray-400 text-[0.7rem] peer-placeholder-shown:text-[0.85rem] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-10 transition-all duration-300 pointer-events-none"
                  }
                >
                  Şifrenizi Tekrar Girin
                </label>
              </div>
            </div>
          </div>

          <div className={"relative py-2"}>
            <textarea
              className={
                "peer focus:outline-none transition duration-300 focus:border-gray-800 placeholder:text-transparent w-full px-9 py-1 h-30 bg-gray-50 border-2 border-slate-500"
              }
              rows="8"
              maxLength="400"
              placeholder={"Fikirlerinizi bizimle belirtebilirsiniz.."}
              name="message"
            />
            <Image
              src={"/formIcons/information.png"}
              width={"200"}
              height={"200"}
              alt={"hash"}
              className={"absolute top-4 left-2 w-5 h-5"}
            />

            <label
              htmlFor={"message"}
              className={
                "absolute left-0 -top-2.5 text-gray-400 text-[0.7rem] peer-placeholder-shown:text-[0.85rem] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:left-10 transition-all duration-300 pointer-events-none"
              }
            >
              Talep Hakkında Bilgi Verin
            </label>
          </div>

          <div className={'text-[0.7rem] text-gray-400 pb-5'}>
            <p>
              6698 sayılı KVKK kapsamında “Uygulamamıza depremzede ya da
              depremzede yakını olarak kaydolan kullanıcılardan ad, soyadı,
              iletişim bilgisi, log kaydı ve depremzedenin sisteme girilen ve
              kendileri tarafından alenileştirilmiş konum verilerini
              topluyoruz.” Veri işleme hukuki sebeplerimizi, amaçlarımızı görmek
              ve haklarınızı öğrenmek için <Link href={'/kvk'} className={'text-gray-800 font-semilbold'}>Aydınlatma Metnini</Link> ziyaret etmek
              ister misiniz?{" "}
            </p>
          </div>

          <div className={"flex flex-col-4 justify-between items-center content-center"}>

            <div className="mb-2 relative">
              <input
                type="checkbox"
                id={'kvk'}
                name={'kvk'}
                className="rounded-full h-4 w-4 border border-gray-300 bg-white active:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer peer"
              />
              <label
                htmlFor={'kvk'}
                className={'absolute w-48 top-1 left-6 text-[0.7rem] text-gray-500 peer-checked:font-semibold peer-checked:text-gray-700'}
              >
                KVK Kurallarini Onayliyorum
              </label>
            </div>


            <button
              type={"button"}
              className={
                "py-2 px-6 bg-blue-400 border border-gray-400/20 rounded-md text-center text-slate-50 transition duration-300 hover:text-slate-50 hover:bg-slate-500 mr-2"
              }
              onClick={(e) => {
                console.log(selectedOption);
              }}
            >
              Gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnkazTalep;
