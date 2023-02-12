import { useRouter } from "next/router";
import TalepForm from "../../components/sections/Forms/TalepForm";
import Loading from "../../components/sections/Forms/Loading";

const FormType = () => {
  const router = useRouter();
  const formType = router.query.formType;

  if (!formType) {
    return <Loading />;
  }

  if (formType === "bt") {
    return <TalepForm formName={'Çadır Yardım'} formFullListURL={'/'}/>;
  }
  else if (formType === "gt") {
    return <TalepForm formName={'Gıda Yardım'} formFullListURL={'/'}/>;
  }
  else if (formType === "it") {
    return <TalepForm formName={'Sağlık Yardım'} formFullListURL={'/'}/>;
  }
  else if (formType === "ht") {
    return <TalepForm formName={'Hijyen Yardım'} formFullListURL={'/'}/>;
  }
  router.push("/form");
  return null;
};

export default FormType;
