import Link from "next/link";
import Image from "next/image";

import * as Yup from "yup";
import { useFormik } from "formik";

import React, { useState } from "react";

const TalepForm = ({ formName, formFullListURL }) => {

  const [isFormSucces, setIsFormSucces] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSelectedOption = (event) => {
    setSelectedOption(() => {
      talepFormik.values.status = event.target.value;
      return event.target.value;
    });
  };
  const [checkedOption, setCheckedOption] = useState(false);
  const handleKVKChecked = (event) => {
    const state = event.target.checked ? "true" : undefined;
    talepFormik.values.kvk = state;
    setCheckedOption(state);
  };

  const talepSchema = Yup.object({
    name: Yup.string().required("Lütfen adınızı girin."),
    email: Yup.string()
      .email("Girdiğiniz email adresi geçersiz.")
      .required("Lütfen aktif kullandığınız bir email adresi girin."),
    phone: Yup.number().required("Lütfen telefon numaranızı girin."),
    address: Yup.string().required("Lütfen adresinizi girin."),
    addressDes: Yup.string().required("Lütfen adresinizi detaylandırın."),
    status: Yup.string().required("Lütfen ifade edecek durumu seçin"),
    password: Yup.string()
      .required("Lütfen şifrenizi girin.")
      .max(6, 'Sifreniz minimum 6 haneli olmalidir.')
      .min(4, 'Sifreniz maksimum 4 haneli olmalidir.')
      .typeError("Şifre rakamlardan oluşmalıdır"),
    confirmPassword: Yup.string()
      .required("Lütfen tekrar şifrenizi girin.")
      .oneOf([Yup.ref("password")], "Tekrar şifreniz ile şifreniz eşleşmiyor."),
    details: Yup.string().required(
      "Lütfen talebinizi dikkatli bir şekilde detaylandırın."
    ),
    kvk: Yup.string().required(
      "KVKK kurallarını okuyup onaylamanız gerekiyor."
    ),
  });

  const talepFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      addressDes: "",
      status: "",
      password: "",
      confirmPassword: "",
      details: "",
      kvk: "",
    },
    validateOnChange: false, // this one
    validateOnBlur: false,
    validationSchema: talepSchema,

    onSubmit: (values) => {
      console.log(values);

      talepFormik.setErrors({ error: "form ready for backend server" });
    },
  });

  const formElements = [
    {
      key: "FE0",
      type: "text",
      inputMode : "text",
      id: "formElementsTalepName",
      name: "name",
      description: "Adınız",
      src: "/formIcons/profile.png",
      formik: talepFormik.values.name,
      error: talepFormik.errors.name,
    },
    {
      key: "FE1",
      type: "email",
      inputMode : "email",
      id: "formElementsTalepEmail",
      name: "email",
      description: "Email Adresiniz",
      src: "/formIcons/email.png",
      formik: talepFormik.values.email,
      error: talepFormik.errors.email,
    },
    {
      key: "FE2",
      type: "number",
      inputMode : "tel",
      id: "formElementsTalepPhone",
      name: "phone",
      description: "Telefon Numaranız",
      src: "/formIcons/phone.png",
      formik: talepFormik.values.phone,
      error: talepFormik.errors.phone,
    },
    {
      key: "FE4",
      type: "text",
      inputMode : "text",
      id: "formElementsTalepAddress",
      name: "address",
      description: "Adres Tarifiniz",
      src: "/formIcons/address.png",
      formik: talepFormik.values.address,
      error: talepFormik.errors.address,
    },
    {
      key: "FE5",
      type: "text",
      inputMode : "text",
      id: "formElementsTalepAddressDes",
      name: "addressDes",
      description: "Açık Adres Tarifiniz",
      src: "/formIcons/infoAddress.png",
      formik: talepFormik.values.addressDes,
      error: talepFormik.errors.addressDes,
    },
  ];
  const radioInput = [
    {
      key: "FE6",
      id: "radioInputEnkazTalepHafif",
      name: "Hafif",
      labelColor: "peer-checked:text-emerald-400",
    },
    {
      key: "FE7",
      id: "radioInputEnkazTalepOrta",
      name: "Orta",
      labelColor: "peer-checked:text-orange-300",
    },
    {
      key: "FE8",
      id: "radioInputEnkazTalepKritik",
      name: "Kritik",
      labelColor: "peer-checked:text-red-400",
    },
  ];
  const passwordInput = [
    {
      key: "FE11",
      type: "password",
      inputMode : "number",
      auto: "false",
      id: "formElementsPassword",
      name: "password",
      description: "Sifrenizi Girin",
      src: "/formIcons/password.png",
      formik: talepFormik.values.password,
      error: talepFormik.errors.password,
    },
    {
      key: "FE10",
      type: "password",
      inputMode : "number",
      auto: "false",
      id: "formElementsConfirmPassword",
      name: "confirmPassword",
      description: "Sifrenizi Tekrar Girin",
      src: "/formIcons/confirmPassword.png",
      formik: talepFormik.values.confirmPassword,
      error: talepFormik.errors.confirmPassword,
    },
  ];
  const details = {
    key: "FE12",
    rows: 8,
    maxLength: 400,
    id: "formElementsDetails",
    name: "details",
    description: "Lütfen durumu detaylandırın.",
    src: "/formIcons/details.png",
    formik: talepFormik.values.details,
    error: talepFormik.errors.details,
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
        <form onSubmit={talepFormik.handleSubmit}>
          {formElements.map((item) => {
            return (
              <div key={item.key} className={"relative mb-1 pb-[0.7rem]"}>
                <input
                  className={
                    "peer appearance-none focus:outline-none transition duration-300 focus:border-slate-800 placeholder:text-transparent w-full px-9 h-10 bg-gray-50 border-b-2 border-slate-500"
                  }
                  type={item.type}
                  inputMode={item.inputMode}
                  placeholder={item.description}
                  name={item.name}
                  id={item.id}
                  onChange={talepFormik.handleChange}
                  value={item.formik}
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
                  className={`absolute left-0 -top-3.5 ${
                    item.error ? "text-red-400" : "text-gray-400"
                  } ${
                    item.error
                      ? "peer-placeholder-shown:text-red-400"
                      : "peer-placeholder-shown:text-gray-400"
                  } text-[0.7rem] peer-placeholder-shown:text-[0.85rem] peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 transition-all duration-300 pointer-events-none`}
                >
                  {item.description}
                </label>
              </div>
            );
          })}

          <div className="flex flex-row justify-between mt-5 content-center">
            <div className={"flex flex-col"}>
              <div className={"mb-3 "}>
                <p
                  className={`text-[0.7rem] ${
                    talepFormik.errors.status ? "text-red-500" : "text-gray-400"
                  }`}
                >
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
                      onChange={handleSelectedOption}
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
                  Bu formdaki paylaşılan kişisel bilgileri şifreleyin. Sadece
                  şifre sahibi kişiler formdaki bilgilere ulaşabilir.
                </p>
              </div>

              {passwordInput.map((item) => {
                return (
                  <div key={item.key} className={"relative py-2"}>
                    <input
                      className={
                        "peer focus:outline-none transition duration-300 focus:border-slate-800 placeholder:text-transparent w-full px-9 h-10 bg-gray-50 border-b-2 border-slate-500"
                      }
                      type={item.type}
                      maxLength={6}
                      minLength={4}
                      inputMode={item.inputMode}
                      placeholder={item.description}
                      name={item.name}
                      onChange={talepFormik.handleChange}
                      value={item.formik}
                    />
                    <Image
                      src={item.src}
                      width={"200"}
                      height={"200"}
                      alt={item.name}
                      className={"absolute top-3.5 left-2 w-5 h-5"}
                    />

                    <label
                      htmlFor={item.name}
                      className={`absolute left-0 -top-1  ${
                        item.error ? "text-red-400" : "text-gray-400"
                      } ${
                        item.error
                          ? "peer-placeholder-shown:text-red-400"
                          : "peer-placeholder-shown:text-gray-400"
                      } text-[0.7rem] peer-placeholder-shown:text-[0.85rem] peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-10 transition-all duration-300 pointer-events-none`}
                    >
                      {item.description}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={"relative py-2"}>
            <textarea
              className={
                "peer focus:outline-none transition duration-300 focus:border-gray-800 placeholder:text-transparent w-full px-9 py-1 h-30 bg-gray-50 border-2 border-slate-500"
              }
              rows={details.rows}
              maxLength={details.maxLength}
              placeholder={details.description}
              name={details.name}
              onChange={talepFormik.handleChange}
              value={details.formik}
            />
            <Image
              src={details.src}
              width={"200"}
              height={"200"}
              alt={details.name}
              className={"absolute top-4 left-2 w-5 h-5"}
            />

            <label
              htmlFor={details.name}
              className={`absolute left-0 -top-2.5 ${
                details.error ? "text-red-400" : "text-gray-400"
              } ${
                details.error
                  ? "peer-placeholder-shown:text-red-400"
                  : "peer-placeholder-shown:text-gray-400"
              } text-[0.7rem] peer-placeholder-shown:text-[0.85rem] peer-placeholder-shown:top-4 peer-placeholder-shown:left-10 transition-all duration-300 pointer-events-none`}
            >
              {details.description}
            </label>
          </div>
          <div className={"text-[0.7rem] text-gray-400 pb-5"}>
            <p>
              6698 sayılı KVKK kapsamında “Uygulamamıza depremzede ya da
              depremzede yakını olarak kaydolan kullanıcılardan ad, soyadı,
              iletişim bilgisi, log kaydı ve depremzedenin sisteme girilen ve
              kendileri tarafından alenileştirilmiş konum verilerini
              topluyoruz.” Veri işleme hukuki sebeplerimizi, amaçlarımızı görmek
              ve haklarınızı öğrenmek için{" "}
              <Link href={"/kvk"} className={"text-gray-800 font-semilbold"}>
                Aydınlatma Metnini
              </Link>{" "}
              ziyaret etmek ister misiniz?{" "}
            </p>
          </div>
          <div>
            {Object.values(talepFormik.errors).length > 0 && (
              <h1
                className={
                  "text-red-500 bg-red-200 border-l-2 border-orange-400 text-center text-sm text-semibold rounded py-2 px-1 mb-4 mx-4"
                }
              >
                <span className={"text-gray-600  font-semibold"}>
                  {Object.values(talepFormik.errors).length} HATA :{" "}
                </span>
                {Object.values(talepFormik.errors)[0]}
              </h1>
            )}
          </div>
          <div
            className={
              "flex flex-col-4 justify-between items-center content-center"
            }
          >
            <div className="mb-2 relative">
              <input
                type="checkbox"
                id={"kvk"}
                name={"kvk"}
                onChange={handleKVKChecked}
                className="rounded-full h-4 w-4 border border-gray-300 bg-white active:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer peer"
              />
              <label
                htmlFor={"kvk"}
                className={`absolute w-48 top-1 left-6 text-[0.7rem] ${
                  talepFormik.errors.kvk ? "text-red-400" : "text-gray-400"
                } peer-checked:font-semibold peer-checked:text-gray-700`}
              >
                KVK Kurallarini Onayliyorum
              </label>
            </div>
            <button
              type={"submit "}
              className={
                "py-2 px-6 bg-blue-400 border border-gray-400/20 rounded-md text-center text-slate-50 transition duration-300 hover:text-slate-50 hover:bg-slate-500 mr-2"
              }
            >
              Gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TalepForm;
