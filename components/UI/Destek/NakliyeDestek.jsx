import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import ExtendedFormItemInput from "../Inputs/ExtendedFormItemInput";
import { emergencyCity, TurkeyCity } from "../../../helper/getCityAndStreet";

const Info1Data = TurkeyCity
const Info2Data = TurkeyCity
const Info3Data = [
  {
    key: "I2_DATA_1",
    value: "Gıda ve Malzeme"
  },
  {
    key: "I2_DATA_2",
    value: "Gönüllü İnsan"
  },
  {
    key: "I2_DATA_3",
    value: "Depremzede İnsan"
  },
];
const NakliyeDestek = ({ destekFormik, destekSchema, setValidationSchema, }) => {

  const [selectedInfo1, setSelectedInfo1] = useState({ key: "I1_DATA_0", value: '' });
  const [selectedInfo2, setSelectedInfo2] = useState({ key: "I2_DATA_0", value: '' });
  const [selectedInfo3, setSelectedInfo3] = useState({ key: "I3_DATA_0", value: '' });
  const [uniqueInputs, setUniqueInputs] = useState({
    info1: "",
    info2: "",
    info3: "",
  });

  const nakliyeSchema = Yup.object({
    info1: Yup.string()
      .required("info1 zorunludur"),
    info2: Yup.string()
      .required("info2 zorunludur").min(2, "info2 zorunludur."),
    info3: Yup.string()
      .required("info2 zorunludur").min(2, "info2 zorunludur."),
  });

  useEffect(() => {
    const combinedSchema = Yup.object().shape({
      ...destekSchema.fields,
      ...nakliyeSchema.fields,
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

    setUniqueInputs({info1 : selectedInfo3.value, info2 : selectedInfo2.value, info3 : selectedInfo1.value});

  }, [selectedInfo1, selectedInfo2, selectedInfo3]);

  const handleInfo1Change = (event) => {

    const value = event.target.value;
    const response = Info1Data.find((item) => {return item.name === value;});

    if (response !== undefined)
    {
      setSelectedInfo1({ key: "I1_DATA_0", value: response.name })
    }
    else
    {
      setSelectedInfo1({ key: "I1_DATA_0", value: '' })
      setSelectedInfo2({ key: "I2_DATA_0", value: '' })
      setSelectedInfo3({ key: "I3_DATA_0", value: '' })
    }
  };
  const handleInfo2Change = (event) => {

    const value = event.target.value;
    const response = Info2Data.find((item) => {return item.name === value;});

    if (response !== undefined)
    {
      setSelectedInfo2({ key: "I2_DATA_0", value: response.name })
    }
    else
    {
      setSelectedInfo2({ key: "I2_DATA_0", value: '' })
      setSelectedInfo3({ key: "I3_DATA_0", value: '' })
    }
  };
  const handleInfo3Change = (event) => {

    const value = event.target.value;
    const response = Info3Data.find((item) => {return item.value === value;});

    if (response !== undefined)
    {
      setSelectedInfo3({ key: "I3_DATA_0", value: response.value })
    }
    else
    {
      setSelectedInfo3({ key: "I3_DATA_0", value: '' })
    }
  };

  return (
    <div className={"flex flex-col py-0.5 text-sm mt-2 mb-4"}>
      <div className={"flex flex-row justify-start items-start gap-4"}>
          <div className={"flex flex-col gap-4"}>
          <div className="flex flex-row justify-start items-start gap-2">
          {/* Kalkış Noktası */}
          <div>
            <select
              className={`text-gray-700 form-select appearance-none focus-visible:border-neutral-800 block w-32 phoneLG:w-56 px-3 py-1.5 text-base font-normal bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
              onChange={handleInfo1Change}
              value={selectedInfo1.text}
            >
              <option defaultValue={''}>Kalkış</option>
              {Info1Data.map((item, index) => { return (
                <option key={item.name + "Info1"} value={item.name}>{item.name}</option>
              )})}
            </select>
          </div>

          {/* Info1 Aciklama*/}
          <p
            className={`text-start text-[0.7rem] ${
              destekFormik.errors.info1 ? "text-red-500" : "text-gray-400"
            } text-start`}
          >
            Lütfen hangi şehirden kalkış yapabileceğinizi belirtin.
          </p>
        </div>
          <div className="flex flex-row justify-start items-start gap-2">
          {/* Varış Noktası */}
          <div>
            <select
              disabled={selectedInfo1.value === ''}
              className={`text-gray-700 form-select disabled:bg-gray-200/80 appearance-none focus-visible:border-neutral-800 block w-32 phoneLG:w-56 px-3 py-1.5 text-base font-normal bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
              onChange={handleInfo2Change}
              value={selectedInfo2.value}
            >
              <option defaultValue={''}>Varış</option>
              {Info2Data.map((item, index) => { return (
                <option key={item.name + "Info2"} value={item.name}>{item.name}</option>
              )})}
            </select>
          </div>

          {/* Info2 Aciklama*/}
          <p
            className={`text-start text-[0.7rem] ${
              destekFormik.errors.info2 ? "text-red-500" : "text-gray-400"
            } text-start`}
          >
            Lütfen hangi şehir için nakliye veya taşıma yapabileceğinizi belirtin.
          </p>
        </div>
          <div className="flex flex-row justify-start items-start gap-2">
          {/*Nakliye Tipi*/}
          <div>
            <select
              disabled={selectedInfo2.value === ''}
              className={`text-gray-700 form-select disabled:bg-gray-200/80 appearance-none focus-visible:border-neutral-800 block w-32 phoneLG:w-56 px-3 py-1.5 text-base font-normal bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
              onChange={handleInfo3Change}
              value={selectedInfo3.value}
            >
              <option defaultValue={''}>Taşıma Tipi</option>
              {Info3Data.map(item => { return (
                <option key={item.key} value={item.value}>{item.value}</option>
              )})}
            </select>
          </div>

          {/* Info3 Aciklama*/}
          <p
            className={`text-start text-[0.7rem] ${
              destekFormik.errors.info3 ? "text-red-500" : "text-gray-400"
            } text-start`}
          >
            Lütfen yapabileceğiniz nakliyenin ne olduğu hakkında bilgi verin.
          </p>

        </div>
        </div>
      </div>
    </div>
  );
};

export default NakliyeDestek;
