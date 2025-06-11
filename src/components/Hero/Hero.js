import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import {
  HeroImage,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroImage
        src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=1350&q=80"
        alt="cyber security"
      />
      <Container>
        <MainHeading>Your data is safe with us</MainHeading>
        <HeroText>
          We provide the best security systems for clients all over the world
        </HeroText>
        <ButtonWrapper>
          <Link to="/signup">
            <Button>Get Started</Button>
          </Link>
          <HeroButton>Learn More</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
