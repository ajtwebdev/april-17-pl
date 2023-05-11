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
              width={420}
              height={345}
              src="https://www.youtube.com/embed/msrESLwoj8Y&ab_channel=ProjectLandscapeLtd."
            />
            <iframe
              width={420}
              height={345}
              src="https://www.youtube.com/embed/efRlX9MxKoU&t=3s&ab_channel=ProjectLandscapeLtd."
            />
          </Flex>
        </Container>
      </Section>
    </Wrapper>
  )
}
