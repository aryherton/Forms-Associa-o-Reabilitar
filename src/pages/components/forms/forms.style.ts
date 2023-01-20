import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 600px;
  height: 350px;

  .buttonLinkFrom {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 250px;
    height: 70px;

    button {
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 5px;
      background: linear-gradient(to bottom, #FAFAFA, #D9D9D9, #B6B6B6);
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      
      &:hover {
        background-color: #6f7273;
      }
      
      &:active {
        transform: scale(0.95);
      }
    }
    
    a {
      color: black;
      text-decoration: none;
    }
  }
`;

export default FormWrapper;