
import styled from 'styled-components';


const FooterContainer = styled.footer`
  width: 100%;
  padding: 20px;
  background: slategrey;
  text-align: center;
  bottom: 0;
`;

const FooterText = styled.p`
  color: whitesmoke;
  font-size: 1em;
  margin: 5px 0;
`;

const SocialLinks = styled.div`
  margin-top: 10px;
`;

const SocialLink = styled.a`
  margin: 0 10px;
  font-weight: bold;
  color: whitesmoke;
  &:hover {
    color: orange;
  }
`;

// Footer Component
const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © {new Date().getFullYear()} TranslatorHub   @author - Jaskirat Singh 
      </FooterText>
      <FooterText>Connect with me:</FooterText>
      <SocialLinks>
        <SocialLink href="https://github.com/kirat0000" target="_blank" rel="noopener noreferrer">
          GitHub
        </SocialLink>
        |
        <SocialLink href="https://www.linkedin.com/in/jaskirat-singh-70a446260/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </SocialLink>
        |
        <SocialLink href="https://www.facebook.com/jaskirat.saini.96" target="_blank" rel="noopener noreferrer">
          Facebook
        </SocialLink>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;
