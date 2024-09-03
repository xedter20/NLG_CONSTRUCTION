import React from 'react';
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'; //eslint-disable-line
import Header from 'components/headers/light.js';
import Footer from 'components/footers/FiveColumnWithInputForm.js';
import ContactUsForm from 'components/forms/TwoColContactUsWithIllustrationFullForm.js';
import ContactDetails from 'components/cards/ThreeColContactDetails.js';

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Container } from 'components/misc/Layouts';

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-1 md:py-1 items-center`;

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 12.484665745208044,
  lng: 124.66218527090085
};

export default () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyA55dpqo833W9cFmPU4Aocl7q3SPjstEQk'
  });

  console.log({ isLoaded });

  const [map, setMap] = React.useState(null);

  const onLoad = map => {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);

    setMap(map);
  };

  const onUnmount = map => {
    setMap(null);
  };

  return (
    <AnimationRevealPage>
      <ContactUsForm />
      <TwoColumn>
        {' '}
        <ContactDetails
          cards={[
            {
              title: 'Catarman, Philippines',
              description: (
                <>
                  <Address>
                    <AddressLine>
                      Brgy, Dona Polqueria, Diversion Road, 6400
                    </AddressLine>
                  </Address>
                  <Email>nlgconst@gmail.com</Email>
                  <Phone>0915 836 6436</Phone>
                </>
              )
            }
          ]}
        />{' '}
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            onZoomChanged={() => {}}
            onLoad={onLoad}
            onUnmount={onUnmount}>
            {/* Child components, such as markers, info windows, etc. */}
            <></> <Marker position={center} />
          </GoogleMap>
        )}
      </TwoColumn>

      <Container></Container>
    </AnimationRevealPage>
  );
};
