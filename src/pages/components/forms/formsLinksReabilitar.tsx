import React from "react";
import Image from "next/image";
import Link from "next/link";
import { nanoid } from "nanoid";

import FormWrapper from "./forms.style";

export default function FormsLinksReabilitar() {
  const arrLinkForm = [
    {
      descricao: 'INFORMAÇÕES DIÁRIAS',
      linkForm: 'https://forms.zohopublic.com/heltonpqd/form/SOLICITAODESERVIOSDOMOTORISTA/formperma/5SzofEOspdIt68AEz93OwQjqq6ZyQh9k3K0XAXoZy3M'
    },
    {
      descricao: 'DIÁRIO DE BORDO',
      linkForm: 'https://forms.zohopublic.com/heltonpqd/form/FECHAMENTODEVIAGEM/formperma/p6Y2B5h7cJ4Vnc4PzspGpmIyVJzoVA95xyavmpcGsmE'
    },
    {
      descricao: 'MAPA COMPLEMENTAR',
      linkForm: 'https://forms.zohopublic.com/heltonpqd/form/DIRIODEBORDO/formperma/kLg3PkZCWWNebjNwQqi4OoduMVapNnZa6zXv69_coko'
    },
    {
      descricao: 'SOLICITAR MANUTENÇÃO',
      linkForm: 'https://forms.zohopublic.com/heltonpqd/form/MAPACOMPLEMENTARSTE/formperma/Re4WwZAW12A5gNOcIzPc0u4p6UhgitWor4O0CdP4PVo'
    }
  ]
  return (
    <FormWrapper>
      {arrLinkForm.map((item) => (
        <div className="buttonLinkFrom" key={nanoid(10)}>
          <button>
            <Link href={item.linkForm} className="linkFrom">
              { item.descricao }
            </Link>
          </button>
        </div>
      ))}
    </FormWrapper>
  );
}