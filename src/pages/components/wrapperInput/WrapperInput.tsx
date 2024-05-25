import React from 'react';

interface PropsWrapperInput {
  title?: string;
  children: React.ReactNode;
  handleSubmit?: () => void;
}

export default function WrapperInput({ title, children, handleSubmit }: PropsWrapperInput): JSX.Element {
  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30%',
        width: '30%',
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 0 10px black',
      }}
      onSubmit={handleSubmit}
    >
      {title &&
        <h1
          style={{
            color: 'black',
            fontSize: '24px',
            marginBottom: '50px',
          }}
        >
          {title}
        </h1>
      }
      {children}
    </form>
  );
}
