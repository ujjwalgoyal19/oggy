import styled from 'styled-components';
import LinkHoverImage from 'app/components/molecules/link-hover-image';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchActions } from 'app/store/search/index.slice';
import Container from 'app/components/atoms/container';
import { LocalityAPI } from 'app/service/locality.service';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';
import Text from 'app/components/atoms/text';
import Image from 'app/components/atoms/image';
import Images from 'app/constants/images';

/* eslint-disable-next-line */
export interface LocalityProps {}

const StyledLocality = styled.div`
  height: fit-content;
  width: 100%;
  color: white;
  background-color: transparent;
`;

const getRandomMargin = (length: number) => {
  const Margin = [];
  for (let i = 0; i < length; i++) {
    if (i % 2 !== 0) {
      Margin.push(Math.random() * 10 + '%');
    } else {
      Margin.push(Math.random() * 5 + '%');
    }
  }
  return Margin;
};

const Locality = (props: LocalityProps) => {
  const device = useDeviceType();
  const [overlay, setOverlay] = useState(false);
  const [localities, setLocalities] = useState<any>({});
  const [margin, setMargin] = useState<any[]>([]);
  const hoverHandler = (value: boolean) => {
    setOverlay(value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    LocalityAPI.getAll(1).then((locObject) => {
      setLocalities(locObject.localities);
      setMargin(getRandomMargin(locObject.totalLocalities));
    });
  }, []);

  const getRestaurantLocalityHandler = (locality: any) => {
    dispatch(
      searchActions.changeLocation({
        type: 'Locality',
        id: locality.locality_id,
        name: locality.locality_name,
      })
    );
  };
  console.log(localities);

  return (
    <StyledLocality>
      {device.greaterThan('md') && (
        <Container
          ClassName="locality_list"
          Row
          BG="transparent"
          Gap="2rem"
          Wrap
          SpaceBetweenMA
          Height="fit-content"
          MaxHeight="80vh"
        >
          {localities &&
            Object.keys(localities).length > 0 &&
            Object.values(localities).map((locality: any, index) => {
              return (
                <LinkHoverImage
                  key={`loc-${index}`}
                  text={locality.locality_name}
                  image="assets/images/malviyaNagar.jpg"
                  url="search"
                  subtext={locality.res_count + ' places'}
                  hoverHandler={hoverHandler}
                  hoverState={overlay}
                  clickHandler={() => getRestaurantLocalityHandler(locality)}
                  margin={margin[index]}
                />
              );
            })}
        </Container>
      )}
      {device.lessThan('md') && (
        <Container Column BG="black" PaddingTop="20%">
          <Container Row Padding="2rem">
            <Text H1 EB Color="white">
              Localites Guide
            </Text>
          </Container>
          <Container Row ScrollX ScrollStyle="Hide">
            <Container Row Gap="1.2rem" PaddingLeft="2rem">
              {localities &&
                Object.keys(localities).length > 0 &&
                Object.values(localities).map((locality: any, index) => {
                  return (
                    <div onClick={() => getRestaurantLocalityHandler(locality)}>
                      <Container
                        key={index}
                        Column
                        BG="white"
                        Shape="CS1"
                        Width={'18rem'}
                        Height={'18rem'}
                        OverflowHide
                        Padding="0.7rem"
                      >
                        <Container
                          Row
                          SpaceBetweenMA
                          Height="fit-content"
                          MarginBottom="1.4rem"
                        >
                          <Text H4 B Color="black">
                            Jaipur
                          </Text>
                          <Container
                            Row
                            Width="fit-content"
                            CenterCA
                            Height="fit-content"
                          >
                            <Container Height="1rem">
                              <Image Src={Images.Logo.Oggy} />
                            </Container>
                            <Text H6 B Color="black">
                              Locality
                            </Text>
                          </Container>
                        </Container>
                        <Container Height="fit-content" MarginBottom="0.4rem">
                          <Text H3 B Color="black">
                            {locality.locality_name}
                          </Text>
                        </Container>
                        <Container Width="100%" Height="100%" OverflowHide>
                          <Image
                            Width="100%"
                            Height="100%"
                            Src={'assets/images/malviyaNagar.jpg'}
                          />
                        </Container>
                      </Container>
                    </div>
                  );
                })}
            </Container>
          </Container>
        </Container>
      )}
    </StyledLocality>
  );
};

export default Locality;
