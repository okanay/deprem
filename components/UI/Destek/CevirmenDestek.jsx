import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { emergencyCity, TurkeyCity } from "../../../helper/getCityAndStreet";
import { getLanguages } from "../../../helper/getLanguages";

const Info1Data = getLanguages;
const CevirmenDestek = ({
  destekFormik,
  destekSchema,
  setValidationSchema,
}) => {

  const cevirmenSchema = Yup.object({
    info1: Yup.string().required("En az 1 adet dil seçmelisiniz."),
  });

  const [uniqueInputs, setUniqueInputs] = useState({
    info1: "",
    info2: "",
    info3: "",
  });
  const [selectedLanguages, setSelectedLanguages] = useState([{ value : "" },{ value : "" },{ value : "" }]);
  const [selectedInfo1, setSelectedInfo1] = useState("");
  const [selectedInfo2, setSelectedInfo2] = useState("");
  const [selectedInfo3, setSelectedInfo3] = useState("");
  const [hiddenMenu, setHiddenMenu] = useState(false);
  const [prevIndex, setPrevIndex] = useState(0);


  useEffect(() => {
    const combinedSchema = Yup.object().shape({
      ...destekSchema.fields,
      ...cevirmenSchema.fields,
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

    setUniqueInputs({ info1: selectedLanguages[0].value, info2: selectedLanguages[1].value, info3: selectedLanguages[2].value });

    setSelectedInfo1(selectedLanguages[0].value)
    setSelectedInfo2(selectedLanguages[1].value)
    setSelectedInfo3(selectedLanguages[2].value)

  }, [selectedLanguages]);

  const handleLanguageOnClick = (event , shortName, name) => {

    let copy = selectedLanguages;
    let find = false
    let didAlreadySelect = false
    let newValue = ""
    let selectedIndex = 0

    selectedLanguages.map((item, i) => {

      if (item.value === shortName)
      {
        didAlreadySelect = true
        find = true
        selectedIndex = i
        newValue = ""
      }
    }) // Burada tiklanan dil daha once secilmis mi o kontrol ediliyor.
    selectedLanguages.map((item, i) => {

      if (!didAlreadySelect && item.value !== shortName && !find)
      {
        find = true
        selectedIndex = prevIndex
        setPrevIndex(() => {

          const newPrev = prevIndex === 2 ? 0 : (prevIndex + 1)
          return newPrev
        })
        newValue = shortName
      }
    }) // Burada toplamda 3 dil secildiyse ve secilen dil secilenlerden farkliysa prevIndex e gore degistiriyor.
    selectedLanguages.map((selected, index) => {

      if (didAlreadySelect && find) return
      if (selected.value === "")
      {
        didAlreadySelect = true
        find = true
        setPrevIndex(0)
        selectedIndex = index
        newValue = shortName
      }
    }) // Burada toplamda 3 dilin tamami secilmediyse, bosta kalan dil hakki degistiriliyor.

    copy[selectedIndex].value = newValue
    setSelectedLanguages([...copy])
  };

  return (
    <div className={"flex flex-col text-sm mt-2 mb-4"}>
      <div className={"flex flex-col gap-1 justify-between items-start"}>
        <button
          type={"button"}
          onClick={() => {
            setHiddenMenu(!hiddenMenu);
          }}
          className={
            "border-l-[4px] border-red-400 bg-neutral-50 w-full h-10 shadow-sm shadow-neutral-800/20"
          }
        >
          <div className={"flex flex-row justify-between items-center h-full"}>
            <div className="flex flex-col px-2">
              <p className={"text-lg text-neutral-700"}>Dil Seçin</p>
            </div>
            <div className="flex flex-col px-2">
              <p className={"text-base text-neutral-500"}>| {selectedInfo1}  {selectedInfo2}  {selectedInfo3}</p>
            </div>
          </div>
        </button>

        {hiddenMenu && (
          <div
            className={
              "flex flex-col bg-neutral-50 w-full border-b-2 border-slate-500 h-32 overflow-y-scroll scrollbar-hide"
            }
          >
            {getLanguages.map((item) => {
              return (
                <div key={item.key} className="flex items-center">
                  <button
                    onClick={(event) => {handleLanguageOnClick(event, item.shortName, item.name)}}
                    type={"button"}
                    className={`h-8 w-full flex flex-col justify-center px-2 hover:bg-gray-100 text-neutral-500 ${selectedInfo1 === item.shortName && "text-neutral-700 font-semibold"} ${selectedInfo2 === item.shortName && "text-neutral-700 font-semibold"} ${selectedInfo3 === item.shortName && "text-neutral-700 font-semibold"}`}>
                    <p>{item.name}</p>
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CevirmenDestek;
