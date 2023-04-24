import React from "react"
import { Container } from "./layoutComponents"
import styled from "styled-components"

const Feed = styled.div`
  iframe {
    width: 100%;
    height: 540px;
  }

  hr {
    background-color: var(--clr-light);
    height: 1px;
    border: none;
  }
`

export default function InstagramFeed() {
  return (
    <div className="spacing">
      <Feed>
        <iframe
          src="https://embedsocial.com/api/pro_hashtag/3c18d46b1f22bc51b2c07e90e7ab55bb531af6ad"
          // width="900px"
          // height="400px"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
        />
      </Feed>
      <hr />
    </div>
  )
}
