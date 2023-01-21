import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 750px;
  height: 100px;
  font-weight: bold;

  h2, h1 {
    margin-bottom: -15px;
    color: #878A8E;
    text-align: center;
  }

  /* @media (min-height: 360px) and (max-width: 560px) {
    width: 70%;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 30px;

    h2, h1 {
      color: #878A8E;
      font-size: 1.8rem;
      font-weight: bolder;
      margin: 0%;
    }

    #divImgLogo {
      img {
        width: 105px;
        height: 70px;
      }
      position: absolute;
      margin-left: 82%;
      margin-top: 6%;
    }
  } */

  @media (min-height: 561px) and (max-width: 860px) {
    width: 70%;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h2, h1 {
      color: #878A8E;
      font-size: 1.0rem;
      font-weight: bolder;
      margin: 0%;
    }

    #divImgLogo {
      img {
        width: 95px;
        height: 60px;
      }
      position: absolute;
      margin-left: 62%;
      margin-top: 17%;
    }
  }

  @media (min-width: 861px) and (max-width: 959px){
    width: 70%;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h2, h1 {
      color: #878A8E;
      font-size: 1.0rem;
      font-weight: bolder;
      margin: 0%;
    }

    #divImgLogo {
      img {
        width: 105px;
        height: 70px;
      }
      position: absolute;
      margin-left: 42%;
      margin-top: 4%;
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
      font-size: 1.2rem;
      font-weight: bolder;
      margin: 0%;
    }

    #divImgLogo {
      img {
        width: 110px;
        height: 75px;
      }
      position: absolute;
      margin-left: 45%;
      margin-top: 4%;
    }
  }

  @media (min-width: 1024px) and (max-width: 1103px){
    width: 70%;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h2, h1 {
      color: #878A8E;
      font-size: 1.2rem;
      font-weight: bolder;
      margin: 0%;
    }

    #divImgLogo {
      img {
        width: 110px;
        height: 75px;
      }
      position: absolute;
      margin-left: 40%;
      margin-top: 3%;
    }
  }

  @media (min-width: 1104px) and (max-width: 1200px){
    width: 70%;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h2, h1 {
      color: #878A8E;
      font-size: 1.3rem;
      font-weight: bolder;
      margin: 0%;
    }

    #divImgLogo {
      img {
        width: 110px;
        height: 75px;
      }
      position: absolute;
      margin-left: 40%;
      margin-top: 3%;
    }
  }

  @media (min-width: 1201px){
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

    #divImgLogo {
      img {
        width: 110px;
        height: 75px;
      }
      position: absolute;
      margin-left: 40%;
      margin-top: 3%;
    }
  }
`;

export default HeaderWrapper;