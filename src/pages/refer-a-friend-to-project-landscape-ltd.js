import React from "react"
import Banner from "../components/banners/banner"
import Layout from "../components/layout"
import PortfolioBanner from "../components/portfolioBanner"
import SEO from "../components/seo"
import ImageRight from "../components/sections/imageRight"
import CtaMain from "../components/cta/ctaMain"
import ImageLeft from "../components/sections/imageLeft"

import BannerImg from "../images/banner-image-3.jpg"
import ImageTop from "../images/ph.jpg"
import WarrantyForm from "../components/forms/warrantForm"
import ReferForm from "../components/forms/referForm"
import StepsToRefer from "../components/sections/stepsToRefer"
import MainTestimonials from "../components/testimonials/mainTestimonials"

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react"
import { Container, FlexMobileOpp, Section } from "../components/layoutComponents"
import styled from "styled-components"
import { ButtonPrimary } from "../components/buttons"
import AllServicesBanner from "../components/services/allServicesBanner"

const Wrapper = styled.div`
  background: url("../../images/calgary-landscaping-faq-banner.jpg"),
    rgba(0, 0, 0, 0.8);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--txt-light);
`

const AccordionStyle = {
  background: "var(--clr-accent)",
  borderRadius: "var(--br)",
  border: "none",
}

export default function ReferFriend() {
  return (
    <Layout>
      <SEO
        title="Refer a Friend | Project Landscape Ltd."
        description="Refer a friend to project landscape and get $100 off!"
      />
      <Banner
        img={BannerImg}
        title="invite your friends or family to our Calgary landscape refer a friend program"
        subheader=""
        description="Simply refer a family member or friend to our landscaping services, and if they become a customer, you'll receive a special reward as a token of our gratitude. We value your trust and confidence in us, and we believe that a referral from you is the ultimate form of praise. Thank you for considering recommending us to your friends and family."
      />
      <StepsToRefer />
      <ReferForm />
      <MainTestimonials />
      <Wrapper>
      <Section>
        <Container>
          <FlexMobileOpp>
            <Accordion className="spacing">
              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      What is the Refer a Friend program for Project Landscape?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Our Refer a Friend program is designed to reward our valued customers for referring their friends, family, or colleagues to our landscape services. When someone you refer becomes our customer, both you and your friend can benefit from the program.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      How does the Refer a Friend program work for Project landscape?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                It's simple! As an existing customer, you sign up for our Refer a Friend program and receive a unique referral code or link. Share this code or link with your friends who are interested in our landscape services. When they become our customers and mention your referral code, both you and your friend will receive a special reward.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      Is there a limit to the number of referrals I can make?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                No, there is no limit to the number of referrals you can make. We appreciate your support in spreading the word about our landscaping services, and we want to reward you for every successful referral.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      Can I refer someone who has already been in contact with your company?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                To be eligible for the referral program, the person you refer should not have had any prior contact or engagement with Project landscape before you referred them. The referral should be a new customer for us.
                </AccordionPanel>
              </AccordionItem>
              
            </Accordion>
            <div className="spacing">
              <div>
                <p className="subheader tan">learn from the leaders</p>
                <h2 className="title">Calgary refer a friend landscape program FAQs</h2>
              </div>

              <p>
              Looking for information on our refer a friend program in Calgary? Discover answers to common questions about our program that benefits you and your friend or family member. Get the insights you need for your next project, all in one convenient place. Start exploring our Calgary FAQ page today!
              </p>
              <ButtonPrimary to="/contact">get started</ButtonPrimary>
            </div>
          </FlexMobileOpp>
        </Container>
      </Section>
    </Wrapper>
    <AllServicesBanner />
    </Layout>
    
  )
}
