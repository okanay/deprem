import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import ExtendedFormItemInput from "../Inputs/ExtendedFormItemInput";

const KonaklamaDetay = ({
  destekFormik,
  destekSchema,
  setValidationSchema,
}) => {
  const [uniqueInputs, setUniqueInputs] = useState({
    info1: "",
    info2: "",
  });
  const konaklamaSchema = Yup.object({
    info1: Yup.number()
      .required("Kişi sayısı alanı zorunludur")
      .lessThan(100, "Kişi sayısı için maksimum karakter 2'dir."),
    info2: Yup.string()
      .required("Gün sayısı alanı zorunludur")
      .max(10, "Gün sayısı için maksimum karakter 10'dur."),
  });
  const konaklamaData = [
    {
      key: "KD_Key01",
      description: "Lütfen konaklayabileceğiniz kişi sayısını belirtin.",
      name: "Kişi Sayısı",
      input: {
        key: "KD_1",
        type: "number",
        maxLength: "2",
        minLength: "0",
        inputMode: "number",
        id: "info1",
        name: "info1",
        description: "Kişi Sayısı",
        src: "/svg/people.svg",
        alt: "kisi sayisi",
        formik: destekFormik.values.info1,
        error: destekFormik.errors.info1,
      },
    },
    {
      key: "KD_Key02",
      description:
        "Lütfen misafirlerinizi kaç gün ağırlayabileceğinizi belirtin.",
      name: "Ağırlama",
      input: {
        key: "KD_2",
        type: "text",
        maxLength: "10",
        minLength: "0",
        inputMode: "text",
        id: "info2",
        name: "info2",
        description: "Ağırlama Süresi",
        src: "/svg/deadline.svg",
        alt: "süre",
        formik: destekFormik.values.info2,
        error: destekFormik.errors.info2,
      },
    },
  ];

  useEffect(() => {
    const combinedSchema = Yup.object().shape({
      ...destekSchema.fields,
      ...konaklamaSchema.fields,
    });
    setValidationSchema(combinedSchema);
  }, []);
  useEffect(() => {
    destekFormik.setValues({
      ...destekFormik.values,
      ...uniqueInputs,
    });
  }, [uniqueInputs]);

  return (
    <div className={"flex flex-col py-0.5 text-sm mt-2 mb-4"}>
      <div className={"flex flex-row justify-start items-start gap-4"}>
        <div className={"flex flex-col w-full gap-4"}>
          <div className={"flex flex-row justify-between items-center w-full gap-6"}>
            <p
              className={`phone:text-[0.75rem] text-[0.65rem] w-full ${
                destekFormik.errors.info1 ? "text-red-500" : "text-gray-400"
              } text-start`}
            >
              {konaklamaData[0].description}
            </p>
            <div className={"w-full"}>
              <ExtendedFormItemInput
                item={konaklamaData[0].input}
                uniqueInput={uniqueInputs}
                setUniqueInputs={setUniqueInputs}
                name={"info1"}
                value={uniqueInputs.info1}
              />
            </div>
          </div>
          <div className={"flex flex-row justify-between items-center w-full gap-6"}>
            <p
              className={`phone:text-[0.75rem] text-[0.65rem] w-full ${
                destekFormik.errors.info2 ? "text-red-500" : "text-gray-400"
              } text-start`}
            >
              {konaklamaData[1].description}
            </p>
            <div className={"w-full"}>
              <ExtendedFormItemInput
                item={konaklamaData[1].input}
                uniqueInput={uniqueInputs}
                setUniqueInputs={setUniqueInputs}
                name={"info2"}
                value={uniqueInputs.info2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KonaklamaDetay;
