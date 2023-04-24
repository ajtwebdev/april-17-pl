import React from "react"
import { Flex } from "./layoutComponents"
import { StaticImage } from "gatsby-plugin-image"
import { FaStar, FaGoogle } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import styled from "styled-components"

const Wrapper = styled.div`
  border-top: 3px solid var(--clr-tan);
  background: var(--clr-light);
  .header {
    color: gold;
  }
`

const FlexStars = styled.div`
  display: flex;
  & > * + * {
    margin-left: 5px;
  }
`

const fontStyle = {
  color: "gold",
}

export default function GoogleBadge() {
  return (
    <Wrapper>
      <Flex>
        <StaticImage
          src="../images/google-badge.svg"
          alt="calgary landscaping reviews"
        />
        <div className="spacing">
          <p>Google Rating</p>
          <p className="header">
            4.8{" "}
            <FlexStars>
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
            </FlexStars>
          </p>
          <p>Based on 74 reviews</p>
        </div>
      </Flex>
    </Wrapper>
  )
}
