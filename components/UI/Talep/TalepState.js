import React from "react";

const TalepState = ({ state }) => {
  if (state === 0) {
    return <p className={"animate-pulse text-red-300"}>Yardım Bekleniyor!</p>;
  } else if (state === 1) {
    return (
      <p className={"animate-pulse text-orange-400"}>Talep İnceleniyor!</p>
    );
  } else if (state === 2) {
    return <p className={"text-emerald-400"}>Talep Çözüldü!</p>;
  } else {
    return <p className={"text-gray-700"}>Durum Bilinmiyor</p>;
  }
};

export default TalepState;
