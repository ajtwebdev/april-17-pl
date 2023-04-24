import { useStaticQuery, graphql } from "gatsby"

export const useSeoQuery = () => {
  const seoData = useStaticQuery(graphql`
    query SeoQuery($id: String!) {
      wpPage(id: { eq: $id }) {
        title
      }
    }
  `)
  return seoData
}
