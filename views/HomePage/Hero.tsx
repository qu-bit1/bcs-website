import NextImage from "next/image"
// import NextLink from 'next/link';
import Link from "next/link"
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
// import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>IIT Kanpur</CustomOverTitle>
        <Heading>Brain and Cognitive Society</Heading>
        <Description>
        The Brain & Cognitive Society is a student society at IIT Kanpur. We aim at studying Brain Science to reverse 
        engineer human intelligence to create more general and intelligent AI's for the future world. 
        </Description>
        <CustomButtonGroup>
        <Link href="/projects" passHref>
						<Button>
              Our Projects <span>&rarr;</span>
						</Button>
					</Link>
					<a target="_blank" rel="noopener noreferrer" href="/people">
						<Button transparent>
              People <span>&rarr;</span>
						</Button>
					</a>
        </CustomButtonGroup>
      </Contents>
      <ImageContainer>
        <NextImage id = "logo" src= "/logo.png"  layout = "fill" objectFit="contain" />
      </ImageContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 41.3%;
  position: relative;
  left: 15rem;
  border-radius: 50%;
  overflow: hidden;
  aspect-ratio: 1/1;

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  ${media("<=desktop")} {
    margin-top: 2rem;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    left: 0;
    width: 100vw;
    border-radius: 0;
    aspect-ratio: unset;
  }
`


const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
