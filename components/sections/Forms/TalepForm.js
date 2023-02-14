
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
import { cityData} from "../../../helper/getCityAndStreet";

const TalepForm = ({ formName, formFullListURL, type }) => {
  const handleSelectedOption = (event) => {
    setSelectedOption(() => {
      talepFormik.values.status = parseInt(event.target.value);
      return event.target.value;
    });
  };
  const handleKVKChecked = (event) => {
    const state = event.target.checked ? "true" : undefined;
    talepFormik.values.kvk = state;
    setCheckedOption(state);
  };
  const handleCityChange = (event) => {

    const value = event.target.value
    const response = cityData.find(item => { return item.text === value })

    if (response !== undefined)
    {
      setStreetNames(response.districts)
    }
    else
    {
      setStreetNames([{value: 'defaultValue', text: 'defaultText'}])
    }

    setSelectedCity(value)
    talepFormik.values.city = value
    setSelectedStreet("")
    talepFormik.values.street = ""

  }
  const handleStreetChange = (event) => {
    setSelectedStreet(event.target.value)
    talepFormik.values.street = event.target.value
  }

  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState(null);
  const [checkedOption, setCheckedOption] = useState(false);
  const [isFormSucces, setIsFormSucces] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedStreet, setSelectedStreet] = useState("");
  const [streetNames , setStreetNames] = useState([{value : "defaultValue", text : "defaultText"}]);

  const talepSchema = Yup.object({
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
    city: Yup.string()
      .required("Lütfen bulunduğunuz Şehiri seçin.")
      .min(2, "Lütfen bulunduğunuz Şehiri seçin."),
    street: Yup.string()
      .required("Lütfen bulunduğunuz İlçeyi seçin.")
      .min(2, "Lütfen bulunduğunuz İlçeyi seçin."),
    addressDes: Yup.string()
      .required("Lütfen adresinizi detaylandırın.")
      .max(80, "Açık adresiniz için maksimum karakter sayısı 80'dir"),
    status: Yup.string().required("Lütfen ifade edecek durumu seçin"),
    details: Yup.string()
      .required("Lütfen talebinizi dikkatli bir şekilde detaylandırın.")
      .max(260, "Detaylandırmanız için maksimum karakter sayısı 260'dir"),
    kvk: Yup.string().required(
      "KVKK kurallarını okuyup onaylamanız gerekiyor."
    ),
  });
  const talepFormik = useFormik({
    initialValues: {
      type : type,
      name: "",
      email: "",
      phone: "",
      city: "",
      street: "",
      addressDes: "",
      status: "",
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
        console.log(values);
        talepFormik.setErrors({ error: error.systemMessage });
        // talepFormik.setErrors({ error: error.message });
        actions.setSubmitting(false);
      } else {
        router.push("/");
      }
    },
  });

  const personelInfoElements = [
    {
      key: "FE0",
      type: "text",
      maxLength: "40",
      minLength: "0",
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
      maxLength: "40",
      minLength: "0",
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
      maxLength: "40",
      minLength: "0",
      inputMode: "tel",
      id: "formElementsTalepPhone",
      name: "phone",
      description: "Telefon Numaranız",
      src: "/formIcons/phone.png",
      formik: talepFormik.values.phone,
      error: talepFormik.errors.phone,
    },
  ];
  const addressElements = {
      key: "FE5",
      type: "text",
      maxLength: "80",
      minLength: "0",
      inputMode: "text",
      id: "formElementsTalepAddressDes",
      name: "addressDes",
      description: "Açık Adres Tarifiniz",
      src: "/formIcons/infoAddress.png",
      formik: talepFormik.values.addressDes,
      error: talepFormik.errors.addressDes,
    }
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
        {/* Dikkat Uyarisi */}
        <RedAlert title={"Lütfen Dikkat!"}>
          Eğer bu yardım talebini daha önce gönderdiysen lütfen tekrar gönderme.
        </RedAlert>

        {/* BAŞLIK */}
        <FormTitle formFullListURL={formFullListURL} formName={formName} />
        {/* FORMIK */}
        <form onSubmit={talepFormik.handleSubmit}>

          {/* FORM SECTION - 1 || Name,Email,Phone */}
          {personelInfoElements.map((item) => {
            return (
              <CostumInput key={item.key} item={item} formik={talepFormik} />
            );
          })}

          {/* Dikkatlice Secin Uyarilari - 2 Adet */}
          <div className={'flex flex-row gap-4 justify-between'}>
            <p className={`text-start text-[0.7rem] ${talepFormik.errors.status ? "text-red-500" : "text-gray-400"}`}>
              Yaşadığınız sıkıntının aciliyetini dikkatli bir şekilde seçin.
            </p>
            <p className={`text-end ml-8 text-[0.7rem] ${talepFormik.errors.city || talepFormik.errors.status ? "text-red-500" : "text-gray-400"}`}>
                 Size ulaşacak ekipler için adresinizi dikkatli bir şekilde seçin.
              </p>
          </div>

          {/* FORM SECTION - 2 || Hafif,Orta,Kritik ve Şehir ve İlçe' */}
          <div className="grid grid-cols-3 gap-3 my-4 items-center">

            {/* State Inputs || Hafif,Orta,Kritik */}
            <div className={'col-span-1'}>
              <div className={"flex flex-col"}>
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
            </div>

            {/* SELECT INPUT || Şehir ve İlçe */}
            <div className={'col-span-2 flex flex-col gap-2 items-center justify-between '}>

              {/* Şehir */}
              <div className="flex w-full">
                <select value={talepFormik.values.city} onChange={handleCityChange} className={"form-select appearance-none focus-visible:border-neutral-800 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"}>
                  <option selected={selectedCity === ''} value={''}>Şehir</option>
                  {cityData.map(item => { return (
                    <option key={item.value + item.text} selected={selectedCity === item.text} value={item.text}>{item.text}</option>
                  )})}
                </select>
              </div>

              {/* İlçe */}
              <div className="flex w-full">
                <select disabled={selectedCity === ''} value={talepFormik.values.street} onChange={handleStreetChange} className={"form-select appearance-none focus-visible:border-neutral-800 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"}>
                  <option selected={selectedStreet === ""} value={""}>İlçe</option>
                  {streetNames.map(item => { return (
                    <option key={item.value} selected={selectedStreet === item.text} value={item.text}>{item.text}</option>
                  )})}
                </select>
              </div>
            </div>
          </div>

          {/* ADRES DETAYLANDIRMA*/}
          <div className={'py-1'}>
            <CostumInput formik={talepFormik} item={addressElements}/>
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
          <div
            className={
              "flex flex-col-4 justify-between items-center content-center"
            }
          >
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

