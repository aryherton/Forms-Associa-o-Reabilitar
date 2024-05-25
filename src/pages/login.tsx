import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import PasswordContext from '@/contexts/PasswordContext';
import WrapperInput from './components/wrapperInput/WrapperInput';
import Input from './components/input/input';

interface PropsLogin {
  username?: string;
  password?: string;
  singlePassword?: string;
}

export default function Login(): JSX.Element {
  const { register, handleSubmit } = useForm<PropsLogin>();
  const { valuePassword } = useContext(PasswordContext);

  const submitForm = (data: PropsLogin) => {
    if (data.singlePassword === valuePassword) {
      localStorage.setItem('isLoggedPassword', valuePassword);
      window.location.href = '/Home';
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'black',
        color: 'white',
        backgroundImage: 'url(/Veículo.png)',
        backgroundRepeat: 'no-repeat', // Evita a repetição da imagem
        backgroundSize: 'cover', // Ajusta o tamanho da imagem para cobrir o contêiner
        backgroundPosition: 'center', // Posiciona a imagem no centro
      }}
    >
      <WrapperInput
        title="Login"
        handleSubmit={handleSubmit(submitForm)}
      >
        <Input
          label="Senha"
          type="password"
          name="singlePassword"
          placeholder="Digite sua senha"
          register={register('singlePassword')}
          style={{
            width: '100%',
            height: '30px',
            padding: '5px',
            borderRadius: '5px',
            border: '1px solid green',
          }}
        />
      </WrapperInput>
    </div>
  );
}
