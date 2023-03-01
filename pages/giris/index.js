import Link from "next/link";
import KVK from "../../components/UI/Re-Useables/KVK";
import KvkCheckBox from "../../components/UI/Re-Useables/KvkCheckBox";
import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

const LoginIndex = () =>{

  const loginSchema = Yup.object({
    email: Yup.string()
      .email("Girdiğiniz email adresi geçersiz.")
      .required("Lütfen kayıtlı olduğunuz email adresini girin.")
      .max(40, "Email adresiniz için maksimum karakter sayısı 40'dır"),
    password: Yup.string()
      .required("Lütfen şifrenizi girin.")
      .max(16, "Şifreniz için maksimum karakter sayısı 16'dır")
      .min(6, "Şifreniz için minimum karakter sayısı 6'dir"),
  });
  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnChange: false, // this one
    validateOnBlur: false,
    validationSchema: loginSchema,

    onSubmit: async (values, actions) => {
      console.log(values);

      loginFormik.setErrors({ error: "Sunucu aktif degil." });
    },
  });

  return (
    <div className="max-w-screen-tablet w-full h-[30rem] bg-gray-50">
      <div className={"flex flex-col items-center justify-center gap-3 pt-12"}>
        <h1 className="text-3xl font-bold text-center cursor-pointer">
          Kullanıcı Girişi!
        </h1>

        <p className="w-80 text-center text-xs font-semibold text-gray-700 tracking-wide cursor-pointer mb-4">
          Daha önce email adresiniz ile oluşturduğunuz destek ve talep formları
          korunmaktadır.
        </p>

        <form
          action=""
          onSubmit={loginFormik.handleSubmit}
          className={"flex flex-col items-center justify-center gap-4 px-4 w-full"}
        >
          <input
            type="text"
            placeholder="Email Adresiniz"
            name={"email"}
            inputMode={"email"}
            className={`text-sm py-3 px-4 rounded-lg w-full border outline-none duration-300 transition ${loginFormik.errors.email && "placeholder:text-red-400"}`}
            onChange={loginFormik.handleChange}
            value={loginFormik.values.email}
          />
          <input
            type="password"
            placeholder="Şifreniz"
            name={"password"}
            inputMode={"text"}
            maxLength={16}
            minLength={6}
            className={`text-sm py-3 px-4 rounded-lg w-full border outline-none duration-300 transition ${loginFormik.errors.password && "placeholder:text-red-400"}`}
            onChange={loginFormik.handleChange}
            value={loginFormik.values.password}
          />

          <div className="flex flex-col justify-center w-full items-center my-1">
            <button
              type={"submit"}
              className="py-2 px-8 text-xl text-white bg-blue-400 rounded-lg"
            >
              Giriş Yap
            </button>

            <p className="text-xs text-neutral-600 mt-2">
              Hesabınız yok mu?{" "}
              <Link href={"/kayit"} className="text-blue-400 underline">
                Kayıt Ol
              </Link>
            </p>
          </div>
        </form>

        {/* Errors */}
        <div className={"w-full px-4 mb-4"}>
          {Object.values(loginFormik.errors).length > 0 && (
            <h1
              className={
                "text-red-500 bg-red-200 border-l-[3px] border-orange-400 text-center text-sm text-semibold py-3"
              }
            >
              <span className={"text-gray-600  font-semibold"}>
                {Object.values(loginFormik.errors).length} HATA :{" "}
              </span>
              {Object.values(loginFormik.errors)[0]}
            </h1>
          )}
        </div>
      </div>
    </div>
  )
}

export default LoginIndex



/*
Giriş Yap


 */