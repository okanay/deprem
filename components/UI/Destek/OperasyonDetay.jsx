import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import ExtendedFormItemInput from "../Inputs/ExtendedFormItemInput";
import { cityData } from "../../../helper/getCityAndStreet";

const Info1Data = [
  {
    key: "I1_DATA_1",
    value: "Çadır",
    extended : " Kurabilirim"
  },
  {
    key: "I1_DATA_2",
    value: "İş Makinesi",
    extended : " Kullanabilirim"
  },
  {
    key: "I1_DATA_3",
    value: "Yemek",
    extended : " Yapabilirim"
  },
  {
    key: "I1_DATA_4",
    value: "Servis",
    extended : " Yapabilirim"
  },
  {
    key: "I1_DATA_5",
    value: "Temizlik",
    extended : " Yapabilirim"
  },
  {
    key: "I1_DATA_6",
    value: "Güvenlik",
    extended : " Sağlayabilirim"
  },
];
const Info2Data = [
  {
  key: "I2_DATA_1",
  value: "Deneyimsiz"
  },
  {
    key: "I2_DATA_2",
    value: "Deneyimli"
  },
  {
    key: "I2_DATA_3",
    value: "Profesyönel"
  }
];
const OperasyonDetay = ({ destekFormik, destekSchema, setValidationSchema, }) => {

  const [selectedInfo1, setSelectedInfo1] = useState({ key: "I1_DATA_0", value: '' });
  const [selectedInfo2, setSelectedInfo2] = useState({ key: "I2_DATA_0", value: '' });
  const [uniqueInputs, setUniqueInputs] = useState({
    info1: "",
    info2: "",
  });

  const operasyonSchema = Yup.object({
    info1: Yup.string()
      .required("info1 zorunludur"),
    info2: Yup.string()
      .required("info2 zorunludur").min(2, "info2 zorunludur.")
  });

  useEffect(() => {
    const combinedSchema = Yup.object().shape({
      ...destekSchema.fields,
      ...operasyonSchema.fields,
    });
    setValidationSchema(combinedSchema);
  }, []);
  useEffect(() => {
    destekFormik.setValues({
      ...destekFormik.values,
      ...uniqueInputs,
    });

  }, [uniqueInputs]);
  useEffect(() => {

    setUniqueInputs({ info1 : selectedInfo1.value, info2 : selectedInfo2.value});

  }, [selectedInfo1, selectedInfo2]);

  const handleInfo1Change = (event) => {

    const value = event.target.value;
    const response = Info1Data.find((item) => {return item.value === value;});

    if (response !== undefined)
    {
      setSelectedInfo1({ key: "I1_DATA_0", value: response.value })
    }
    else
    {
      setSelectedInfo1({ key: "I1_DATA_0", value: '' })
      setSelectedInfo2({ key: "I2_DATA_0", value: '' })
    }
  };
  const handleInfo2Change = (event) => {

    const value = event.target.value;
    const response = Info2Data.find((item) => {return item.value === value;});

    if (response !== undefined)
    {
      setSelectedInfo2({ key: "I2_DATA_0", value: response.value })
    }
    else
    {
      setSelectedInfo2({ key: "I2_DATA_0", value: '' })
    }
  };

  return (
    <div className={"flex flex-col py-0.5 text-sm mt-2 mb-4"}>
      <div className={"flex flex-row justify-start items-start gap-4"}>
        <div className={"flex flex-col gap-4"}>

          {/* Görev */}
          <div>
            <select
              className={"form-select appearance-none focus-visible:border-neutral-800 block w-28 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"}
              onChange={handleInfo1Change}
              value={selectedInfo1.value}
            >
              <option defaultValue={''}>Görev</option>
              {Info1Data.map(item => { return (
                <option key={item.key} value={item.value}>{item.value + item.extended}</option>
              )})}
            </select>
          </div>

          {/*Deneyim*/}
          <div>
            <select
              disabled={selectedInfo1.value === ''}
              className={"form-select appearance-none focus-visible:border-neutral-800 block w-28 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"}
              onChange={handleInfo2Change}
              value={selectedInfo2.value}
            >
              <option defaultValue={''}>Deneyim</option>
              {Info2Data.map(item => { return (
                <option key={item.key} value={item.value}>{item.value}</option>
              )})}
            </select>
          </div>
        </div>

        <div className={"flex flex-col gap-4"}>

          <p
            className={`text-start text-[0.7rem] ${
              destekFormik.errors.info1 ? "text-red-500" : "text-gray-400"
            } text-start`}
          >
            Operasyonlarda yapabileceginiz sorumluluğu lütfen belirtin.
          </p>
          <p
            className={`text-start text-[0.7rem] ${
              destekFormik.errors.info2 ? "text-red-500" : "text-gray-400"
            } text-start`}
          >
            Yapabileceğiniz sorumlulukta ne seviyede olduğunuzu lütfen belirtin.
          </p>

        </div>
      </div>
    </div>
  );
};

export default OperasyonDetay;
