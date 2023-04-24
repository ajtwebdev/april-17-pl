import React from "react"
import { Flex } from "./layoutComponents"
import { StaticImage } from "gatsby-plugin-image"
import { FaStar, FaGoogle } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 2em;
  border-top: 5px solid var(--clr-accent);
  box-shadow: var(--shadow-light);
  background: var(--clr-light);
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000000;
  .header {
    color: orange;
    display: flex;
    align-items: center;
    & > * + * {
      margin-left: 5px;
    }
  }

  .body--small {
    color: var(--txt-dark-secondary);
  }
`

const FlexStars = styled.div`
  display: flex;
  & > * + * {
    margin-left: 5px;
  }
`

const fontStyle = {
  color: "orange",
  fontSize: "26px",
}

const googleStyle = {
  fontSize: "60px",
}

export default function GoogleBadge() {
  return (
    <Wrapper>
      <Flex>
        <FcGoogle style={googleStyle} />
        <div className="spacing">
          <p className="body--small">Google Rating</p>
          <p className="header">
            <span>4.8</span>
            <FlexStars>
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
            </FlexStars>
          </p>
          <p className="body--small">Based on 74 reviews</p>
        </div>
      </Flex>
    </Wrapper>
  )
}
