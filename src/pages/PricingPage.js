import React from "react";
import { Container, MainHeading, Section, TextWrapper } from "../globalStyles";

const PricingPage = () => {
  return (
    <Section inverse>
      <Container>
        <MainHeading inverse>Pricing Plans</MainHeading>
        <TextWrapper color="#333" Size="1.1rem">
          Choose the plan that fits your needs and protect your data with our
          reliable services.
        </TextWrapper>
      </Container>
    </Section>
  );
};

export default PricingPage;
