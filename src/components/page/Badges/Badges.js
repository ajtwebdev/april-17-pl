import React from "react"
import { Container, Section } from "../../layoutComponents"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Img } from "@chakra-ui/react"

const ImgStyle = {
  marginTop: "auto",
  marginBottom: "auto",
  height: "250px",
  width: "100%",
}

export default function Badges({ title }) {
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: "linear",
    centerMode: true,
  }
  return (
    <Section>
      <div className="spacing">
        {title ? <h2 className="title center">{title}</h2> : null}
        <Slider {...settings}>
          {/* <a
            href="https://threebestrated.ca/landscaping-companies-in-calgary-ab"
            taget="_blank"
          > */}
          <StaticImage
            src="../../../images/badges/best-landscaping-companies-in-calgary-1.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            objectFit="contain"
          />
          {/* </a> */}
          {/* <a
            href="https://trustedpros.ca/company/project-landscape-ltd"
            target="_blank"
          > */}
          <StaticImage
            src="../../../images/badges/best-landscaping-companies-in-calgary-2.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            objectFit="contain"
          />
          {/* </a> */}
          <StaticImage
            src="../../../images/badges/best-landscaping-companies-in-calgary-3.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            objectFit="contain"
          />
          <StaticImage
            src="../../../images/badges/landscaping-experts-calgary-1.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            objectFit="contain"
          />
          <StaticImage
            src="../../../images/badges/landscaping-experts-calgary-2.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            objectFit="contain"
          />
          <StaticImage
            src="../../../images/badges/landscaping-experts-calgary-3.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            objectFit="contain"
          />
          <StaticImage
            src="../../../images/badges/landscaping-calgary-top-rated-experts-1.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            objectFit="contain"
          />
          <StaticImage
            src="../../../images/badges/landscaping-calgary-top-rated-experts-2.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            objectFit="contain"
          />
          {/* <a
            href="https://homestars.com/companies/2895459-project-landscape-ltd?service_area=2119137"
            target="_blank"
          > */}
          <StaticImage
            src="../../../images/badges/landscaping-calgary-top-rated-experts-3.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            objectFit="contain"
          />
          {/* </a> */}
          {/* <a
            href="https://www.houzz.com/professionals/landscape-architects-and-landscape-designers/project-landscape-ltd-pfvwus-pf~816279347/__public"
            taget="_blank"
          > */}
          <StaticImage
            src="../../../images/badges/landscaping-calgary-top-rated-experts-4.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            objectFit="contain"
          />
          {/* </a> */}
          <StaticImage
            src="../../../images/badges/landscaping-calgary-top-rated-experts-5.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            objectFit="contain"
          />
          <StaticImage
            src="../../../images/badges/landscaping-calgary-top-rated-experts-6.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            objectFit="contain"
          />
          <StaticImage
            src="../../../images/badges/landscaping-calgary-top-rated-experts-7.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            objectFit="contain"
          />
          <StaticImage
            src="../../../images/badges/landscaping-calgary-top-rated-experts-8.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            objectFit="contain"
          />
          <StaticImage
            src="../../../images/badges/landscaping-calgary-top-rated-experts-9.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            objectFit="contain"
          />
          {/* <a
            href="https://www.bbb.org/ca/ab/calgary/profile/landscape-contractors/project-landscape-ltd-0017-100724"
            taget="_blank"
          > */}
          <StaticImage
            src="../../../images/badges/landscaping-calgary-top-rated-experts-10.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            objectFit="contain"
          />
          {/* </a> */}
          {/* <a
            href="https://homestars.com/companies/2895459-project-landscape-ltd?service_area=2119137"
            target="_blank"
          > */}
          <StaticImage
            src="../../../images/badges/landscaping-calgary-top-rated-experts-11.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            objectFit="contain"
          />
          {/* </a> */}
        </Slider>
      </div>
    </Section>
  )
}
