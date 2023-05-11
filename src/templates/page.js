// See .cache/page-templates after running dev/build
// to understand how this file ends up looking

import React from "react"
import { graphql } from "gatsby"
import Layout from "../../src/components/layout"
import SEO from "../../src/components/seo"
import Seo from 'gatsby-plugin-wpgraphql-seo';
// import { useSeoQuery } from "../hooks/useSeoQuery"

// ### COMPONENT IMPORTS ### DO NOT MODIFY OR MOVE THIS COMMENT ###

const PageTemplate = pageProps => {
  // const seoData = useSeoQuery()
  let components
  // ### COMPONENTS VARIABLE ### DO NOT MODIFY OR MOVE THIS COMMENT ###
  components = components.map(component => {
    return {
      name: component.__typename.split("_").pop(),
      data: component,
    }
  })
  return (
    <>
      <Layout>
        {/* <Seo post={pageProps.wpPage} /> */}
        {components.map((component, index) => {
          // ### COMPONENT RENDERING ### DO NOT MODIFY OR MOVE THIS COMMENT ###
          return <div>Error: The component {component.name} was not found</div>
        })}
      </Layout>
    </>
  )
}

export default PageTemplate

// ### PAGE QUERY ### DO NOT MODIFY OR MOVE THIS COMMENT ###

export const pageQuery = graphql`
    query GET_PAGE($id: String!) {
        wpPage(id: { eq: $id }) {
            nodeType
            title
            uri
            seo {
                title
                metaDesc
                focuskw
                metaKeywords
                metaRobotsNoindex
                metaRobotsNofollow
                opengraphTitle
                opengraphDescription
                opengraphImage {
                    altText
                    sourceUrl
                    srcSet
                }
                twitterTitle
                twitterDescription
                twitterImage {
                    altText
                    sourceUrl
                    srcSet
                }
                canonical
                cornerstone
                schema {
                    articleType
                    pageType
                    raw
                }
            }
        }
    }
`;
