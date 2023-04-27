import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonPrimary } from "../buttons"
import { Container, Flex, FlexMobileOpp, Section } from "../layoutComponents"

const Wrapper = styled.div`
  background: var(--clr-dark);
`

const Text = styled.div`
  color: var(--txt-light);
`

const ImgStyles = {
  boxShadow: "-20px 20px 0px 1px var(--clr-tan)",
  marginTop: "2em",
  maxHeight: "450px",
}

export default function ShowroomSection(props) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <FlexMobileOpp>
            <StaticImage
              style={ImgStyles}
              src="../../images/calgary-landscaping-showroom.png"
              alt="calgary landscaping showroom"
            />
            <Text className="spacing">
              <div>
                <p className="subheader"></p>
                <h2 className="title">
                  explore our <span className="tan">showroom</span>
                </h2>
              </div>
              <p>
                We understand the importance of seeing our work firsthand and
                that's why we have multiple showroom locations conveniently
                located throughout Calgary. Our Calgary landscaping showrooms
                provide an opportunity for customers to view our high-quality
                landscaping products, materials, and designs, as well as to get
                a sense of the exceptional level of craftsmanship that our team
                brings to every project. Our friendly and knowledgeable staff is
                always available to answer any questions and help guide you
                through the selection process. Come visit one of our showrooms
                today and see for yourself why we're the go-to choice for
                landscaping services in Calgary.
              </p>
              <Flex>
                <div>
                  <p className="bold upper">533 58 Ave SE, Calgary, AB</p>
                  <p>Calgary, AB</p>
                </div>
                <div>
                  <p className="bold upper">showroom hours</p>
                  <p>By Appointment</p>
                </div>
              </Flex>
              <ButtonPrimary to="/showroom">explore showroom</ButtonPrimary>
            </Text>
          </FlexMobileOpp>
        </Container>
      </Section>
    </Wrapper>
  )
}
