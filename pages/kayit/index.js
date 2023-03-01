import Link from "next/link";
import KVK from "../../components/UI/Re-Useables/KVK";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import KvkCheckBox from "../../components/UI/Re-Useables/KvkCheckBox";

const RegisterIndex = () => {
  const [checkedOption, setCheckedOption] = useState(false);
  const registerSchema = Yup.object({
    email: Yup.string()
      .email("Girdiğiniz email adresi geçersiz.")
      .required("Lütfen aktif kullandığınız bir email adresi girin.")
      .max(40, "Email adresiniz için maksimum karakter sayısı 40'dır"),
    password: Yup.string()
      .required("Lütfen şifrenizi girin.")
      .max(16, "Şifreniz için maksimum karakter sayısı 16'dır")
      .min(6, "Şifreniz için minimum karakter sayısı 6'dir"),
    phone: Yup.number()
      .required("Lütfen telefon numaranızı girin.")
      .lessThan(10000000000, "Örnek telefon numarası || 532-456-78-90")
      .moreThan(999999999, "Örnek telefon numarası || 532-456-78-90"),
    address: Yup.string()
      .required("Lütfen adresinizi detaylandırın.")
      .max(260, "Adresiniz için maksimum karakter sayısı 260'dir"),
    kvk: Yup.string().required(
      "KVKK kurallarını okuyup onaylamanız gerekiyor."
    ),
  });
  const registerFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
      phone: "",
      address: "",
      kvk: "",
    },
    validateOnChange: false, // this one
    validateOnBlur: false,
    validationSchema: registerSchema,

    onSubmit: async (values, actions) => {
      console.log(values);

      registerFormik.setErrors({ error: "Sunucu aktif degil." });
    },
  });

  const handleKVKChecked = (event) => {
    const state = event.target.checked ? "true" : undefined;
    registerFormik.values.kvk = state;
    setCheckedOption(state);
  };

  return (
    <div className="max-w-screen-phoneXS phoneLG:max-w-screen-phoneLG phone:max-w-screen-phone tablet:max-w-screen-tablet w-full h-[44rem] bg-gray-50">
      <div className={"flex flex-col items-center justify-center gap-3 pt-12"}>
        <h1 className="text-3xl font-bold text-center cursor-pointer">
          Yeni Hesap Oluştur!

          <p className="text-xs text-neutral-600 mt-0.5">
            Hesabınız var mı?{" "}
            <Link href={"/giris"} className="text-blue-400 underline">
              Giriş Yap
            </Link>
          </p>
        </h1>

        <p className="w-80 text-center text-xs font-semibold text-gray-700 tracking-wide cursor-pointer mb-4">
          Daha önce email adresiniz ile oluşturduğunuz destek ve talep formları
          korunmaktadır.
        </p>

        <form
          action=""
          onSubmit={registerFormik.handleSubmit}
          className={"flex flex-col items-center justify-center gap-4 px-4"}
        >
          <input
            type="text"
            placeholder="Email Adresiniz"
            name={"email"}
            inputMode={"email"}
            className={`text-sm py-3 px-4 rounded-lg w-full border outline-none duration-300 transition ${registerFormik.errors.email && "placeholder:text-red-400"}`}
            onChange={registerFormik.handleChange}
            value={registerFormik.values.email}
          />
          <input
            type="password"
            placeholder="Şifreniz"
            name={"password"}
            inputMode={"text"}
            maxLength={16}
            minLength={6}
            className={`text-sm py-3 px-4 rounded-lg w-full border outline-none duration-300 transition ${registerFormik.errors.password && "placeholder:text-red-400"}`}
            onChange={registerFormik.handleChange}
            value={registerFormik.values.password}
          />
          <input
            type="number"
            placeholder="Telefon Numaranız"
            name={"phone"}
            inputMode={"tel"}
            className={`text-sm py-3 px-4 rounded-lg w-full border outline-none duration-300 transition ${registerFormik.errors.phone && "placeholder:text-red-400"}`}
            onChange={registerFormik.handleChange}
            value={registerFormik.values.phone}
          />
          <input
            type="text"
            placeholder="Adresiniz"
            name={"address"}
            inputMode={"text"}
            className={`text-sm py-3 px-4 rounded-lg w-full border outline-none duration-300 transition ${registerFormik.errors.address && "placeholder:text-red-400"}`}
            onChange={registerFormik.handleChange}
            value={registerFormik.values.address}
          />

          <KVK />

          <div className="flex flex-row justify-between w-full items-center my-1">
            <KvkCheckBox
              formik={registerFormik}
              handleKVKChecked={handleKVKChecked}
            />
            <button
              type={"submit"}
              className="py-2 px-8 text-xl text-white bg-blue-400 rounded-lg"
            >
              Kayıt Ol
            </button>
          </div>
        </form>

        {/* Errors */}
        <div className={"w-full px-4 mb-4"}>
          {Object.values(registerFormik.errors).length > 0 && (
            <h1
              className={
                "text-red-500 bg-red-200 border-l-[3px] border-orange-400 text-center text-sm text-semibold py-3"
              }
            >
              <span className={"text-gray-600  font-semibold"}>
                {Object.values(registerFormik.errors).length} HATA :{" "}
              </span>
              {Object.values(registerFormik.errors)[0]}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterIndex;
