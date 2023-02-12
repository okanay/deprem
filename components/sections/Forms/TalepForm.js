import Link from "next/link";
import Image from "next/image";

import * as Yup from "yup";
import { useFormik } from "formik";

import React, { useState } from "react";
import { useRouter } from "next/router";
import fetchPostData from "../../costumHooks/fetchPostData";
import CostumInput from "../../UI/CostumInput";
import CostumRadioInput from "../../UI/CostumRadioInput";
import CostumTextAreaInput from "../../UI/CostumTextAreaInput";
import RedAlert from "../../UI/RedAlert";
import FormTitle from "../../UI/FormTitle";
import Kvk from "../../UI/KVK";
import KvkCheckBox from "../../UI/KvkCheckBox";
import SubmitButton from "../../UI/SubmitButton";

const TalepForm = ({ formName, formFullListURL }) => {
  const handleSelectedOption = (event) => {
    setSelectedOption(() => {
      talepFormik.values.status = event.target.value;
      return event.target.value;
    });
  };
  const handleKVKChecked = (event) => {
    const state = event.target.checked ? "true" : undefined;
    talepFormik.values.kvk = state;
    setCheckedOption(state);
  };

  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState(null);
  const [checkedOption, setCheckedOption] = useState(false);
  const [isFormSucces, setIsFormSucces] = useState(false);

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
      .max(6, "Sifreniz minimum 6 haneli olmalidir.")
      .min(4, "Sifreniz maksimum 4 haneli olmalidir.")
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

    onSubmit: async (values, actions) => {
      const [error, result] = await fetchPostData(
        "http://localhost:8888/deprem/talep.php",
        values
      );

      if (error !== null) {
        talepFormik.setErrors({ error: error.systemMessage });
        // talepFormik.setErrors({ error: error.message });
        actions.setSubmitting(false);
      } else {
        router.push("/");
      }
    },
  });

  const formElements = [
    {
      key: "FE0",
      type: "text",
      maxLength: 40,
      minLength: 0,
      inputMode: "text",
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
      maxLength: 40,
      minLength: 0,
      inputMode: "email",
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
      maxLength: 40,
      minLength: 0,
      inputMode: "tel",
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
      maxLength: 100,
      minLength: 0,
      inputMode: "text",
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
      maxLength: 100,
      minLength: 0,
      inputMode: "text",
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
      value: "0",
      labelColor: "peer-checked:text-emerald-400",
    },
    {
      key: "FE7",
      id: "radioInputEnkazTalepOrta",
      name: "Orta",
      value: "1",
      labelColor: "peer-checked:text-orange-300",
    },
    {
      key: "FE8",
      id: "radioInputEnkazTalepKritik",
      name: "Kritik",
      value: "2",
      labelColor: "peer-checked:text-red-400",
    },
  ];
  const passwordInput = [
    {
      key: "FE11",
      type: "password",
      inputMode: "number",
      maxLength: 6,
      minLength: 4,
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
      maxLength: 6,
      minLength: 4,
      inputMode: "number",
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
    <div className={"bg-gray-50 max-w-screen-phoneXS phoneLG:max-w-screen-phoneLG phone:max-w-screen-phone w-full py-8 px-4 mx-auto"}>

      <div className={"flex flex-col justify-between gap-6"}>

        {/* TALEP PAGE || Dikkat Uyarisi ve Baslik */}

        <RedAlert title={"Lütfen Dikkat!"}>
          Eğer bu yardım talebini daha önce gönderdiysen lütfen tekrar gönderme.
        </RedAlert>
        <FormTitle formFullListURL={formFullListURL} formName={formName} />

        {/* FORMIK */}
        <form onSubmit={talepFormik.handleSubmit}>

          {/* FORM SECTION - 1 || Name,Email,Phone,Addresses */}
          {formElements.map((item) => {
            return (
              <CostumInput key={item.key} item={item} formik={talepFormik} />
            );
          })}

          {/* FORM SECTION - 2 || Hafif,Orta,Kritik ve Sifre */}
          <div className="flex flex-row justify-between mt-5 content-center">

            {/* Doğru durumu secmeye özen gösterin. || State Inputs */}
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
                  <CostumRadioInput
                    key={item.key}
                    handleSelectedOption={handleSelectedOption}
                    item={item}
                    selectedOption={selectedOption}
                  />
                );
              })}
            </div>

            {/* Bu formdaki paylaşılan kişisel bilgileri şifreleyin. || Password Inputs */}
            <div className={"flex flex-col"}>
              <div className={"mb-3 "}>
                <p className={"text-[0.7rem] text-gray-400 w-48"}>
                  Bu formdaki paylaşılan kişisel bilgileri şifreleyin. Sadece
                  şifre sahibi kişiler formdaki bilgilere ulaşabilir.
                </p>
              </div>

              {passwordInput.map((item) => {
                return (
                  <CostumInput
                    key={item.key}
                    item={item}
                    formik={talepFormik}
                  />
                );
              })}
            </div>
          </div>

          {/* FORM SECTION - 3 || Detaylandirma TextArea */}
          <CostumTextAreaInput formik={talepFormik} details={details} />

          {/* FORM SECTION - 4 || KVK Component */}
          <Kvk />

          {/* FORM SECTION - 5 || ERRORS */}
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

          {/* FORM SECTION - 6 || KVK Checkbox - Submit Buttons */}
          <div className={"flex flex-col-4 justify-between items-center content-center"}>
            <KvkCheckBox
              formik={talepFormik}
              handleKVKChecked={handleKVKChecked}
            />
            <SubmitButton />
          </div>

        </form>

      </div>
    </div>
  );
};

export default TalepForm;
