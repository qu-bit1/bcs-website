/* eslint-disable @typescript-eslint/no-unused-vars */
import NextImage from "next/image"
import Link from "next/link"
import styled from "styled-components"
import AutofitGrid from "components/AutofitGrid"
import Container from "components/Container"
import Section from "components/Section"
import SectionTitle from "components/SectionTitle"
import { media } from "utils/media"

export default function WhatWeDo(){
	return(
		<Section title = "" >
			<SectionTitle>What We Do ?</SectionTitle>
			<br />
			<br />
			<Container>
				<CustomAutofitGrid3>
						<Card style={{ cursor: "pointer" }}>
							<NextImage src="/HomePageImg/neural-network.png" height="120" width="120" alt="Academics Image"/>
							<Title>Neuro stuff</Title>
							<Description>We Do pretty crazy Neuro Stuff
							</Description>
							
						</Card>
					<Card style={{ cursor: "pointer" }}>
							<NextImage src="/HomePageImg/neural-network.png" height="120" width="120" alt="Ranking Image"/>
							<Title>AI/ML</Title>
							<Description>Cool Stuff
							</Description>
						</Card>
					<Link href= "/about#projects"  passHref>
						<Card style={{ cursor: "pointer" }}>
							<NextImage src="/HomePageImg/neural-network.png" height="120" width="120" alt="Alumni Image"/>
							<Title>Projects</Title>
							<Description>Cool Projects.</Description>
						</Card>
					</Link>
				</CustomAutofitGrid3>
			</Container>
		</Section>

	)
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 60rem;

  ${media("<=tablet")} {
    --autofit-grid-item-size: 30rem;
  }

  ${media("<=phone")} {
    --autofit-grid-item-size: 100%;
  }
`
const CustomAutofitGrid3 = styled(AutofitGrid)`
--autofit-grid-item-size: 30rem;

  ${media("<=tablet")} {
    --autofit-grid-item-size: 25rem;
  }

  ${media("<=phone")} {
    --autofit-grid-item-size: 100%;
  }
`

const Title = styled.div`
  font-weight: bold;
`
const Card = styled.div`
  display: flex;
  padding: 2.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;
  & > *:not(:first-child) {
    margin-top: 1.5rem;
  }
`
const Description = styled.div`
  font-size: 1.47rem;
  opacity: 0.6;
`
