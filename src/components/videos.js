import React from "react"
import { Container, Flex, Section } from "./layoutComponents"
import styled from "styled-components"

const Wrapper = styled.div`
  background: var(--clr-accent);
`

export default function Videos() {
  return (
    <Wrapper>
      <Section>
        <Container>
          <Flex>
            <iframe
              width="420"
              height="345"
              src="https://www.youtube.com/watch?v=efRlX9MxKoU&ab_channel=ProjectLandscapeLtd."
            ></iframe>
            <iframe
              width="420"
              height="345"
              src="https://www.youtube.com/watch?v=msrESLwoj8Y&ab_channel=ProjectLandscapeLtd."
            ></iframe>
          </Flex>
        </Container>
      </Section>
    </Wrapper>
  )
}
