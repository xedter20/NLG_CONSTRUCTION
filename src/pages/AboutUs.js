import React from 'react';
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import tw from 'twin.macro';
import styled from 'styled-components'; //eslint-disable-line
import { css } from 'styled-components/macro'; //eslint-disable-line
import Header from 'components/headers/light.js';
import Footer from 'components/footers/FiveColumnWithInputForm.js';
import MainFeature1 from 'components/features/TwoColWithButton.js';
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from 'components/features/ThreeColSimple.js';
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from 'components/cards/ProfileThreeColGrid.js';

import SupportIconImage from 'images/support-icon.svg';
import ShieldIconImage from 'images/shield-icon.svg';
import CustomerLoveIconImage from 'images/simple-icon.svg';

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <MainFeature1
      subheading={<Subheading>Company Overview</Subheading>}
      heading=""
      buttonRounded={false}
      primaryButtonText="Contact Us"
      imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
      textOnLeft={false}
    />
  );
};
