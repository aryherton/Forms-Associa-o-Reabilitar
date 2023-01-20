import React from "react";

import Header from "./components/head/Header";
import FormsLinksReabilitar from "./components/forms/formsLinksReabilitar";
import Footer from "./components/footer/Footer";

import HomeWrapper from "./home.style";
// import { useQuery } from "@apollo/client";

export default function NewHome() {
  return (
    <HomeWrapper>
      <Header />
      <FormsLinksReabilitar />
      <Footer />
    </HomeWrapper>
  );
}