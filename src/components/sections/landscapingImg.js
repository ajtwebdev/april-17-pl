import React from "react"
import styled from "styled-components"
import { ButtonSecondaryLight } from "../buttons"
import { Container, Flex, FlexMobileOpp, Section } from "../layoutComponents"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

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
            <StaticImage
              className="img"
              src="../../images/banner-image-2.jpg"
              alt="landscaping services in calgary AB"
            />
            <Text className="spacing">
              <div>
                <p className="subheader">{props.subheader}</p>
                <h2 className="title">{props.title}</h2>
              </div>
              <p>
                Since 2016, Project landscape has helped hundreds of homeowners
                create beautiful and functional outdoor living spaces that are
                filled with relaxation and enjoyment. Whether it's a complete
                landscape design and construction transformation or helping
                homeowners create a jaw-dropping curb appeal to be the envy of
                your neighbours, experienced and certified landscaping
                professionals are here to help. We understand how frustrating it
                can be to deal with unreliable landscapers and ones that promise
                more than they can offer. Improving your landscape shouldn't be
                an impossible task, filled with exhausting research of
                unreliable landscape companies. If you're going to invest your
                time and money into hiring a landscape company for your Calgary
                home, you deserve the attention,expertise, great customer
                service and detailed focus that you invested into.
              </p>
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
