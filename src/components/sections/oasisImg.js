import React from "react"
import styled from "styled-components"
import { ButtonInline, ButtonPrimary } from "../buttons"
import { Container, Flex, Section } from "../layoutComponents"
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
  .img {
    box-shadow: 20px 20px 0px 1px var(--clr-accent);
    max-height: 450px;
  }
`

const Text = styled.div``

export default function OasisImg(props) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <Flex>
            <Text className="spacing">
              <div>
                <p className="subheader">{props.subheader}</p>
                <h2 className="title">{props.title}</h2>
              </div>
              <p>
                Imagine stepping out into a perfect{" "}
                <ButtonInline to="/residential-services/outdoor-living">
                  backyard oasis
                </ButtonInline>
                . A perfect place for relaxing,{" "}
                <ButtonInline to="/residential-services/landscape-construction/outdoor-kitchens">
                  entertaining
                </ButtonInline>{" "}
                and everything in between. Get the ease of a single landscape
                provider, who understands and can help with all your outdoor
                needs. Use a proven{" "}
                <ButtonInline to="/about">
                  Calgary landscape company
                </ButtonInline>{" "}
                that has mastered how to bring your outdoor dreams to life. From
                creative{" "}
                <ButtonInline to="/residential-services/softscaping">
                  softscapes
                </ButtonInline>{" "}
                to the most lucrative{" "}
                <ButtonInline to="/residential-services/hardscaping">
                  hardscapes
                </ButtonInline>
                , through an integrated approach, your landscape project can
                benefit from our seamless landscaping process. A company of
                professional landscape designers will take your project from
                concept to completion, by carefully listening to your ideas,
                goals and how you dream of using your outdoor space.
              </p>
              <ButtonPrimary to={props.to}>{props.button}</ButtonPrimary>
            </Text>
            <StaticImage
              className="img"
              src="../../images/calgary-landscaping-oasis.png"
              alt="best landscaper calgary, AB"
            />
          </Flex>
        </Container>
      </Section>
    </Wrapper>
  )
}
