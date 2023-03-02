import Image from "next/image";
import React from "react";
import Link from "next/link";
import KVK from "../UI/Re-Useables/KVK";

const ContactMe = () => {
  return (
    <div
      id={"contact-me"}
      className={"bg-gray-50 max-w-screen-tablet w-full py-8 mx-auto text-center px-4"}>

      <h1 className={"text-[1.4rem] font-semibold text-neutral-700 text-start mb-5"}>
        <span className={"text-slate-600/90 "}>Mesaj</span>{" "}
        <span className={"font-light font-serif"}>Gönder</span>
      </h1>

      <form className={"flex flex-col gap-4 justify-between "} onSubmit={event => event.preventDefault()}>
        <div className={"relative py-2"}>
          <input
            className={
              "peer appearance-none focus:outline-none transition duration-300 focus:border-slate-800 placeholder:text-transparent w-full px-9 h-10 bg-gray-50 border-[0px] rounded-[0px] border-b-2 border-slate-500"
            }
            type={"name"}
            placeholder={"name"}
            name="name"
          />
          <Image
            src={"/svg/profile.svg"}
            priority={true}
            loading={'eager'}
            width={"200"}
            height={"200"}
            alt={'name'}
            className={"absolute top-4 left-2 w-5 h-5"}
          />

          <label
            htmlFor={'name'}
            className={`absolute left-1 -top-1 text-gray-400 peer-placeholder-shown:text-gray-400 text-[0.7rem] peer-placeholder-shown:text-[0.85rem] peer-placeholder-shown:top-4 peer-placeholder-shown:left-10 transition-all duration-300 pointer-events-none`}
          >
            Adınız
          </label>
        </div>
        <div className={"relative py-2"}>
          <input
            className={
              "peer appearance-none focus:outline-none transition duration-300 focus:border-slate-800 placeholder:text-transparent w-full px-9 h-10 bg-gray-50 border-[0px] rounded-[0px] border-b-2 border-slate-500"
            }
            type={"email"}
            placeholder={"email"}
            name="email"
          />
          <Image
            src={"/svg/email.svg"}
            priority={true}
            loading={'eager'}
            width={"200"}
            height={"200"}
            alt={'email'}
            className={"absolute top-4 left-2 w-5 h-5"}
          />

          <label
            htmlFor={'email'}
            className={`absolute left-1 -top-1 text-gray-400 peer-placeholder-shown:text-gray-400 text-[0.7rem] peer-placeholder-shown:text-[0.85rem] peer-placeholder-shown:top-4 peer-placeholder-shown:left-10 transition-all duration-300 pointer-events-none`}
          >
            Email Adresiniz
          </label>
        </div>
        <div className={"relative py-2"}>
            <textarea
              className={
                "peer appearance-none focus:outline-none transition duration-300 focus:border-slate-800 placeholder:text-transparent w-full px-9 h-28 bg-gray-50 border-[0px] rounded-[0px] border-b-2 border-slate-500"
              }
              rows="8"
              maxLength="400"
              placeholder={"Düşüncelerinizi Yazın."}
              name="message"
            />
          <Image
            src={"/svg/details.svg"}
            priority={true}
            loading={'eager'}
            width={"200"}
            height={"200"}
            alt={'details'}
            className={"absolute top-2.5 left-2 w-5 h-5"}
          />

          <label
            htmlFor={'message'}
            className={`absolute left-1 -top-3 text-gray-400 peer-placeholder-shown:text-gray-400 text-[0.7rem] peer-placeholder-shown:text-[0.85rem] peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 transition-all duration-300 pointer-events-none`}
          >
            Düşüncelerinizi belirtin.
          </label>
        </div>
        <KVK/>
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
              className={'absolute w-48 top-1 left-0 text-[0.7rem] text-gray-500 peer-checked:font-semibold peer-checked:text-gray-700'}
            >
              KVK Kurallarini Onayliyorum
            </label>
          </div>


          <Link
            href={'/#'}
            className={
              "py-2 px-6 bg-blue-400 border border-gray-400/20 rounded-md text-center text-slate-50 transition duration-300 hover:text-slate-50 hover:bg-slate-500 mr-2"
            }
          >
            Gönder
          </Link>
        </div>
        </form>
    </div>

  );
};

export default ContactMe;
