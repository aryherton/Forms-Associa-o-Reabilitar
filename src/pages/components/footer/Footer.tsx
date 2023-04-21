import React from "react";
import Image from "next/image";

import FooterWrapper from './Footer.style.js';

export default function Footer() {
  return (
    <FooterWrapper>
      <div id="firstImgFooter">
        <Image id="autoTruck" src="/AutoTruck.png" alt="Logo" width={90} height={45} />
        <Image id="appm" src="/appm-logo.png" alt="Logo" width={135} height={45} />
      </div>
      <div id="secondImgFooter">
        <Image id="reabilitar" src="/log-reabilitar.png" alt="Logo" width={130} height={90} />
      </div>
      <div id="thirdImgFooter">
        <Image id="govPiaui" src="/govPiaui.png" alt="Logo" width={180} height={45} />
      </div>
    </FooterWrapper>
  );
}