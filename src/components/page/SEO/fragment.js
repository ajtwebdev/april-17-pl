module.exports = () => {
    return `
      title
     description
     image {
        localFile {
            childImageSharp {
                gatsbyImageData
            }
        }
     }
     article
      `
  }
  