import CostumInput from "../Inputs/CostumInput";
import React, { useEffect } from "react";

const KonaklamaDetay = ({destekFormik}) => {

  const data = [
    {
      key : "KD_Key02",
      description : "Lütfen misafirlerinizi kaç gün ağırlayabileceğinizi belirtin.",
      name : "Gün Sayısı",
      input : {
        key: "KD_1",
        type: "text",
        maxLength: "40",
        minLength: "0",
        inputMode: "text",
        id: "informationOne",
        name: "informationOne",
        description: "Gün Sayısı",
        src : "/svg/deadline.svg",
        alt : "süre",
        formik: destekFormik.values.informationOne,
        error: destekFormik.errors.informationOne,
      },
    },
    {
      key : "KD_Key01",
      description : "Lütfen konaklayabileceğiniz kişi sayısını belirtin.",
      name : "Kişi Sayısı",
      input : {
        key: "KD_0",
        type: "text",
        maxLength: "40",
        minLength: "0",
        inputMode: "text",
        id: "informationTwo",
        name: "informationTwo",
        description: "Kişi Sayısı",
        src : "/svg/people.svg",
        alt : "kisi sayisi",
        formik: destekFormik.values.informationTwo,
        error: destekFormik.errors.informationTwo,
      },
    },
  ]

  return (
    <div className={'flex flex-col px-3 py-0.5'}>
     <div className={'flex flex-row gap-10 items-center'}>
       <div className={'flex flex-col gap-4'}>
         <p className={`text-start text-[0.7rem] ${destekFormik.errors.informationTwo ? "text-red-500" : "text-gray-400"} text-start`}>
           {data[0].description}
         </p>
         <CostumInput formik={destekFormik} item={data[0].input}/>
       </div>

       <div className={'flex flex-col gap-4'}>
         <p className={`text-start text-[0.7rem] ${destekFormik.errors.informationOne ? "text-red-500" : "text-gray-400"} text-start`}>
           {data[1].description}
         </p>
         <CostumInput formik={destekFormik} item={data[1].input}/>
       </div>
     </div>
    </div>
  )
}

export default KonaklamaDetay