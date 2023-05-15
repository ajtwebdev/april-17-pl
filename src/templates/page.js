// See .cache/page-templates after running dev/build
// to understand how this file ends up looking

import React from "react"
import { graphql } from "gatsby"
import Layout from "../../src/components/layout"
// import { combineFields } from "../utils/combine-fields"
// import SEO from "../components/seo"
// import { useSeoQuery } from "../hooks/useSeoQuery"

// ### COMPONENT IMPORTS ### DO NOT MODIFY OR MOVE THIS COMMENT ###

const PageTemplate = pageProps => {
  // const seoData = useSeoQuery()
  // const seodata = combineFields(pageProps.data.page, "seo")
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
        {/* <SEO title={seodata.title} /> */}
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

// export const query = graphql`
//     query GET_PAGE {
//       page(id: "5379", idType: DATABASE_ID) {
//             nodeType
//             title
//             uri
//             seo {
//                 title
//                 metaDesc
//                 focuskw
//             }
//         }
//     }
// `;