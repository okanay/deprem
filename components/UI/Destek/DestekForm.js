import * as Yup from "yup";
import { useFormik } from "formik";

import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";
import fetchPostData from "../../costumHooks/fetchPostData";
import CustomInput from "../Inputs/CustomInput";
import CustomTextAreaInput from "../Inputs/CustomTextAreaInput";
import RedAlert from "../Re-Useables/RedAlert";
import FormTitle from "../Re-Useables/FormTitle";
import Kvk from "../Re-Useables/KVK";
import KvkCheckBox from "../Re-Useables/KvkCheckBox";
import SubmitButton from "../Re-Useables/SubmitButton";
import KonaklamaDetay from "./KonaklamaDetay";
import OperasyonDetay from "./OperasyonDetay";
import NakliyeDestek from "./NakliyeDestek";
import CevirmenDestek from "./CevirmenDestek";
import AramaKurtarma from "./AramaKurtarma";

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
  details: Yup.string()
    .required("Lütfen talebinizi dikkatli bir şekilde detaylandırın.")
    .max(260, "Detaylandırmanız için maksimum karakter sayısı 260'dir"),
  kvk: Yup.string().required(
    "KVKK kurallarını okuyup onaylamanız gerekiyor."
  ),
});

const DestekForm = ({ formName, formFullListURL, type }) => {

  const router = useRouter();
  const handleKVKChecked = (event) => {
    const state = event.target.checked ? "true" : undefined;
    destekFormik.values.kvk = state;
    setCheckedOption(state);
  };
  const [checkedOption, setCheckedOption] = useState(false);
  const [validationSchema, setValidationSchema] = useState(destekSchema);

  const destekFormik = useFormik({
    initialValues: {
      type: type,
      name: "",
      email: "",
      phone: "",
      details: "",
      kvk: "",
    },
    validateOnChange: false, // this one
    validateOnBlur: false,
    validationSchema : validationSchema,

    onSubmit: async (values, actions) => {


      console.log(values);

      const [error, result] = await fetchPostData(
        "http://localhost:8888/deprem/talep.php",
        values
      );

      if (error !== null) {
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
      id: "formElementsDestekName",
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
      id: "formElementsDestekEmail",
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
      id: "formElementsDestekPhone",
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
    id: "formElementsDestekDetails",
    name: "details",
    description: "Lütfen yapabileceginiz yardimi detaylandırın.",
    src: "/svg/details.svg",
    formik: destekFormik.values.details,
    error: destekFormik.errors.details,
  };

  console.log(new Date().getTime());

  return (<div className={"bg-gray-50 max-w-screen-tablet w-full py-8 px-4 mx-auto"}>
      <div className={"flex flex-col justify-between gap-7"}>
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
              <CustomInput key={item.key} item={item} formik={destekFormik} />
            );
          })}

          {/* Konaklama Formu */}
          {router.query.formType === "kd" && (<KonaklamaDetay destekFormik={destekFormik} destekSchema={destekSchema} setValidationSchema={setValidationSchema}/>)}

          {/* Arama Kurtarma Formu */}
          {router.query.formType === "akd" && (<AramaKurtarma destekFormik={destekFormik} destekSchema={destekSchema} setValidationSchema={setValidationSchema}/>)}

          {/* Operasyon Formu */}
          {router.query.formType === "obd" && (<OperasyonDetay destekFormik={destekFormik} destekSchema={destekSchema} setValidationSchema={setValidationSchema}/>)}

          {/* Nakliye Formu */}
          {router.query.formType === "ntd" && (<NakliyeDestek destekFormik={destekFormik} destekSchema={destekSchema} setValidationSchema={setValidationSchema}/>)}

          {/* Cevirmenlik Formu */}
          {router.query.formType === "cd" && (<CevirmenDestek destekFormik={destekFormik} destekSchema={destekSchema} setValidationSchema={setValidationSchema}/>)}

          {/* FORM SECTION - 3 || Detaylandirma TextArea */}
          <CustomTextAreaInput formik={destekFormik} details={details}/>

          {/* FORM SECTION - 4 || KVK Component */}
          <Kvk />

          {/* FORM SECTION - 5 || ERRORS */}
          <div className={'mt-4'}>
          {Object.values(destekFormik.errors).length > 0 && (
              <h1
                className={
                  "text-red-500 bg-red-200 border-l-[3px] border-orange-400 text-center text-sm text-semibold py-2 px-1 mb-4 mx-4"
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


