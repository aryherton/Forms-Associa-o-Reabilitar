import React from "react";
import '../../../app/globals.css';
import Image from "next/image";

import { HeaderWrapper } from './Header.style';

export default function Header() {
  return (
    <HeaderWrapper>
      <Image src="/log-reabilitar.png" alt="Logo" width={200} height={150} />
      <span>Fromulários (Associação Reabilitar)</span>
    </HeaderWrapper>
  );
}