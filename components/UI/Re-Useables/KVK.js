import Link from "next/link";
import React, { useState } from "react";

const Kvk = () => {
  const [display, setDisplay] = useState(false);
  const handleOnClick = () => {
    setDisplay(!display);
  };

  return (
    <div className={""}>
      {display === true && (
        <div
          className={
            "text-start absolute h-[41rem] max-w-screen-phoneXS phoneLG:max-w-screen-phoneLG phone:max-w-screen-phone w-full mx-auto left-0 bottom-44 z-20 bg-white border-t border-b border-gray-900/30"
          }
        >
          <div
            className={
              "flex flex-col gap-4 items-center justify-start p-4 w-full"
            }
          >
            {/* Baslik ve Kapat Butonu*/}
            <div
              className={"flex flex-row justify-between w-full items-center"}
            >
              <h1
                className={
                  "text-[1.2rem] font-semibold text-neutral-700 text-start"
                }
              >
                <span className={"text-slate-600/90"}>Aydınlatma </span>
                <span className={"font-light font-serif"}>Metni</span>
              </h1>

              <button
                onClick={handleOnClick}
                className={
                  "py-2 px-2 rounded-md bg-slate-50 border border-slate-800/20 text-neutral-800/90 shadow shadow-neutral-400/30 uppercase font-bold text-sm"
                }
              >
                KAPAT
              </button>
            </div>

            {/* Metin */}
            <div
              className={
                "overflow-y-scroll h-[34rem] p-2 scrollbar-hide font-light font-serif text-neutral-600 w-full mx-auto bg-neutral-50 rounded text-[0.9rem]"
              }
            >
              Bu uygulama, 6 Şubat 2023 tarihinde Türkiye’de meydana gelen büyük
              deprem felaketinde, arama kurtarma çalışmaları ile yardım ve
              destek taleplerini ortak bir veri tabanında toplayarak yetkili
              kurum ve kuruluşlara aktarmak amacı ile bilişim teknolojileri
              alanında çalışan gönüllüler tarafından oluşturulmuştur. Yardım ya
              da desteğe ihtiyacı olduğunu belirttiğiniz kişilerin kişisel
              verileri ‘’Fiili imkânsızlık nedeniyle rızasını açıklayamayacak
              durumda bulunan veya rızasına hukuki geçerlilik tanınmayan kişinin
              kendisinin ya da bir başkasının hayatı veya beden bütünlüğünün
              korunması için zorunlu olması’’ hukuki sebebine dayanarak,
              otomatik yollarla işlenecektir. Tarafınıza ait kişisel veriler,
              ‘’Bir hakkın tesisi, kullanılması veya korunması için veri
              işlemenin zorunlu olması’’ hukuki sebebine dayanarak işlenecektir.
              Paylaşacağınız yardım, destek taleplerinde yer alan isim, soy
              isim, telefon ve adres gibi kişisel veriler, veli, vasi, temsilci
              bilgisi, medeni durum ve sağlık bilgileri tarafımızca oluşturulan
              ve sunucuları yurtiçi ve yurtdışında bulunan veri tabanında
              toplanarak, Afad, Akut, Kızılay gibi yetkili arama kurtarma
              kuruluşlarının yanı sıra destek ve yardım taleplerini
              karşılayabilecek sivil toplum kuruluşları ile kişisel veri işleme
              amacı ile sınırlı olarak paylaşılacaktır. Bu platform kar amacı
              gütmeden imece usulu bilgi paylaşımı için geliştirildi, hiçbir
              kurum ve kuruluşla ilişiği yoktur. Gerektiğinde yetkili merci ve
              kurumlara bilgi sağlanabilir ve işbirliği yapılabilir. Deprem
              İmece Platformu © 2023
            </div>
          </div>
        </div>
      )}

      <div className={"text-start text-[0.7rem] text-gray-400"}>
        <p>
          6698 sayılı KVKK kapsamında “Uygulamamıza depremzede ya da depremzede
          yakını olarak kaydolan kullanıcılardan ad, soyadı, iletişim bilgisi,
          log kaydı ve depremzedenin sisteme girilen ve kendileri tarafından
          alenileştirilmiş konum verilerini topluyoruz.” Veri işleme hukuki
          sebeplerimizi, amaçlarımızı görmek ve haklarınızı öğrenmek için{" "}
          <button
            type={"button"}
            onClick={handleOnClick}
            className={"text-gray-800 font-semilbold"}
          >
            Aydınlatma Metnini
          </button>{" "}
          okumak ister misiniz?{" "}
        </p>
      </div>
    </div>
  );
};

export default Kvk;
