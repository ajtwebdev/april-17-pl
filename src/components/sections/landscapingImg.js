import React from "react"
import styled from "styled-components"
import { ButtonSecondaryLight } from "../buttons"
import { Container, Flex, FlexMobileOpp, Section } from "../layoutComponents"
import { GatsbyImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
  background: var(--clr-accent);

  .img {
    box-shadow: 20px 20px 0px 1px var(--clr-accent);
    max-height: 450px;
  }
`

const Text = styled.div`
  color: var(--txt-light);
  p {
    color: var(--txt-light);
  }
`

export default function LandscapingImg(props) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <FlexMobileOpp>
            <GatsbyImage
              className="img"
              src="../../images/banner-image-2.jpg"
              alt="landscaping services in calgary AB"
            />
            <Img src={props.img} alt={props.alt} />
            <Text className="spacing">
              <div>
                <p className="subheader">{props.subheader}</p>
                <h2 className="title">{props.title}</h2>
              </div>
              <p>{props.body}</p>
              <ButtonSecondaryLight to={props.to}>
                {props.button}
              </ButtonSecondaryLight>
            </Text>
          </FlexMobileOpp>
        </Container>
      </Section>
    </Wrapper>
  )
}
