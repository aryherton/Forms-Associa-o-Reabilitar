import React from "react";
// import '../../../app/globals.css';
import Image from "next/image";

import HeaderWrapper from './Header.style';

export default function Header() {
  return (
    <HeaderWrapper>
      <h2>
        Sistema Estadual de Transporte Eletivo
      </h2>
      <h1>STE</h1>
      <Image src="/log-reabilitar.png" alt="Logo" width={150} height={100} />
    </HeaderWrapper>
  );
}