import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 750px;
  height: 120px;

  #firstImgFooter {
    display: flex;
    align-self: flex-end;
  }

  #secondImgFooter{
    align-self: flex-start;
  }

  #thirdImgFooter{
    align-self: flex-end;
  }

  @media (min-width: 330px) and (max-width: 630px){
    display: flex;
    justify-content: space-between;;
    align-items: center;
    width: 100%;
    height: 95px;

    #firstImgFooter {
    display: flex;
    align-self: flex-end;

    #autoTruck {
      width: 40px;
      height: 20px;
    }

    #appm {
      width: 80px;
      height: 30px;
    }
    }

    #secondImgFooter{
    align-self: flex-start;

    #reabilitar {
      width: 120px;
      height: 90px;
    }
  }

  #thirdImgFooter{
    align-self: flex-end;

    #govPiaui {
      width: 130px;
      height: 30px;
    }
  }
  }

  @media (min-width: 631px) and (max-width: 790px){
    display: flex;
    justify-content: space-between;;
    align-items: center;
    width: 100%;
    height: 130px;

    #firstImgFooter {
      display: flex;
      align-self: flex-end;
  
      #autoTruck {
        width: 40px;
        height: 20px;
    }

      #appm {
        width: 80px;
        height: 30px;
      }
    }

    #secondImgFooter{
      align-self: flex-start;
  
      #reabilitar {
        width: 120px;
        height: 90px;
      }
  }

  #thirdImgFooter{
    align-self: flex-end;

    #govPiaui {
      width: 130px;
      height: 30px;
    }
  }
  }

  /* @media (min-width: 630px){
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 550px;
  } */
`;

export default FooterWrapper;