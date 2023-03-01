import Link from "next/link";

const LoginIndex = () =>{

  return (
    <div className="max-w-screen-phoneXS phoneLG:max-w-screen-phoneLG phone:max-w-screen-phone w-full h-[44rem] px-4 bg-gray-50">
      <div className={'flex flex-col items-center justify-center gap-4 pt-12'}>
          <h1 className="text-3xl font-bold text-center cursor-pointer">Giriş Yap</h1>
          <p className="w-80 text-center text-xs font-semibold text-gray-700 tracking-wide cursor-pointer mb-4">
            Daha önce email adresiniz ile oluşturduğunuz destek ve talep formları korunmaktadır.</p>

          <input type="text" placeholder="Email Adresiniz"
                 className="text-sm py-3 px-4 rounded-lg w-full border outline-none" />
          <input type="text" placeholder="Şifreniz"
                 className="text-sm py-3 px-4 rounded-lg w-full border outline-none" />

          <button className="py-2 px-8 text-xl text-white bg-blue-400 rounded-lg mt-4">Giriş Yap</button>

          <p className="text-xs">Hesabınız yok mu? {" "}
            <Link href={'/kayit'} className="underline">Kayıt Ol</Link>
          </p>
        </div>
    </div>
  )
}

export default LoginIndex



/*


 */