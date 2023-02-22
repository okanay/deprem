import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { emergencyCity, TurkeyCity } from "../../../helper/getCityAndStreet";




const Info1Data = TurkeyCity;
const Info2Data = TurkeyCity;
const CevirmenDestek = ({
  destekFormik,
  destekSchema,
  setValidationSchema,
}) => {
  const [selectedInfo1, setSelectedInfo1] = useState({
    key: "I1_DATA_0",
    value: "",
  });
  const [selectedInfo2, setSelectedInfo2] = useState({
    key: "I2_DATA_0",
    value: "",
  });
  const [uniqueInputs, setUniqueInputs] = useState({
    info1: "",
    info2: "",
  });

  const nakliyeSchema = Yup.object({
    info1: Yup.string().required("info1 zorunludur"),
    info2: Yup.string()
      .required("info2 zorunludur")
      .min(2, "info2 zorunludur."),
    info3: Yup.string()
      .required("info2 zorunludur")
      .min(2, "info2 zorunludur."),
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
    setUniqueInputs({ info1: selectedInfo1.value, info2: selectedInfo2.value });
  }, [selectedInfo1, selectedInfo2]);

  const handleInfo1Change = (event) => {
    const value = event.target.value;
    const response = Info1Data.find((item) => {
      return item.name === value;
    });

    if (response !== undefined) {
      setSelectedInfo1({ key: "I1_DATA_0", value: response.name });
    } else {
      setSelectedInfo1({ key: "I1_DATA_0", value: "" });
      setSelectedInfo2({ key: "I2_DATA_0", value: "" });
    }
  };
  const handleInfo2Change = (event) => {
    const value = event.target.value;
    const response = Info2Data.find((item) => {
      return item.name === value;
    });

    if (response !== undefined) {
      setSelectedInfo2({ key: "I2_DATA_0", value: response.name });
    } else {
      setSelectedInfo2({ key: "I2_DATA_0", value: "" });
    }
  };

  return (
    <div className={"flex flex-col text-sm mt-2 mb-4"}>
      <div className={"flex flex-col justify-between items-start"}>
        <div
          className={
            "bg-blue-400/80  w-full h-11 rounded shadow-sm shadow-neutral-800/20"
          }
        >
          <div className={"flex flex-row justify-between items-center h-full"}>
            <div className="flex flex-col px-2">
              <p className={"text-lg text-neutral-50"}>Dil Seçin</p>
            </div>
            <div className="flex flex-col px-2">
              <div className={'w-4 h-4'}>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CevirmenDestek;
