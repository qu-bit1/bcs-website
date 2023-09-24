/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <BottomBar>
          <ShareBar>
            <SocialIcon url='https://www.instagram.com/bcs.iitk' target="_blank" rel="noopener noreferrer" />
            <SocialIcon url='https://discord.gg/g9bgpaQXQ5' target="_blank" rel="noopener noreferrer" />
          </ShareBar>
          <CopyrightWrapper>
            <Copyright>&copy; Copyright 2023 Brain and Cognitive Society</Copyright>
          </CopyrightWrapper>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;

const IconsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${media('<=tablet')} {
    flex-direction: column; /* Change to column layout on smaller screens */
  }
`;

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem; /* Add spacing between icons */
  }
`;

const CopyrightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1rem;

  ${media('<=tablet')} {
    flex-direction: column; 
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.7rem;
`;

const BottomBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column; /* Change to column layout on smaller screens */
  }
`;