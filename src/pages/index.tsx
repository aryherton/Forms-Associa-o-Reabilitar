import React from "react";
import Image from "next/image";

import Header from "./components/head/Header";
import FormsLinksReabilitar from "./components/forms/formsLinksReabilitar";
import HomeWrapper from "./home.style";


// import { useQuery } from "@apollo/client";

export default function NewHome() {
  return (
    <HomeWrapper>
      <Header />
      <hr />
      <FormsLinksReabilitar />
    </HomeWrapper>
  );
}