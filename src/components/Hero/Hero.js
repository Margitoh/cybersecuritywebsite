import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src="./assets/hero2.mp4" autoPlay loop muted />
      <Container>
        <MainHeading>Your data isn't secure with us</MainHeading>
        <HeroText>
          We DO NOT provide the best security systems for clients all over the
          world
        </HeroText>
        <ButtonWrapper>
          <Link to="signup">
            <Button>Don't get Started</Button>
          </Link>
          <HeroButton>Please don't</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
