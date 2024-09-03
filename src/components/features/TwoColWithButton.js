import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase
} from 'components/misc/Headings.js';
import { PrimaryButton as PrimaryButtonBase } from 'components/misc/Buttons.js';
import TeamIllustrationSrc from 'images/team-illustration-2.svg';
import { ReactComponent as SvgDotPattern } from 'images/dot-pattern.svg';

import ResponsiveVideoEmbed from '../../helpers/ResponsiveVideoEmbed.js';

const Container = tw.div`relative bg-gradient-to-r  drop-shadow-2xl`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-1 md:py-1 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative shadow-2xl`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0 drop-shadow-2xl shadow-lg p-8 `,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`
]);

const DecoratorBlob = styled(SvgDotPattern)(props => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(
  SubheadingBase
)`text-center md:text-left underline decoration-lime-200 underline-offset-8 `;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-justify leading-relaxed text-secondary-100`;

const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`
]);

export default ({
  subheading = 'Our Expertise',
  heading = (
    <>
      Designed & Developed by <span tw="text-primary-500">Professionals.</span>
    </>
  ),
  description = 'NLG Construction is 20 years in the making. What started out as part-time contracting ventures by the CEO turned out to be the modest entry to the industry in the beginning of the year 2000. The initial construction projects have provided our clients with the image of a start-up construction team who is strongly committed to provide the highest standard services that our clients rightfully deserve in the building and construction market. Having NLG Construction as an option through the years has our clients express their well-founded trust and satisfactory recommendations as expected standard deliverables were highly met under the premise of an equitable, systematic, and consultative planning, design, and construction. Such is led by a construction management team which consists of qualified and experienced professionals, manager, and staff who continually strive to live by our vision and drive the future of this industry.',
  primaryButtonText = 'Learn More',
  primaryButtonUrl = 'https://timerse.com',
  imageSrc = TeamIllustrationSrc,
  buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  textOnLeft = true
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <TwoColumn>
      <ImageColumn>
        <ResponsiveVideoEmbed
          url={
            'https://firebasestorage.googleapis.com/v0/b/nlg-images.appspot.com/o/Intro_NLG.mp4?alt=media&token=7095a436-4d8c-408e-be76-89417a54cab6&_gl=1*1gq93zx*_ga*MTU4NzY2OTQyNC4xNjk2MjE4MzQz*_ga_CW55HF8NVT*MTY5ODM3Mjc4Ny4yOC4xLjE2OTgzNzQ2NjcuMzMuMC4w'
          }
          tw="w-full"
        />
        {/* <Image
            css={imageCss}
            src={imageSrc}
            imageBorder={imageBorder}
            imageShadow={imageShadow}
            imageRounded={imageRounded}
          />
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />} */}
      </ImageColumn>
      <TextColumn textOnLeft={textOnLeft}>
        <TextContent>
          <Subheading>{subheading}</Subheading>
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </TextContent>
      </TextColumn>
    </TwoColumn>
  );
};
