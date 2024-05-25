import React from "react";
import Image from "next/image";

export default function Footer() {
  const footerWrapperStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "750px",
    height: "120px",
  };

  const imgFooterStyle: React.CSSProperties = {
    display: "flex",
    alignSelf: "flex-end",
  };

  const secondImgFooterStyle: React.CSSProperties = {
    alignSelf: "flex-start",
  };

  const thirdImgFooterStyle: React.CSSProperties = {
    alignSelf: "flex-end",
  };

  const mediaQueriesStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "95px",
  };

  const autoTruckStyle: React.CSSProperties = {
    width: "40px",
    height: "20px",
  };

  const appmStyle: React.CSSProperties = {
    width: "80px",
    height: "30px",
  };

  const reabilitarStyle: React.CSSProperties = {
    width: "120px",
    height: "90px",
  };

  const govPiauiStyle: React.CSSProperties = {
    width: "130px",
    height: "30px",
  };

  return (
    <footer style={footerWrapperStyle}>
      <div style={imgFooterStyle}>
        <Image src="/AutoTruck.png" alt="Logo" width={90} height={45} style={autoTruckStyle} />
        <Image src="/appm-logo.png" alt="Logo" width={135} height={45} style={appmStyle} />
      </div>
      <div style={secondImgFooterStyle}>
        <Image src="/log-reabilitar.png" alt="Logo" width={130} height={90} style={reabilitarStyle} />
      </div>
      <div style={thirdImgFooterStyle}>
        <Image src="/newLogo-removebg.png" alt="Logo" width={250} height={75} style={govPiauiStyle} />
      </div>
    </footer>
  );
}
