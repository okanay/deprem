import Link from "next/link";
import React from "react";

const Kvk = () => {


  return (
    <div className={"text-[0.7rem] text-gray-400 pb-5"}>
      <p>
        6698 sayılı KVKK kapsamında “Uygulamamıza depremzede ya da
        depremzede yakını olarak kaydolan kullanıcılardan ad, soyadı,
        iletişim bilgisi, log kaydı ve depremzedenin sisteme girilen ve
        kendileri tarafından alenileştirilmiş konum verilerini
        topluyoruz.” Veri işleme hukuki sebeplerimizi, amaçlarımızı görmek
        ve haklarınızı öğrenmek için{" "}
        <Link href={"/kvk"} className={"text-gray-800 font-semilbold"}>
          Aydınlatma Metnini
        </Link>{" "}
        ziyaret etmek ister misiniz?{" "}
      </p>
    </div>
  )
}

export default Kvk