import React from "react";

const DestekState = ({ state }) => {
  if (state === 0) {
    return <p className={"animate-pulse text-emerald-300"}>Destek Uygun!</p>;
  } else if (state === 1) {
    return (
      <p className={"animate-pulse text-orange-400"}>Destek İnceleniyor!</p>
    );
  } else if (state === 2) {
    return <p className={"text-red-400"}>Destek Yapıldı!</p>;
  } else {
    return <p className={"text-gray-700"}>Durum Bilinmiyor</p>;
  }
};

export default DestekState;
