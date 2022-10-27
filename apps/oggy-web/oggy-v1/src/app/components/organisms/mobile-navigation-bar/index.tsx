import Container from 'app/components/atoms/container';
import Image from 'app/components/atoms/image';
import LocationSelector from 'app/components/molecules/location-selector';
import SearchRestaurants from 'app/components/molecules/search-restaurants';
import Images from 'app/constants/images';
import { useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface MobileNavigationBarProps {}

export function MobileNavigationBar(props: MobileNavigationBarProps) {
  const [position, setPosition] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleScroll = () => {
    const pos = window.scrollY;
    if (pos < 100) {
      setPosition(false);
    } else {
      setPosition(true);
    }
  };

  let width = '0';
  const loc = location.pathname.split('/');
  if (loc[1] === 'search') {
    width = `var(--search-page-width)`;
  } else if (loc[1] === 'restaurant') {
    width = 'var(--restaurant-page-width)';
  }

  const mobileNavLocation = document.querySelector('.mobile-nav__location');
  const mobileNavHeader = document.querySelector('.mobile-nav__header');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      {location.pathname !== '/' && (
        <Container
          ClassName="mobile-nav__header"
          Position={{ Type: 'sticky', Top: '0' }}
          Padding="1rem"
          // PaddingTop="1rem"
          // PaddingBottom="1rem"
          Width="100%"
          CenterCA
          CenterMA
          BG="white"
          Index={99}
        >
          {/* <Container Width={width}> */}
          <Container
            Width="fit-content"
            ClickHandler={() => {
              navigate(-1);
            }}
            PaddingRight="1rem"
          >
            <IoIosArrowBack size="2.5rem" />
          </Container>
          <Container>
            <Container Height="3rem">
              <Image Src={Images.Logo.Oggy} />
            </Container>
          </Container>
          <Container></Container>
        </Container>
      )}
      {location.pathname === '/search' && (
        <>
          <Container
            Row
            ClassName="mobile-nav__location"
            Padding="1rem"
            Position={{
              Type: 'sticky',
              Top: `${mobileNavHeader && mobileNavHeader?.clientHeight}px`,
            }}
            Index={100}
            BG="white"
          >
            <LocationSelector Condensed Mobile />
          </Container>
          <Container
            Row
            ClassName="mobile-nav__search"
            Position={
              (position && {
                Type: 'sticky',
                Top: `${mobileNavHeader && mobileNavHeader?.clientHeight}px`,
              }) || {
                Type: 'sticky',
                Top: `${
                  mobileNavLocation && mobileNavLocation?.clientHeight
                }px`,
              }
            }
            Padding="1rem"
            Index={101}
            BG="white"
          >
            <SearchRestaurants Mobile />
          </Container>
        </>
      )}
    </>
  );
}

export default MobileNavigationBar;
