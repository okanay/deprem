const ContactMe = () => {
  return (
    <div
      className={
        "bg-gray-50 max-w-screen-phoneXS phoneLG:max-w-screen-phoneLG phone:max-w-screen-phone w-full py-8 px-4 mx-auto text-center"
      }
    >
      <h1
        className={
          "text-[1.4rem] font-semibold text-neutral-700 text-start mb-5"
        }
      >
        <span className={"text-slate-600/90 "}>Mesaj</span>{" "}
        <span className={"font-light font-serif"}>Gönder</span>
      </h1>

      <form className={"flex flex-col gap-4 justify-between"} onSubmit={event => event.preventDefault()}>
        <div className={'relative py-2'}>
          <input className={"peer focus:outline-none focus:border-blue-400 placeholder:text-transparent w-full h-10 bg-gray-50 border-b-2 border-gray-400"}
                 type={"text"}
                 placeholder={"Adiniz"}
                 name="name"
                 id="name"
          />
          <label htmlFor={'name'} className={'absolute left-0 -top-1.5 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 transition-all duration-150 pointer-events-none'}>Adiniz</label>
        </div>

        <div className={'relative py-2'}>
          <input className={"peer focus:outline-none focus:border-blue-400 placeholder:text-transparent w-full h-10 bg-gray-50 border-b-2 border-gray-400"}
                 type={"email"}
                 placeholder={"Email Adresiniz"}
                 name="email"
          />
          <label htmlFor={'email'} className={'absolute left-0 -top-1.5 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 transition-all duration-150 pointer-events-none'}>Email Adresiniz</label>
        </div>

        <div className={'relative py-2'}>
          <textarea className={"peer focus:outline-none focus:border-blue-400 placeholder:text-transparent w-full h-32 bg-gray-50 border-b-2 border-gray-400"}
                    rows="8"
                    maxlength="400"
                    type={"text"}
                    placeholder={"Fikirlerinizi bizimle belirtebilirsiniz.."}
                    name="message"
          />
          <label htmlFor={'message'} className={'absolute left-0 -top-1.5 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 transition-all duration-150 pointer-events-none'}>Dusuncelerinizi yazabilirsiniz..</label>
        </div>
          <div className={'flex flex-col-4 justify-end items-end'}>
            <button type={"submit"} className={'py-2 px-6 bg-blue-400 border border-gray-400/20 rounded-md text-center text-slate-50 transition duration-300 hover:text-slate-50 hover:bg-slate-500'}>Gönder</button>
          </div>
      </form>
    </div>
  );
};

export default ContactMe;
