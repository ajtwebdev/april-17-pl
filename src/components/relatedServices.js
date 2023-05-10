// import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
// import React from "react"
// import styled from "styled-components"
// import { Section, Container, GridAuto } from "./layoutComponents"
// import { ButtonPrimary } from "./buttons"
// import { Link } from "gatsby"

// const Wrapper = styled.div`
//   padding: 4em 0;
//   background: var(--clr-dark);
//   @media screen and (max-width: 450px) {
//     padding: 4em 0;
//   }
// `

// const Text = styled.div`
//   text-align: center;
//   max-width: 110ch;
//   width: 100%;
//   margin-right: auto;
//   margin-left: auto;
//   color: var(--txt-light);
// `

// const StyledImg = styled(GatsbyImage)`
//   height: 250px;
//   width: 250px;
//   border: 2px solid var(--clr-accent);
//   border-radius: 1000px;
// `

// const Item = styled.div`
//   text-align: center;

//   div {
//     padding: 1em;
//   }

//   p {
//     color: var(--txt-light);
//   }
// `

// export default function RelatedServices({ serviceContent }) {
//   return (
//     <Wrapper>
//       <Container className="spacing">
//         <Text className="spacing">
//           <div className="">
//             <h2 className="title">our popular calgary landscaping services</h2>
//           </div>
//         </Text>
//         <GridAuto>
//               <Item>
//                 <StaticImage
//                   src=""
//                   alt=""
//                 />
//                 <div>
//                   <h3 className="subheader tan">title</h3>
//                   <p></p>
//                     <Link to="/"></Link>
//                 </div>
//               </Item>
//               <Item>
//                 <StaticImage
//                   src=""
//                   alt=""
//                 />
//                 <div>
//                   <h3 className="subheader tan">title</h3>
//                   <p></p>
//                     <Link to="/"></Link>
//                 </div>
//               </Item>
//               <Item>
//                 <StaticImage
//                   src=""
//                   alt=""
//                 />
//                 <div>
//                   <h3 className="subheader tan">title</h3>
//                   <p></p>
//                     <Link to="/"></Link>
//                 </div>
//               </Item>
//         </GridAuto>
//         <center>
//           <ButtonPrimary to="/contact">talk to us today</ButtonPrimary>
//         </center>
//       </Container>
//     </Wrapper>
//   )
// }
