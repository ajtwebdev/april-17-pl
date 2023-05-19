import React from "react"
import styled from "styled-components"
import { ButtonInline, ButtonPrimary } from "../buttons"
import { Container, Flex, Section } from "../layoutComponents"
import { StaticImage } from "gatsby-plugin-image"

const Text = styled.div``

const Img = styled.img`
  box-shadow: 20px 20px 0px 1px var(--clr-accent);
  max-height: 450px;
`

export default function ProductsImg(props) {
  return (
    <Section>
      <Container>
        <Flex>
          <Text className="spacing">
            <div>
              <p className="subheader">{props.subheader}</p>
              <h2 className="title">{props.title}</h2>
            </div>
            <p>
              As experts in the field of landscaping and{" "}
              <ButtonInline to="/residential-services/outdoor-living">
                outdoor
              </ButtonInline>{" "}
              renovations, we take pride in using only the highest quality
              landscaping materials to ensure that your property is not only
              visually appealing but also adds value to your home. From{" "}
              <ButtonInline to="/residential-services/irrigation-landscape-lighting">
                irrigation systems
              </ButtonInline>{" "}
              to seasonal clean-ups, construction projects, and other
              landscaping services, our team at Project Landscape in Calgary is
              dedicated to meeting your{" "}
              <ButtonInline to="/residential-services">
                residential landscaping
              </ButtonInline>{" "}
              needs with <ButtonInline to="/testimonials">trust</ButtonInline>{" "}
              and <ButtonInline to="/blog">expertise</ButtonInline>.
            </p>
            <ButtonPrimary to={props.to}>{props.button}</ButtonPrimary>
          </Text>
          <StaticImage
            src="../../images/calgary-landscaping-selection-guide-1.jpg"
            alt="calgary landscaping selection guide"
          />
        </Flex>
      </Container>
    </Section>
  )
}
