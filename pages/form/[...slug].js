import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useGetDummyData from "../../components/costumHooks/useGetDummyData";
import Link from "next/link";
import RedAlert from "../../components/UI/Re-Useables/RedAlert";
import Alert from "../../components/UI/Elements/Alert";
import Image from "next/image";

const FormItem = () => {
  const router = useRouter();
  const [type = "", id = ""] = router.query.slug || [];
  const [data, isLoading, error] = useGetDummyData(type, id);

  if (error.status)
  {
    return <p>Hata meydana geldi : {error.message}</p>;
  }
  else if (isLoading)
  {
    return <p>Loading...</p>;
  }

  return (
    <div className={'bg-gray-50 max-w-screen-phoneXS phoneLG:max-w-screen-phoneLG phone:max-w-screen-phone w-full py-8 px-4 mx-auto'}>

      {/* Uyari / Isim, Form Adi */}
      <div>

        {/* Uyari */}
        <Alert title={"Lütfen Dikkat!"}>
          Lütfen iletişime geçmeden önce formu dikkatlice okuyun. Direkt aramaktan çekinin, mesaj atarak iletişime başlayabilirsiniz.
        </Alert>

        {/* Isim, Form Adi */}
        <div className={"flex flex-row justify-between items-center mt-6"}>
          <div className={"flex flex-row justify-start items-center gap-1"}>
            <Image
              priority={true}
              loading={'eager'}

              src={"/svg/profile.svg"}
              width={"200"}
              height={"200"}
              alt={'profile'}
              className={"w-5 h-5"}
            />
            <h1 className={"text-[1.1rem] font-light text-neutral-600 text-neutral-700"}>{data.name}</h1>
          </div>

          <p
            className={"py-1 px-2 border-b border-neutral-800 text-neutral-600 text-base"}>
            {data.typeName}
          </p>
        </div>

      </div>




  </div>
  );
};

export default FormItem;
