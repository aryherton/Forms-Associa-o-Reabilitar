import React from "react";
import Image from "next/image";
import Link from "next/link";
import { nanoid } from "nanoid";

import ArrLinkForm from "../../../utils/linkForm";

export default function FormsLinksReabilitar() {
  const buttonLinkFromStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    width: "250px",
    height: "70px",
    marginTop: "10px",
  };

  const buttonStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    border: "none",
    borderRadius: "5px",
    background: "linear-gradient(to bottom, #FAFAFA, #D9D9D9, #B6B6B6)",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
  };

  const linkFromStyle: React.CSSProperties = {
    color: "black",
    textDecoration: "none",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const iconFormStyle: React.CSSProperties = {
    width: "20%",
    height: "100%",
  };

  const descricaoButtonStyle: React.CSSProperties = {
    width: "60%",
    height: "100%",
  };

  const divFakeStyle: React.CSSProperties = {
    width: "20%",
    height: "100%",
  };

  return (
    <div>
      {ArrLinkForm.map((item) => (
        <div className="buttonLinkFrom" style={buttonLinkFromStyle} key={nanoid(10)}>
          <button style={buttonStyle}>
            <Link href={item.linkForm} className="linkFrom" style={linkFromStyle}>
              <div className="iconForm" style={iconFormStyle}>
                <Image src={item.icon} alt="iconButtonForm" width={35} height={35} />
              </div>
              <div className="descricaoButton" style={descricaoButtonStyle}>
                {item.descricao}
              </div>
              <div className="divFake" style={divFakeStyle}></div>
            </Link>
          </button>
        </div>
      ))}
    </div>
  );
}
