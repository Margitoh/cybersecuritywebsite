import React from "react";
import { Container, MainHeading, Section, TextWrapper } from "../globalStyles";

const SignupPage = () => {
  return (
    <Section inverse>
      <Container>
        <MainHeading inverse>Contact Us</MainHeading>
        <TextWrapper color="#333" Size="1.1rem">
          Reach out to our team and start securing your infrastructure today.
        </TextWrapper>
      </Container>
    </Section>
  );
};

export default SignupPage;
