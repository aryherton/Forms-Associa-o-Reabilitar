import React, { useEffect, useContext } from "react";

import PasswordContext from "@/contexts/PasswordContext";
import Header from "./components/head/Header";
import FormsLinksReabilitar from "./components/forms/FormsLinksReabilitar";
import Footer from "./components/footer/Footer";

export default function NewHome(): JSX.Element {
  const { valuePassword } = useContext(PasswordContext);

  useEffect(() => {
    const isLogged = localStorage.getItem("isLoggedPassword");

    if (!isLogged || isLogged !== valuePassword) {
      window.location.href = "/login";
    }
  }, []);

  const homeWrapperStyle: React.CSSProperties = {
    margin: '0%',
    padding: '0%',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: 'url("/Veículo.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };

  return (
    <div style={homeWrapperStyle}>
      <Header />
      <FormsLinksReabilitar />
      <Footer />
    </div>
  );
}
