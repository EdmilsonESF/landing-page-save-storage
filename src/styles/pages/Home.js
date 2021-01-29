import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  font-family: 'Lora';
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  background: #F6FAFD;
  width: 80%;
  max-width: 1140px;
  height: 60px;
  z-index: 2;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 14px;
    font-weight: bold;

    svg {
      color: #9C69E2;
    }
  }

  div {
    display: none;

    a {
      color: #000;
    }    
  }

  @media (max-width: 880px) {

    button {
      display: none;
    }

    div {
      display: flex;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  width: 322px;
  align-items: center;
  justify-content: space-between;
  margin-left: 100px;
  margin-right: auto;

  a {
    color: #000;
  }

  @media (max-width: 880px) {
    display: none;
  }
`;

export const Content = styled.main`
  width: 80%;
  max-width: 1140px;
`;

export const ContainerDescription = styled.div`
  display: flex;
  margin-top: 100px;
  width: 100%;

  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-repeat: no-repeat;
  background-position: right bottom;

  @media (max-width: 980px) {
    background-size: 350px;
    background-position: right;

  }

  @media (max-width: 670px) {
    background-image: none;
  }

`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  width: 600px;
  height: 450px;

  h1 {
    font-size: 60px;
  }

  p {
    width: 320px;
    line-height: 30px;
    font-size: 18px;
  }
  button {
    font-size: 14px;
    font-weight: bold;
  }

  @media (max-width: 360px) {
    width: 90%;


    h1 {
      font-size: 40px;
    }

    p {
      width: 90%;
      line-height: 20px;
      font-size: 14px;
    }
  }
`;


export const AboutUs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 560px;
  background-color: #FDE8F4;

  border-radius: 50px;

  margin-top: 200px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 480px;
    height: 310px;
    padding: 30px;

    p{
      margin-top: 50px;
      line-height: 30px;
      font-size: 18px;
    }
  }

  @media (max-width: 980px) {
    img {
      width: 250px;
    }
  }

  @media (max-width: 670px) {
    img {
      display: none;
    }
  }
`;

export const FeaturesContairner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  margin-top: 150px;
`;

export const FeaturesHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 90%;
  height: 100px;

  h2 {
    margin-bottom: 40px;
    font-size: 30px;
  }

`;

export const FeaturesDescription = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 340px 340px;
  gap: 30px;

  margin-top: 90px;

  @media (max-width: 840px) {
    grid-template-columns: 350px;
    grid-template-rows: 1fr 1fr ;
  }
`;

export const CardFetures = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background: #E9F3F1;
  padding: 10px;

  img {
    width: 150px;
    margin-right: 10px;
  }

  @media (max-width: 360px) {
    width: 20px;

    img {
      display:none;
    }
  }
  
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    margin-bottom: 30px;
    font-size: 20px;
  }

  p {
    margin-bottom: 40px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 105px;
    color: #000;

    svg {
      color: #9C69E2;
    }
  }

  @media (max-width: 770px) {
    align-items: center;
    padding: 10px;
  }
`;

export const TestimonialsContainer = styled.div`
  width: 100%;
  height: 700px;
  background-color: #9C69E2;
  border-radius: 60px;
  padding: 80px;
  margin-top: 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h2 {
    font-size: 40px;
    color: #F6FAFD;
  }

  @media (max-width: 670px) {
    display: none;
  }
`;

export const CardTestimonials = styled.div`
  display: flex;

  width: 90%;
  max-width: 640px;
  height: 300px;
  padding: 50px  30px;

  background: #ffff;
  border-radius: 30px;

  div {
    width: 60%;
    height: 150px;

    display: flex;
    flex-direction: column;

    strong {
      font-size: 20px;
    }

    span {
      margin-top: 8px;
      color: #9C69E2;
    }

    p {
      margin-top: 15px;
      line-height: 20px;
    }
  }

  img {
    width: 80px;
    height: 80px;
    margin: 20px;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: 250px;
`;

export const TopFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 730px) {
    display: none;
  }
`;

export const ButtonsFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 357px;

  button:first-of-type {
    color: #fff;


  }

  button {
    font-size: 14px;
    font-weight: bold;

    svg {
      color: #9C69E2;
    }

  }

  @media (max-width: 430px) {
    display: none;
  }
  
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  height: 300px;
  gap: 20px;

  margin-top: 80px;

  @media (max-width: 770px) {
    gap: 30px;
  }
`;

export const Endress = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleLogo = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin-left: 10px;
  }
`;

export const EndressDescription = styled.div`
  display: flex;
  height: 100px;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 80px;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    margin-top: 18px;
    margin-bottom: 30px;
  }

  a {
    margin-bottom: 15px;
    color: black;
  }

  @media (max-width: 690px) {
    display: none;
  }
`;

export const Help = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    margin-top: 18px;
    margin-bottom: 30px;
  }

  a {
    margin-bottom: 15px;
    color: black;
  }

  @media (max-width: 690px) {
    display: none;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    margin-top: 18px;
    margin-bottom: 15px;
  }

  @media (max-width: 770px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 480px) {
    display:none;
  }
`;

export const LogoSocialMedia = styled.div`
  display: flex;
  justify-content: space-between;

  width: 200px;
  height: 80px;

  img {
    cursor: pointer;
  }

  @media (max-width: 770px) {
    flex-direction: column;
    align-items: center;
    height: 170px;
  }
`;