import React from "react";
import '../../../app/globals.css';
import Image from "next/image";

import FooterWrapper from './Footer.style';

export default function Footer() {
  return (
    <FooterWrapper>
      <Image src="/logoParceiros.png" alt="Logo" width={150} height={50} />
      <Image src="/logoPrefeitura.png" alt="Logo" width={150} height={50} />
    </FooterWrapper>
  );
}