import React, { useState } from "react"
import { useStaticQuery, graphql } from 'gatsby';
import { SEOContext } from 'gatsby-plugin-wpgraphql-seo';
import SEO from "./seo"
import HeaderBasic from "./headers/headerBasic"
import Footer from "./footers/footer"

import FinanceBanner from "./financeBanner"
import ContactBanner from "./contactBanner"
import RecentPosts from "./recentPosts"
import GoogleBadge from "./googleBadge"
import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
`

export default function Layout({ children }) {
  const {
    wp: { seo },
} = useStaticQuery(graphql`
    query SiteInfoQuery {
        wp {
            seo {
                contentTypes {
                    post {
                        title
                        schemaType
                        metaRobotsNoindex
                        metaDesc
                    }
                    page {
                        metaDesc
                        metaRobotsNoindex
                        schemaType
                        title
                    }
                }
                webmaster {
                    googleVerify
                    yandexVerify
                    msVerify
                    baiduVerify
                }
                schema {
                    companyName
                    personName
                    companyOrPerson
                    wordpressSiteName
                    siteUrl
                    siteName
                    inLanguage
                    logo {
                        sourceUrl
                        mediaItemUrl
                        altText
                    }
                }
                social {
                    facebook {
                        url
                        defaultImage {
                            sourceUrl
                            mediaItemUrl
                        }
                    }
                    instagram {
                        url
                    }
                    linkedIn {
                        url
                    }
                    mySpace {
                        url
                    }
                    pinterest {
                        url
                        metaTag
                    }
                    twitter {
                        username
                        cardType
                    }
                    wikipedia {
                        url
                    }
                    youTube {
                        url
                    }
                }
            }
        }
    }
`);
  return (
    <SEOContext.Provider value={{ global: seo }}>
    <Wrapper>
      <HeaderBasic />
      <main>{children}</main>
      <RecentPosts />
      <FinanceBanner />
      <ContactBanner />
      <Footer />
      <GoogleBadge />
    </Wrapper>
    </SEOContext.Provider>
  )
}
