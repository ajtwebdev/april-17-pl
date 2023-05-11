import React from "react"
import styled from "styled-components"

import { Section, Container, Flex } from "../layoutComponents"
import { Label, Input, TextArea, Submit } from "./formItems"
import Map from "../map"
import { AnchorInline } from "../buttons"

const FormWrapper = styled.div`
  // background: var(--clr-dark);
  // color: var(--txt-light);
  // padding: 2em;
`

export default function FormContact(props) {
  return (
    <Section>
      <Container>
        <div>
          <h3 className="title center">
            <span className="italics accent">{props.title}</span>
          </h3>
          <p className="caps center">
            Take a moment to tell us your outdoor living wish list by filling
            out the form. Can't wait to talk to us? Call{" "}
            <AnchorInline href="tel: 403-257-4059">403-257-4059</AnchorInline>{" "}
            now!
          </p>
        </div>
          <FormWrapper>
            <form
              name="contact"
              className="spacing"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>
              <Flex>
                <div className="spacing-sm">
                  <Label htmlFor="name">* Name:</Label>
                  <Input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="spacing-sm">
                  <Label htmlFor="email">* Email:</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </Flex>
              <div className="spacing-sm">
                <Label htmlFor="phone">* Phone:</Label>
                <Input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <hr />
              <div className="spacing">
                <h3 className="subheader">harscaping needs:</h3>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="hardscaping"
                      id="paving-stones"
                      value="paving stones"
                    />
                    <label for="paving">paving stones</label>
                  </div>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="hardscaping"
                      id="retaining-walls"
                      value="retaining walls"
                    />
                    <label for="retaining-walls">retaining walls</label>
                  </div>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="hardscaping"
                      id="garden-walls"
                      value="garden walls"
                    />
                    <label for="garden-walls">garden walls</label>
                  </div>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="hardscaping"
                      id="garden-edging"
                      value="garden edging"
                    />
                    <label for="garden-edging">garden edging</label>
                  </div>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="hardscaping"
                      id="concrete-curbing"
                      value="concrete curbing"
                    />
                    <label for="concrete-curbing">concrete curbing</label>
                  </div>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="hardscaping"
                      id="stairs"
                      value="stairs"
                    />
                    <label for="stairs">stairs</label>
                  </div>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="hardscaping"
                      id="seat-walls"
                      value="seat walls"
                    />
                    <label for="seat-walls">seat walls</label>
                  </div>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="hardscaping"
                      id="concrete-installation"
                      value="concrete installation"
                    />
                    <label for="concrete-installation">concrete installation</label>
                  </div>
              </div>
              <hr />
              <div className="spacing">
                <h3 className="subheader">softscaping needs:</h3>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="softscaping"
                      id="artificial-turf"
                      value="artificial turf"
                    />
                    <label for="artificial-turf">artificial turf</label>
                  </div>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="softscaping"
                      id="irrigation"
                      value="irrigation"
                    />
                    <label for="irrigation">irrigation</label>
                  </div>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="softscaping"
                      id="sod"
                      value="sod"
                    />
                    <label for="sod">sod</label>
                  </div>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="softscaping"
                      id="tree-planting"
                      value="tree planting"
                    />
                    <label for="tree-planting">tree & shrub planting</label>
                  </div>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="softscaping"
                      id="mulch"
                      value="mulch"
                    />
                    <label for="mulch">mulch & decorative rock</label>
                  </div>
              </div>
              <hr />
              <div className="spacing">
                <h3 className="subheader">outdoor living needs:</h3>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="outdoor"
                      id="decks"
                      value="decks"
                    />
                    <label for="decks">decks</label>
                </div>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="outdoor"
                      id="pergolas"
                      value="pergolas"
                    />
                    <label for="pergolas">pergolas</label>
                </div>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="outdoor"
                      id="lighting"
                      value="lighting"
                    />
                    <label for="lighting">lighting</label>
                </div>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="outdoor"
                      id="design"
                      value="design"
                    />
                    <label for="design">design</label>
                </div>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="outdoor"
                      id="water-features"
                      value="water features"
                    />
                    <label for="water-features">water features</label>
                </div>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="outdoor"
                      id="fire-pits"
                      value="fire pits"
                    />
                    <label for="fire-pits">fire pits</label>
                </div>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="outdoor"
                      id="fences"
                      value="fences"
                    />
                    <label for="fences">fences</label>
                </div>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="outdoor"
                      id="privacy-screens"
                      value="privacy screens"
                    />
                    <label for="privacy-screens">privacy screens</label>
                </div>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="outdoor"
                      id="deck-railings"
                      value="deck railings"
                    />
                    <label for="deck-railings">deck railings</label>
                </div>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="outdoor"
                      id="outdoor-kitchens"
                      value="outdoor kitchens"
                    />
                    <label for="outdoor-kitchens">outdoor kitchens</label>
                </div>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="outdoor"
                      id="outdoor-furniture"
                      value="outdoor furniture"
                    />
                    <label for="outdoor-furniture">outdoor furniture</label>
                </div>
              </div>
              <hr />
              <div className="spacing">
                <h3 className="subheader">location:</h3>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="location"
                      id="front"
                      value="front yard"
                    />
                    <label for="front">front yard</label>
                  </div>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="location"
                      id="backyard"
                      value="backyard"
                    />
                    <label for="backyard">backyard</label>
                  </div>
              </div>
              <hr />
              <div className="spacing">
                <h3 className="subheader">project type:</h3>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="type"
                      id="new-landscaping"
                      value="new landscaping"
                    />
                    <label for="new-landscaping">new landscaping</label>
                  </div>
                <div className="spacing-sm">
                  <input
                      type="radio"
                      name="type"
                      id="renovation"
                      value="renovation"
                    />
                    <label for="renovation">renovation</label>
                  </div>
              </div>
              <hr />
              <div className="spacing-sm">
                <Label htmlFor="file">Please attach your landscaping plan if you have one:</Label>
                <Input type="file" id="file" name="file" />
              </div>
              <hr />
              <div className="spacing-sm">
                <Label htmlFor="budget">What's your budget?</Label>
                <Select
                      name="budget"
                      id="budget"
                      className="center"
                    >
                      <option selected="selected" value="$5-10K">$5-10K</option>
                      <option value="$10-20K">$10-20K</option>
                      <option value="$20-30K">$20-30K</option>
                      <option value="$30-50K">$30-50K</option>
                      <option value="$50K=">$50K+</option>
                    </Select>
              </div>
              <hr />
              <div className="spacing-sm">
                <Label htmlFor="newClient">Are you a new client?</Label>
                <Select
                      name="newClient"
                      id="newClient"
                      className="center"
                    >
                      <option selected="selected" value="yes">Yes</option>
                      <option value="no">No</option>
                    </Select>
              </div>
              <hr />
              <div className="spacing-sm">
          <Input
            type="text"
            name="community"
            id="community"
            placeholder="* Community you live in"
            required
            hr
          />
        </div>
              <div className="spacing-sm">
                <Label htmlFor="msg">* Additional details:</Label>
                <TextArea
                  name="msg"
                  id="msg"
                  cols="30"
                  rows="10"
                  placeholder="What's your project?"
                  required
                />
              </div>
              <Submit type="submit" id="submit" value="submit wish list" />
            </form>
          </FormWrapper>
      </Container>
    </Section>
  )
}
