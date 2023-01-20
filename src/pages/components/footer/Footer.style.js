import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 750px;
  height: 150px;

  @media (min-width: 330px){
    display: flex;
    justify-content: space-between;;
    align-items: center;
    width: 300px;
  }

  @media (min-width: 630px){
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 550px;
  }
`;

export default FooterWrapper;