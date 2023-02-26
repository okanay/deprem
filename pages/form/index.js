import { useRouter } from "next/router";
import { useEffect } from "react";

const FormIndex = () => {

  const router = useRouter()

  console.log(router.query);

  return (<div>

  <p>
    {router.query.id}
  </p>
   <p>
     {router.query.type}
   </p>

  </div>)
}

export default FormIndex