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

  const [hiddenMenu, setHiddenMenu] = useState(false)
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
      <div className={"flex flex-col gap-2 justify-between items-start"}>
        <button
          type={'button'}
          onClick={() => {setHiddenMenu(!hiddenMenu)}}
          className={
            "border-l-2 border-r-2 border-blue-400 bg-neutral-50 w-full h-11 shadow-sm shadow-neutral-800/20"
          }
        >
          <div className={"flex flex-row justify-between items-center h-full"}>
            <div className="flex flex-col px-2">
              <p className={"text-lg text-neutral-700"}>Dil Seçin</p>
            </div>
            <div className="flex flex-col px-2">
              <p className={"text-lg text-neutral-700"}>|</p>
            </div>
          </div>
        </button>

        {hiddenMenu && (
          <div className={"flex flex-col bg-neutral-50 w-full shadow-sm shadow-neutral-800 h-24 overflow-y-scroll scrollbar-hide"}>
            <div className="flex items-center">
              <div className={"border-l-2 border-r-2 border-slate-500 h-8 w-full flex flex-col justify-center px-2 hover:border-emerald-400"}>
                <p>Fransizca</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className={"border-l-2 border-r-2 border-slate-500 h-8 w-full flex flex-col justify-center px-2 hover:border-emerald-400"}>
                <p>Ingılızce</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className={"border-l-2 border-r-2 border-slate-500 h-8 w-full flex flex-col justify-center px-2 hover:border-emerald-400"}>
                <p>Arapca</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className={"border-l-2 border-r-2 border-slate-500 h-8 w-full flex flex-col justify-center px-2 hover:border-emerald-400"}>
                <p>Ispanyolca</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className={"border-l-2 border-r-2 border-slate-500 h-8 w-full flex flex-col justify-center px-2 hover:border-emerald-400"}>
                <p>Almanca</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CevirmenDestek;
