import { useRouter } from "next/router";
import TalepForm from "../../components/UI/Talep/TalepForm";
import DestekForm from "../../components/UI/Destek/DestekForm";
import { useEffect } from "react";

const FormType = () => {
  const router = useRouter();
  const formType = router.query.formType;

  if (formType === "bt") {
    return <TalepForm formName={'Barınma İhtiyaç'} formFullListURL={'/talep'} type={'bt'}/>;
  }
  else if (formType === "ct") {
    return <TalepForm formName={'Çadır İhtiyaç'} formFullListURL={'/talep'} type={'ct'}/>;
  }
  else if (formType === "gt") {
    return <TalepForm formName={'Gıda İhtiyaç'} formFullListURL={'/talep'} type={'gt'}/>;
  }
  else if (formType === "it") {
    return <TalepForm formName={'İlaç İhtiyaç'} formFullListURL={'/talep'} type={'it'}/>;
  }
  else if (formType === "ht") {
    return <TalepForm formName={'Hijyen İhtiyaç'} formFullListURL={'/talep'} type={'ht'}/>;
  }
  else if (formType === "kd") {
    return <DestekForm formName={'Konaklama Destek'} formFullListURL={'/destek'} type={'kd'}/>;
  }
  else if (formType === "akd") {
    return <DestekForm formName={'Arama Destek'} formFullListURL={'/destek'} type={'akd'}/>;
  }
  else if (formType === "obd") {
    return <DestekForm formName={'Operasyon Destek'} formFullListURL={'/destek'} type={'obd'}/>;
  }
  else if (formType === "ntd") {
    return <DestekForm formName={'Taşıma Destek'} formFullListURL={'/destek'} type={'ntd'}/>;
  }
  else if (formType === "cd") {
    return <DestekForm formName={'Cevirmenlik Destek'} formFullListURL={'/destek'} type={'cd'}/>;
  }
  else
  {
    return (<p>Page Not Found..</p>)
  }

};

export default FormType;
