import React from "react"
import { Section, Container, GridThree } from "./layoutComponents"
import styled from "styled-components"
import { useRecentPosts } from "../hooks/useRecentPosts"
import { GatsbyImage } from "gatsby-plugin-image"
import { ButtonInline } from "./buttons"

const Text = styled.div`
  text-align: center;
`

const Article = styled.article`
  div {
    padding: 2em;
  }
`

const StyledImg = styled(GatsbyImage)`
  width: 100%;
  height: 400px;
  object-fit: cover;
`

export default function RecentPosts() {
  const data = useRecentPosts()
  return (
    <Section>
      <Container className="spacing">
        <Text>
          <h2 className="title">recent landscaping articles</h2>
        </Text>
        {data.allWpPost.nodes.map(post => {
          return (
            <GridThree>
              <Article className="spacing">
                {post.featuredImage ? (
                  <StyledImg
                    image={
                      post.featuredImage.node.localFile.childImageSharp
                        .gatsbyImageData
                    }
                  />
                ) : null}
                <div>
                  <h3 className="subheader">{post.title}</h3>
                  <ButtonInline to={post.uri}>Read more</ButtonInline>
                </div>
              </Article>
            </GridThree>
          )
        })}
      </Container>
    </Section>
  )
}