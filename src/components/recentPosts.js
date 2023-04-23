import React from "react"
import { Section, Container, GridThree } from "./layoutComponents"
import styled from "styled-components"
import { useRecentPosts } from "../hooks/useRecentPosts"
import { GatsbyImage } from "gatsby-plugin-image"

const Text = styled.div`
  text-align: center;
`

const Article = styled.article``

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
                {/* <GatsbyImage
                  image={
                    post.featuredImage.node.localFile.childImageSharp
                      .gatsbyImageData
                  }
                /> */}
                <h3 className="subheader">{post.title}</h3>
              </Article>
            </GridThree>
          )
        })}
      </Container>
    </Section>
  )
}
