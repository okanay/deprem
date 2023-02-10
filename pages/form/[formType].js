import { useRouter } from "next/router";
import EnkazTalep from "../../components/sections/Forms/EnkazTalep";
import Loading from "../../components/sections/Forms/Loading";

const FormType = () => {
  const router = useRouter();
  const formType = router.query.formType;

  if (!formType) {
    return <Loading />;
  }

  if (formType === "enkazTalep") {
    return <EnkazTalep formName={'Enkaz Yardım'} formFullListURL={'/'}/>;
  }
  else if (formType === "gidaTalep") {
    return <EnkazTalep formName={'Gıda Yardım'} formFullListURL={'/'}/>;
  }
  else if (formType === "barinmaTalep") {
    return <EnkazTalep formName={'Barınma Yardım'} formFullListURL={'/'}/>;
  }
  router.push("/form");
  return null;
};

export default FormType;
