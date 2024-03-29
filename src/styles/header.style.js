import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;

  h2, h1 {
    margin-bottom: -15px;
    color: #878A8E;
  }

  img {
    /* align-self: stretch; */
    margin-left: 50%;
    margin-top: 1%;
    position: absolute;
  }

  @media (min-height: 360px) and (max-width: 860px) {
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h2, h1 {
      color: #878A8E;
      font-size: 1.1rem;
      font-weight: bolder;
      letter-spacing: -1px;
      margin: 0%;
    }

    img {
      /* align-self: stretch; */
      margin-left: 70%;
      margin-top: 45px;
      width: 80px;
      height: 55px;
      position: absolute;
    }
  }

  @media (min-width: 860px) and (max-width: 959px){
    width: 70%;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h2, h1 {
      color: #878A8E;
      font-size: 1.5rem;
      font-weight: bolder;
      margin: 0%;
    }

    img {
      /* align-self: stretch; */
      margin-left: 75%;
      margin-top: 15px;
      width: 110px;
      height: 75px;
      position: absolute;
    }
  }

  @media (min-width: 960px) and (max-width: 1023px){
    width: 70%;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h2, h1 {
      color: #878A8E;
      font-size: 1.5rem;
      font-weight: bolder;
      margin: 0%;
    }

    img {
      /* align-self: stretch; */
      margin-right: -20%;
      margin-top: 25px;
      width: 110px;
      height: 75px;
      position: absolute;
    }
  }

  @media (min-width: 1023px) and (max-width: 1103px){
    width: 70%;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h2, h1 {
      color: #878A8E;
      font-size: 1.5rem;
      font-weight: bolder;
      margin: 0%;
    }

    img {
      /* align-self: stretch; */
      margin-right: -15%;
      margin-top: 25px;
      width: 110px;
      height: 75px;
      position: absolute;
    }
  }

  @media (min-width: 1103px) and (max-width: 1200px){
    width: 70%;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h2, h1 {
      color: #878A8E;
      font-size: 1.5rem;
      font-weight: bolder;
      margin: 0%;
    }

    img {
      /* align-self: stretch; */
      margin-right: -10%;
      margin-top: 25px;
      width: 110px;
      height: 75px;
      position: absolute;
    }
  }

  @media (min-width: 1200px){
    width: 70%;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h2, h1 {
      color: #878A8E;
      font-size: 1.5rem;
      font-weight: bolder;
      margin: 0%;
    }

    img {
      /* align-self: stretch; */
      margin-right: -5%;
      margin-top: 25px;
      width: 110px;
      height: 75px;
      position: absolute;
    }
  }

  @media (min-width: 1220px){
    width: 70%;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h2, h1 {
      color: #878A8E;
      font-size: 1.5rem;
      font-weight: bolder;
      margin: 0%;
    }

    img {
      /* align-self: stretch; */
      margin-right: -2%;
      margin-top: 25px;
      width: 110px;
      height: 75px;
      position: absolute;
    }
  }
`;

export default HeaderWrapper;