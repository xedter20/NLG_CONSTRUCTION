import React from 'react';
import { useState } from 'react';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'; //eslint-disable-line
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import Hero from 'components/hero/TwoColumnWithVideo.js';
import Features from 'components/features/ThreeColSimple.js';
import MainFeature from 'components/features/TwoColWithButton.js';
import MainFeature2 from 'components/features/TwoColSingleFeatureWithStats2.js';
import TabGrid from 'components/cards/TabCardGrid.js';
import Testimonial from 'components/testimonials/ThreeColumnWithProfileImage.js';
import DownloadApp from 'components/cta/DownloadApp.js';
import Footer from 'components/footers/FiveColumnDark';

import chefIconImageSrc from 'images/chef-icon.svg';
import celebrationIconImageSrc from 'images/celebration-icon.svg';
import general_contracting from 'images/NLG/general_contracting.png';
import design_and_build from 'images/NLG/design_and_build.png';
import electrical_works from 'images/NLG/electrical_works.png';

import pre_construction from 'images/NLG/pre_construction.png';

import structural_design from 'images/NLG/structural_design.png';
import plumbing_works from 'images/NLG/plumbing_works.png';

import civil_works from 'images/NLG/civil_works.png';

import water_proofing from 'images/NLG/water_proofing.png';
import steel_fabrication from 'images/NLG/steel_fabrication.png';
import fencing from 'images/NLG/fencing.png';
import landscaping from 'images/NLG/landscaping.png';
import repair from 'images/NLG/repair.png';
import Banner from 'images/NLG/banner.png';

import AboutUs from '../pages/ContactUs';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import style from './gallery_style.css';

import { Container, ContentWithPaddingXl } from 'components/misc/Layouts.js';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
// //
import Project1 from 'images/NLG/Project1.jpg';
import Project2 from 'images/NLG/Project2.jpg';
import Project3 from 'images/NLG/Project3.jpg';
import Project4 from 'images/NLG/Project4.jpg';
import Project5 from 'images/NLG/Project5.jfif';
import Project6 from 'images/NLG/Project6.jfif';

import AboutUsPage from 'pages/AboutUs';
import ContactUsPage from 'pages/ContactUs';

import { PhotoAlbum, RenderPhotoProps } from 'react-photo-album';

const unsplashLink = (id, width, height) => Project1;

const images = [
  {
    original: Project1,
    thumbnail: Project1,
    originalTitle: 'dex',
    thumbnailTitle: 'ded',
    description: 'Description of Image'
  },
  {
    original: Project2,
    thumbnail: Project2
  },
  {
    original: Project3,
    thumbnail: Project3
  }
];
const unsplashPhotos = [
  { id: '8gVv6nxq6gY', width: 1080, height: 800, src: Project1 },
  { id: 'Dhmn6ete6g8', width: 1080, height: 800, src: Project2 },
  { id: 'RkBTPqPEGDo', width: 700, height: 720, src: Project3 },
  { id: '8gVv6nxq6gY', width: 1080, height: 800, src: Project4 },
  { id: 'Dhmn6ete6g8', width: 1080, height: 800, src: Project5 },
  { id: 'RkBTPqPEGDo', width: 700, height: 720, src: Project6 }
];

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
const photos = unsplashPhotos.map(photo => ({
  width: photo.width,
  height: photo.height,
  srcSet: breakpoints.map(breakpoint => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: photo.src,
      width: breakpoint,
      height
    };
  })
}));

export default () => {
  // const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`shadow bg-primary-400 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  const Subheading = tw.span`text-4xl sm:text-5xl font-bold font-black tracking-wide text-center flex justify-center mb-6`;
  // const HighlightedText = tw.span`text-primary-500`;

  const HighlightedTextSimple = tw.span`text-primary-400 ml-2`;
  const ImageContainer = tw.div`drop-shadow-2xl shadow`;
  const [index, setIndex] = useState(-1);
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            20 Years of Excellence
            <HighlightedText> Construction Industry</HighlightedText>
          </>
        }
        description="We understand your needs in construction so let's buld your future today."
        imageSrc={Banner}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Contact Us"
        watchVideoButtonText="Watch Video Introduction"
        primaryButtonUrl="#contact-us"
      />
      <section id="about-us">
        <Container>
          <ContentWithPaddingXl>
            <Subheading>
              About <span className=""> </span>
              <HighlightedTextSimple>Us</HighlightedTextSimple>
            </Subheading>
            <AboutUsPage />
          </ContentWithPaddingXl>
        </Container>
      </section>
      <section id="services">
        <Features
          // subheading={<Subheading>Features</Subheading>}
          heading={
            <>
              Amazing<HighlightedTextSimple>Services</HighlightedTextSimple>
            </>
          }
          imageContainerCss="text-primary-200"
          cards={[
            {
              imageSrc: general_contracting,
              title: 'General Contracting',
              description: '',
              url: '#services'
            },
            {
              imageSrc: design_and_build,
              title: 'Design and Build',
              description: '',
              url: '#services'
            },
            {
              imageSrc: pre_construction,
              title: 'Pre-construction Consultation',
              description: '',
              url: '#services'
            },
            {
              imageSrc: structural_design,
              title: 'Structural Design',
              description: '',
              url: '#services'
            },
            {
              imageSrc: electrical_works,
              title: 'Electrical Works',
              description: '',
              url: '#services'
            },
            {
              imageSrc: plumbing_works,
              title: 'Plumbing Works',
              description: '',
              url: '#services'
            },
            {
              imageSrc: civil_works,
              title: 'Civil Works',
              description: '',
              url: '#services'
            },
            {
              imageSrc: water_proofing,
              title: 'Water Proofing',
              description: '',
              url: '#services'
            },
            {
              imageSrc: steel_fabrication,
              title: 'Steel Fabrication',
              description: '',
              url: '#services'
            },
            {
              imageSrc: fencing,
              title: 'Pre-cast Concrete Fencing',
              description: '',
              url: '#services'
            },
            {
              imageSrc: landscaping,
              title: 'Landscaping',
              description: '',
              url: '#services'
            },
            {
              imageSrc: repair,
              title: 'Repair and Retrofitting',
              description: '',
              url: '#services'
            }
          ]}
          imageCss={tw`w-20! h-20!`}
        />
      </section>
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <section id="projects" className="drop-shadow-2xl">
        <Container>
          <ContentWithPaddingXl>
            {/* <TabGrid heading={<>Our Projects</>} />{' '} */}
            <Subheading>
              Our <span className=""> </span>
              <HighlightedTextSimple>Projects</HighlightedTextSimple>
            </Subheading>
            <ImageContainer>
              <PhotoAlbum
                photos={photos}
                layout="rows"
                onClick={({ index }) => setIndex(index)}
                // layout={layout}
                // columns={columns}
                // spacing={spacing}
                // padding={padding}
                // targetRowHeight={targetRowHeight}
                // renderPhoto={renderPhoto}
              />{' '}
            </ImageContainer>
            <Lightbox
              slides={photos}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              // enable optional lightbox plugins
              plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
          </ContentWithPaddingXl>
        </Container>
        {/* <ImageGallery
          items={images}
          lazyLoad={true}
          thumbnailPosition="bottom"
          showFullscreenButton="false"
          useBrowserFullscreen="false"
          showPlayButton={false}
          showBullets="true"
          renderLeftNav={() => {
            return <span></span>;
          }}
          renderRightNav={() => {
            return <span></span>;
          }}
        />
        ; */}
      </section>
      <section id="contact-us">
        <ContactUsPage />
      </section>
      {/* <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={
          <>
            Why <HighlightedText>Choose Us ?</HighlightedText>
          </>
        }
        statistics={[
          {
            key: 'Orders',
            value: '94000+'
          },
          {
            key: 'Customers',
            value: '11000+'
          },
          {
            key: 'Chefs',
            value: '1500+'
          }
        ]}
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      /> */}
      {/* <Testimonial
        subheading=""
        heading={
          <>
            Customers <HighlightedText>Love Us.</HighlightedText>
          </>
        }
      /> */}
      {/* <DownloadApp
        text={
          <>
            People around you are ordering delicious meals using the{' '}
            <HighlightedTextInverse>Treact App.</HighlightedTextInverse>
          </>
        }
      /> */}
      <Footer />
    </AnimationRevealPage>
  );
};
