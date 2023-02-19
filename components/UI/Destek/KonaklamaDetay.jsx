import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import CustomInputNoFormik from "../Inputs/CustomInputNoFormik";

const KonaklamaDetay = ({ destekFormik, destekSchema, setValidationSchema}) => {

  const [uniqueInputs, setUniqueInputs] = useState({
    kacGun: "",
    kacKisi: "",
  });
  const konaklamaSchema = Yup.object({
    kacKisi: Yup.number().required("Kisi sayisi alanı zorunludur"),
    kacGun: Yup.number().required("Gun sayisi alanı zorunludur"),
  });
  const konaklamaData = [
    {
      key: "KD_Key02",
      description:
        "Lütfen misafirlerinizi kaç gün ağırlayabileceğinizi belirtin.",
      name: "Gün Sayısı",
      input: {
        key: "KD_1",
        type: "text",
        maxLength: "40",
        minLength: "0",
        inputMode: "text",
        id: "kacGun",
        name: "kacGun",
        description: "Gün Sayısı",
        src: "/svg/deadline.svg",
        alt: "süre",
        formik: destekFormik.values.kacGun,
        error: destekFormik.errors.kacGun,
      },
    },
    {
      key: "KD_Key01",
      description: "Lütfen konaklayabileceğiniz kişi sayısını belirtin.",
      name: "Kişi Sayısı",
      input: {
        key: "KD_0",
        type: "text",
        maxLength: "40",
        minLength: "0",
        inputMode: "text",
        id: "kacKisi",
        name: "kacKisi",
        description: "Kişi Sayısı",
        src: "/svg/people.svg",
        alt: "kisi sayisi",
        formik: destekFormik.values.kacKisi,
        error: destekFormik.errors.kacKisi,
      },
    },
  ];

  useEffect(() => {

    const combinedSchema = Yup.object().shape({
      ...destekSchema.fields,
      ...konaklamaSchema.fields,
    });
    setValidationSchema(combinedSchema)

  }, [])
  useEffect(() => {

    destekFormik.setValues({
      ...destekFormik.values,
      ...uniqueInputs,
    });

  }, [uniqueInputs]);

  return (
    <div className={"flex flex-col py-0.5 text-sm"}>
      <div className={"flex flex-col gap-4 items-center"}>
        <div className={"flex flex-row gap-4"}>
          <p
            className={`text-start text-[0.7rem] ${
              destekFormik.errors.kacGun ? "text-red-500" : "text-gray-400"
            } text-start`}
          >
            {konaklamaData[0].description}
          </p>

          <p
            className={`text-start text-[0.7rem] ${
              destekFormik.errors.kacKisi ? "text-red-500" : "text-gray-400"
            } text-start`}
          >
            {konaklamaData[1].description}
          </p>
        </div>

        <div className={"flex flex-row gap-4"}>
          <CustomInputNoFormik
            item={konaklamaData[0].input}
            uniqueInput={uniqueInputs}
            setUniqueInputs={setUniqueInputs}
            name={'kacGun'}
            value={uniqueInputs.kacGun}

          />
          <CustomInputNoFormik
            item={konaklamaData[1].input}
            uniqueInput={uniqueInputs}
            setUniqueInputs={setUniqueInputs}
            name={'kacKisi'}
            value={uniqueInputs.kacKisi}
          />
        </div>
      </div>
    </div>
  );
};

export default KonaklamaDetay;
