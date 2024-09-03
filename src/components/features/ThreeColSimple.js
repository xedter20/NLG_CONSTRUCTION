import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase
} from 'components/misc/Headings.js';
import { SectionDescription } from 'components/misc/Typography.js';
import { Container, ContentWithPaddingXl } from 'components/misc/Layouts.js';
import { ReactComponent as ArrowRightIcon } from 'images/arrow-right-icon.svg';
import SupportIconImage from 'images/support-icon.svg';
import ShieldIconImage from 'images/shield-icon.svg';
import CustomizeIconImage from 'images/customize-icon.svg';
import { ReactComponent as SvgDecoratorBlob3 } from 'images/svg-decorator-blob-3.svg';

const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;
const ThreeColumnContainer = styled.div`
  ${tw`mt-10 flex items-center   
  flex-wrap justify-center max-w-screen-xl mx-auto drop-shadow-2xl shadow-md`}
`;
const Column = styled.div`
  ${tw`xl:w-1/4 md:w-1/3 sm:w-1/2  w-full h-full`}
  .title {
    ${tw`mt-4 font-semibold leading-none text-secondary-400 text-sm`}
  }
`;

const Card = styled.a`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
  .imageContainer {
    ${tw`text-center rounded-full p-2 bg-green-50`}
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-secondary-300`}
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none hocus:text-primary-900 transition duration-300`}
    .icon {
      ${tw`ml-2 w-4`}
    }
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40`}
`;
export default ({
  cards = [
    {
      imageSrc: ShieldIconImage,
      title: 'Secure',
      description:
        'We strictly only deal with vendors that provide top notch security.',
      url: 'https://timerse.com'
    },
    {
      imageSrc: SupportIconImage,
      title: '24/7 Support',
      description: 'Lorem ipsum donor amet siti ceali placeholder text',
      url: 'https://google.com'
    },
    {
      imageSrc: CustomizeIconImage,
      title: 'Customizable',
      description: 'Lorem ipsum donor amet siti ceali placeholder text',
      url: 'https://reddit.com'
    }
  ],
  linkText = 'Learn More',
  heading = '',
  subheading = '',
  description = '',
  imageContainerCss = null,
  imageCss = null
}) => {
  /*
   * This componets accepts a prop - `cards` which is an array of object denoting the cards. Each object in the cards array can have the following keys (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  4) url - the url that the card should goto on click
   */
  return (
    <Container>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        {heading && <Heading>{heading}</Heading>}
        {description && <Description>{description}</Description>}
        <ThreeColumnContainer>
          {cards.map((card, i) => (
            <Column key={i}>
              <Card href={card.url}>
                <span className="imageContainer" css={imageContainerCss}>
                  <img src={card.imageSrc} alt="" css={imageCss} />
                </span>
                <span className="title">{card.title}</span>
                <p className="description">{card.description}</p>
              </Card>
            </Column>
          ))}
        </ThreeColumnContainer>
      </ContentWithPaddingXl>
      <DecoratorBlob />
    </Container>
  );
};
