import { useRouter } from "next/router";
import TalepForm from "../../components/sections/Forms/TalepForm";
import Loading from "../../components/sections/Forms/Loading";

const FormType = () => {
  const router = useRouter();
  const formType = router.query.formType;

  if (!formType) {
    return <Loading />;
  }

  if (formType === "enkazTalep") {
    return <TalepForm formName={'Enkaz Yardım'} formFullListURL={'/'}/>;
  }
  else if (formType === "gidaTalep") {
    return <TalepForm formName={'Gıda Yardım'} formFullListURL={'/'}/>;
  }
  else if (formType === "barinmaTalep") {
    return <TalepForm formName={'Barınma Yardım'} formFullListURL={'/'}/>;
  }
  router.push("/form");
  return null;
};

export default FormType;
