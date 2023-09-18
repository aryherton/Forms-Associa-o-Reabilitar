import React from "react";
import Image from "next/image";

import FooterWrapper from './footer.style';

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
        <Image id="govPiaui" src="/newLogo-removebg.png" alt="Logo" width={250} height={75} />
      </div>
    </FooterWrapper>
  );
}