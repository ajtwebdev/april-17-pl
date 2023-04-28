import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { Container, FlexMobileOpp, Section } from "../../layoutComponents"
import styled from "styled-components"
import { ButtonPrimary, ButtonSecondaryLight } from "../../buttons"

const Wrapper = styled.div`
  .css-1xhq01z {
    justify-content: center;
  }

  .css-52dxnr {
    font-family: var(--ff-alfa);
    font-size: var(--fs-sm);
    font-weight: var(--fw-button);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .css-52dxnr[aria-selected="true"],
  .css-52dxnr[data-selected] {
    --tabs-color: var(--clr-tan);
    border-color: currentcolor;
  }

  css-13o7eu2 {
    padding: 2em;
    border: 1px solid var(--clr-tan);
    border-radius: var(--br);
  }
`

const TabWrapper = styled.div`
  padding: 2em;
  border: 3px solid var(--clr-tan);
  border-radius: var(--br);
`

const AccordionStyle = {
  background: "var(--clr-accent)",
  borderRadius: "var(--br)",
  border: "none",
}

export default function FaqTab({ tabsContent, title }) {
  return (
    <Wrapper>
      <Section>
        <Container className="spacing">
          <h2 className="title">{title}</h2>
          <TabWrapper>
            <Tabs>
              <TabList>
                {tabsContent.map(tab => {
                  return <Tab>{tab.tabLabel}</Tab>
                })}
              </TabList>

              <TabPanels>
                {tabsContent.map(tab => {
                  return (
                    <TabPanel>
                      <Accordion className="spacing">
                        {tab.questions.map(questionContent => {
                          return (
                          <AccordionItem style={AccordionStyle}>
                            <h2>
                              <AccordionButton>
                                <Box
                                  className="subheader"
                                  as="span"
                                  flex="1"
                                  textAlign="left"
                                >
                                  {/* QUESTION */}
                                  {questionContent.question}
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel
                              pb={4}
                              dangerouslySetInnerHTML={{
                                __html: `${questionContent.answer}`,
                              }}
                            />
                          </AccordionItem>)
                        })}
                      </Accordion>
                    </TabPanel>
                  )
                })}
              </TabPanels>
            </Tabs>
          </TabWrapper>
        </Container>
      </Section>
    </Wrapper>
  )
}
