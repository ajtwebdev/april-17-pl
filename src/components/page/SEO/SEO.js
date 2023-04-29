import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

import React from 'react'

export default function SEO({title, description}) {
  return (
    <Helmet>
        <title>{title}</title>
    </Helmet>
  )
}
