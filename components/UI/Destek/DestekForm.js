import * as Yup from "yup";
import { useFormik } from "formik";

import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";
import fetchPostData from "../../costumHooks/fetchPostData";
import CostumInput from "../Inputs/CostumInput";
import CostumTextAreaInput from "../Inputs/CostumTextAreaInput";
import RedAlert from "../Re-Useables/RedAlert";
import FormTitle from "../Re-Useables/FormTitle";
import Kvk from "../Re-Useables/KVK";
import KvkCheckBox from "../Re-Useables/KvkCheckBox";
import SubmitButton from "../Re-Useables/SubmitButton";
import KonaklamaDetay from "./KonaklamaDetay";

const DestekForm = ({ formName, formFullListURL, type }) => {
  const router = useRouter();
  const [checkedOption, setCheckedOption] = useState(false);
  const handleKVKChecked = (event) => {
    const state = event.target.checked ? "true" : undefined;
    destekFormik.values.kvk = state;
    setCheckedOption(state);
  };

  const destekSchema = Yup.object({
    name: Yup.string()
      .required("Lütfen adınızı girin.")
      .max(40, "Adınız için maksimum karakter sayısı 40'dır"),
    email: Yup.string()
      .email("Girdiğiniz email adresi geçersiz.")
      .required("Lütfen aktif kullandığınız bir email adresi girin.")
      .max(40, "Email adresiniz için maksimum karakter sayısı 40'dır"),
    phone: Yup.number()
      .required("Lütfen telefon numaranızı girin.")
      .lessThan(10000000000, "Örnek telefon numarası || 532-456-78-90")
      .moreThan(999999999, "Örnek telefon numarası || 532-456-78-90"),
    informationOne: Yup.string()
      .required("Lütfen bilgilendirme formunu doldurun.")
      .max(40, "Detaylandırmanız için maksimum karakter sayısı 40'dir"),
    informationTwo: Yup.string()
      .required("Lütfen bilgilendirme formunu doldurun.")
      .max(40, "Detaylandırmanız için maksimum karakter sayısı 40'dir"),
    details: Yup.string()
      .required("Lütfen talebinizi dikkatli bir şekilde detaylandırın.")
      .max(260, "Detaylandırmanız için maksimum karakter sayısı 260'dir"),
    kvk: Yup.string().required(
      "KVKK kurallarını okuyup onaylamanız gerekiyor."
    ),
  });
  const destekFormik = useFormik({
    initialValues: {
      type: type,
      name: "",
      email: "",
      phone: "",
      informationOne: "",
      informationTwo: "",
      informationThree: "",
      informationFour: "",
      details: "",
      kvk: "",
    },
    validateOnChange: false, // this one
    validateOnBlur: false,
    validationSchema: destekSchema,

    onSubmit: async (values, actions) => {
      const [error, result] = await fetchPostData(
        "http://localhost:8888/deprem/talep.php",
        values
      );

      if (error !== null) {
        console.log(values);
        destekFormik.setErrors({ error: error.systemMessage });
        // talepFormik.setErrors({ error: error.message });
        actions.setSubmitting(false);
      } else {
        router.push("/");
      }
    },
  });

  const information = [
    {
      key: "FE0",
      type: "text",
      maxLength: "40",
      minLength: "0",
      inputMode: "text",
      id: "formElementsTalepName",
      name: "name",
      description: "Adınız",
      src: "/svg/profile.svg",
      formik: destekFormik.values.name,
      error: destekFormik.errors.name,
    },
    {
      key: "FE1",
      type: "email",
      maxLength: "40",
      minLength: "0",
      inputMode: "email",
      id: "formElementsTalepEmail",
      name: "email",
      description: "Email Adresiniz",
      src: "/svg/email.svg",
      formik: destekFormik.values.email,
      error: destekFormik.errors.email,
    },
    {
      key: "FE2",
      type: "number",
      maxLength: "40",
      minLength: "0",
      inputMode: "tel",
      id: "formElementsTalepPhone",
      name: "phone",
      description: "Telefon (5XX XXX XX XX)",
      src: "/svg/phone.svg",
      formik: destekFormik.values.phone,
      error: destekFormik.errors.phone,
    },
  ];
  const details = {
    key: "FE12",
    rows: 8,
    maxLength: 400,
    id: "formElementsDetails",
    name: "details",
    description: "Lütfen yapabileceginiz yardimi detaylandırın.",
    src: "/svg/details.svg",
    formik: destekFormik.values.details,
    error: destekFormik.errors.details,
  };

  return (
    <div
      className={
        "bg-gray-50 max-w-screen-phoneXS phoneLG:max-w-screen-phoneLG phone:max-w-screen-phone w-full py-8 px-4 mx-auto"
      }
    >
      <div className={"flex flex-col justify-between gap-6"}>
        {/* Dikkat Uyarisi */}
        <RedAlert title={"Lütfen Dikkat!"}>
          Eğer bu yardım talebini daha önce gönderdiysen lütfen tekrar gönderme.
        </RedAlert>

        {/* BAŞLIK */}
        <FormTitle formFullListURL={formFullListURL} formName={formName} />
        {/* FORMIK */}
        <form onSubmit={destekFormik.handleSubmit}>
          {/* FORM SECTION - 1 || Name,Email,Phone */}
          {information.map((item) => {
            return (
              <CostumInput key={item.key} item={item} formik={destekFormik} />
            );
          })}

          {/* Konaklama Formu */}
          {router.query.formType === "kd" && (<KonaklamaDetay destekFormik={destekFormik} />)}

          {/* FORM SECTION - 3 || Detaylandirma TextArea */}
          <CostumTextAreaInput formik={destekFormik} details={details} />

          {/* FORM SECTION - 4 || KVK Component */}
          <Kvk />

          {/* FORM SECTION - 5 || ERRORS */}
          <div>
            {Object.values(destekFormik.errors).length > 0 && (
              <h1
                className={
                  "text-red-500 bg-red-200 border-l-2 border-orange-400 text-center text-sm text-semibold rounded py-2 px-1 mb-4 mx-4"
                }
              >
                <span className={"text-gray-600  font-semibold"}>
                  {Object.values(destekFormik.errors).length} HATA :{" "}
                </span>
                {Object.values(destekFormik.errors)[0]}
              </h1>
            )}
          </div>

          {/* FORM SECTION - 6 || KVK Checkbox - Submit Buttons */}
          <div
            className={
              "flex flex-col-4 justify-between items-center content-center"
            }
          >
            <KvkCheckBox
              formik={destekFormik}
              handleKVKChecked={handleKVKChecked}
            />
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DestekForm;
