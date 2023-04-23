import { useStaticQuery, graphql } from "gatsby"

export const useRecentPosts = () => {
  const data = useStaticQuery(graphql`
    query RecentPostsQuery {
      allWpPost(limit: 3) {
        nodes {
          featuredImage {
            node {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
              slug
            }
          }
          title
          uri
        }
      }
    }
  `)
  return data
}
