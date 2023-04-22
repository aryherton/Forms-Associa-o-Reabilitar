import React from "react";
import Image from "next/image";
import Link from "next/link";
import { nanoid } from "nanoid";

import ArrLinkForm from "../../../utils/linkForm";
import FormWrapper from "../../../styles/forms.style.js";

export default function FormsLinksReabilitar() {
  return (
    <FormWrapper>
      {ArrLinkForm.map((item) => (
        <div className="buttonLinkFrom" key={nanoid(10)}>
          <button>
            <Link href={item.linkForm} className="linkFrom">
              <div className="iconForm">
                <Image src={item.icon} alt="iconButtonForm" width={ 35 } height={ 35 } />
              </div>
              <div className="descricaoButton">
                {item.descricao}
              </div>
              <div className="divFake"></div>
            </Link>
          </button>
        </div>
      ))}
    </FormWrapper>
  );
}