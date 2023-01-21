import React from "react";
import Image from "next/image";

import HeaderWrapper from './headerStyle';

export default function Header() {
  return (
    <HeaderWrapper>
      <div>
        <h2>
          Sistema Estadual de Transporte Eletivo
        </h2>
        <h1>STE</h1>
      </div>
      <div id="divImgLogo">
        <Image src="/log-reabilitar.png" alt="Logo" width={150} height={100} />
      </div>
    </HeaderWrapper>
  );
}