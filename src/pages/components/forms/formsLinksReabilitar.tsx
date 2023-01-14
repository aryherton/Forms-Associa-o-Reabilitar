import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FormWrapper } from "./forms.style";

export default function FormsLinksReabilitar() {
  return (
    <FormWrapper>
      <div className="qrCodeSolicitacao">
        <label htmlFor="qrSolicitacao">
          <Image id="qrSolicitacao" src="/solicitacaoQRCode.png" alt="qrCode01" width={200} height={200} />
          <div id="LinkQr">
            <Link href='https://forms.zohopublic.com/heltonpqd/form/SOLICITAODESERVIOSDOMOTORISTA/formperma/5SzofEOspdIt68AEz93OwQjqq6ZyQh9k3K0XAXoZy3M'>SOLICITAÇÃO DE SERVIÇOS - STE</Link>
          </div>
        </label>
      </div>

      <div className="rotinaInformacoesQRCode">
        <Image src="/rotinaInformacoesQRCode.png" alt="qrCode02" width={200} height={200} />
        <div>
          <Link href='https://forms.zohopublic.com/heltonpqd/form/FECHAMENTODEVIAGEM/formperma/p6Y2B5h7cJ4Vnc4PzspGpmIyVJzoVA95xyavmpcGsmE'>
            <div>ROTINA DE INFORMAÇÕES</div>
            <div> OBRIGATÓRIAS - MOTORISTAS</div>
          </Link>
        </div>
      </div>

      <div className="rotinaInformacoesQRCode">
        <Image src="/diarioBordoQRCode.png" alt="qrCode03" width={200} height={200} />
        <div>
          <Link href='https://forms.zohopublic.com/heltonpqd/form/DIRIODEBORDO/formperma/kLg3PkZCWWNebjNwQqi4OoduMVapNnZa6zXv69_coko'>
            DIÁRIO DE BORDO
          </Link>
        </div>
      </div>

      <div className="rotinaInformacoesQRCode">
        <Image src="/mapaComplementarQRCode.png" alt="qrCode04" width={200} height={200} />
        <div>
          <Link href='https://forms.zohopublic.com/heltonpqd/form/MAPACOMPLEMENTARSTE/formperma/Re4WwZAW12A5gNOcIzPc0u4p6UhgitWor4O0CdP4PVo'>
            MAPA COMPLEMENTAR - STE
          </Link>
        </div>
      </div>
    </FormWrapper>
  );
}