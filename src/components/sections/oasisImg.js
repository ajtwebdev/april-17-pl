import React from "react"
import styled from "styled-components"
import { ButtonPrimary } from "../buttons"
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
            <p>{props.body}</p>
            <ButtonPrimary to={props.to}>{props.button}</ButtonPrimary>
          </Text>
          <StaticImage className="img" src="../../images/calgary-landscaping-oasis.png" alt="best landscaper calgary, AB" />
        </Flex>
      </Container>
    </Section>
    </Wrapper>
  )
}
