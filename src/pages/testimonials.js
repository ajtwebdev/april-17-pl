import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { Container, GridThree, Section } from "../components/layoutComponents"
import SEO from "../components/seo"
import { FaStar, FaGoogle } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import BannerImg from "../images/banner-image-1.png"
import Banner from "../components/banners/banner"

const Text = styled.div`
  max-width: 70ch;
  margin-left: auto;
  margin-right: auto;
`

const Wrapper = styled.div`
  background: var(--clr-light-secondary);
  color: var(--txt-dark);
  padding: 2em;
  border-radius: var(--br);
  box-shdaow: var(--shadow-bottom-light);
  height: 100%;
  a {
    text-decoration: underline;
    font-size: var(--fs-sm);
  }
`

const FlexStars = styled.div`
  display: flex;
  & > * + * {
    margin-left: 5px;
  }
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  & * + * {
    margin-left: 2px;
  }
`

const fontStyle = {
  color: "var(--clr-accent)",
}

const Review = props => {
  return (
    <Wrapper className="spacing">
      <FlexStars>
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
      </FlexStars>
      <p className="italics">"{props.review}"</p>

      <Flex>
        <FcGoogle size={35} />
        <div>
            <p className="subheader bold">{props.title}</p>
          <p className="caps bold">{props.name}</p>
          <a
            href=""
            target="_blank"
            className="accent"
          >
            Read more Google reviews &#8594;
          </a>
        </div>
      </Flex>
    </Wrapper>
  )
}

export default function Reviews() {
  return (
    <Layout>
      <SEO
        title="Testimonials | Project Landscape"
        description=""
      />
      <Banner
        img={BannerImg}
        title="customer testimonials"
        subheader="proven success"
        description="At Project Landscape Ltd., our premier outdoor landscaping services will increase the value and overall aesthetic of your home. We use quality brands, and unique products to help keep your lawn healthy, and your home looking incredible. This means an overall better living experience for you and your family."
      />
      <Section>
        <Container>
          <Text className="spacing">
            <h2 className="title center">5-star reviews</h2>
            <p className="center">
            </p>
          </Text>
          <GridThree className="spacing-md">
            <Review
            title="fence & gate"
              name="Shawn"
              review="Project Landscape was a wonderful choice of our landscaping project. It’s a new build and we love the result of from nothing to a beautiful front and back yard. The transformation was very impressive. It was done quickly and correctly. High level of customer service and smooth communications. We’ve got few quotes before giving the job to Project landscape, they are not the cheapest amount all, but truly the highest value. We are very happy with the entire process and results.

              "
            />
            <Review
            title="backyard landscaping"
              name="larry"
              review="Project Landscape replaced all the surface boards on our 2-level deck and stairs with pressure treated boards. They also created some additional “walk ways” in our back yard by replacing grass with pea-gravel filled paths. Their workmanship and attention to detail was excellent, and they ensured that everything was “right”. Also appreciated their detailed quotation — really helped us to fine-tune the work we wanted done — and happily answered all our questions. Highly recommend these folks for deck design and installation.

              "
            />
            <Review
            title="fence installation"
              name="jerry"
              review="Great experience overall. The work scope was executed to perfection and the team(s) were very efficient without jeopardizing quality. The work ethic and professionalism was top notch, very friendly, accommodating, and team’s workmanship and pride in their deliverable s was one of the best. Special thanks to Scott and Ryan from Operations and Alison at the office! We are already lining up our next project for the spring and would recommend Project Landscape for anyone looking for their services.

              "
            />
            <Review
            title="backyard patio"
              name="kurt"
              review="Allison and Scott were a pleasure to work with. There were some delays and mix-ups during the process. I assume it was because they’re handling a lot of different customers. The patio looks great! I was happy with how well they fit the blocks around the window well. I had to pick a bunch of rocks out of the lawn before I mowed, unfortunately, and there were skid marks left on the driveway from the bobcat.

              "
            />
            <Review
            title="patio and backyard landscaping"
              name="steve"
              review="Everyone at Project Landscape was professional and responsive to queries and clarifications. And their pricing was very reasonable. There appeared to be some moments of miscommunication between some people at the company during the rush to get my project underway during a short window of good weather in the middle of many consecutive days of rain, but in the end, everyone at Project Landscape came through and did a fantastic job on my project. All the work was done in one day with a large team to take advantage of the good weather. Franz did a great job with his crew, and I am very happy with the results. Everything was built exactly as I wanted it, and there were zero deficiencies. I would gladly call them up again for my next project.

              "
            />
            <Review
            title="backyard and frontyard landscaping"
              name="monica"
              review="Excellent and speedy work. Weather was a huge factor in our project and never seemed to work in our favor. However once the weather broke a full crew came to tackle our renovation. From removal of over grown weeds, patio installation, new sod, garden bed installation, trees being planted and walkway from side of house this work was done in 2 days. I was amazed at how quickly this was done maintaining the standard of work from the very beginning. Communication was a big plus for me as well as Alison in the office was always quick to reply and was very professional and a delight to talk to. We even had a change in design concept from our original plan after the work was done. The crew was able to come back out and fix this for us. Again very professional and quick. Scott and the team are amazing at what they do even advising on the best options for our space. I would not hesitate to hire them again for our next project.

              "
            />
            <Review
            title="gardening and landscape"
              name="maureen"
              review="Scott’s crew worked on my yard when I moved into my house in 2017. They dug flower beds, planted shrubs and trees, installed a fire pit and supplied topsoil. In 2018 his carpenters designed and constructed a privacy screen/flower wall on one side of my deck. It holds 60 pots of fragrant blooms and looks fantastic. When one of my trees was bending dangerously Scott sent his men to stake it up at no charge. His company does quality work and the costs are reasonable. If I need any more landscaping done, I will call Project Landscape Ltd.

              "
            />
          </GridThree>
        </Container>
      </Section>
    </Layout>
  )
}
