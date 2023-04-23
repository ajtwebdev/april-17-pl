import React from "react"
import { Container, Section } from "../../layoutComponents"
import styled from "styled-components"
import { ButtonSe, ButtonSecondaryLightcondaryLight } from "../../buttons"

const Wrapper = styled.div`
  background: var(--clr-accent);
  color: var(--txt-light);
`

const Text = styled.div`
  max-width: 90ch;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

export default function Cta3({ title, description }) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <Text className="spacing">
            <h2 className="title tan">
              your outdoor oasis is just a click away
            </h2>
            <ButtonSecondaryLight to="/contact">
              what's your project?
            </ButtonSecondaryLight>
          </Text>
        </Container>
      </Section>
    </Wrapper>
  )
}
