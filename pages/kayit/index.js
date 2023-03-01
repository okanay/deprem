import Link from "next/link";
import KVK from "../../components/UI/Re-Useables/KVK";

const RegisterIndex = () =>{

  return (
    <div className="max-w-screen-phoneXS phoneLG:max-w-screen-phoneLG phone:max-w-screen-phone w-full h-[44rem] px-4 bg-gray-50">
      <div className={'flex flex-col items-center justify-center gap-4 pt-12'}>
        <h1 className="text-3xl font-bold text-center cursor-pointer">Yeni Hesap Oluştur!</h1>
        <p className="w-80 text-center text-xs font-semibold text-gray-700 tracking-wide cursor-pointer mb-4">
          Daha önce email adresiniz ile oluşturduğunuz destek ve talep formları korunmaktadır.</p>

        <input type="text" placeholder="Email Adresiniz"
               className="text-sm py-3 px-4 rounded-lg w-full border outline-none" />
        <input type="text" placeholder="Şifreniz"
               className="text-sm py-3 px-4 rounded-lg w-full border outline-none" />
        <input type="number" inputMode={"tel"} placeholder="Telefon Numaranız"
               className="text-sm py-3 px-4 rounded-lg w-full border outline-none" />
        <input type="text" placeholder="Adresiniz"
               className="text-sm py-3 px-4 rounded-lg w-full border outline-none" />

        <KVK />

        <button className="py-2 px-8 text-xl text-white bg-blue-400 rounded-lg mt-4">Kayıt Ol</button>
        <p className="text-xs">Hesabınız var mı? {" "}
          <Link href={'/giris'} className="underline">Giriş Yap</Link>
        </p>

      </div>
    </div>
  )
}

export default RegisterIndex

