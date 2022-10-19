import styled from 'styled-components';

//* Service

// * Imports
import Filters from 'app/components/organisms/filters';
import Gallery from 'app/components/organisms/gallery';
import Container from 'app/components/atoms/container';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';
import Slider from 'app/components/atoms/slider';
import config from 'app/config';
import { useDispatch } from 'react-redux';
import { searchActions } from 'app/store/search/index.slice';
import ChainCard from 'app/components/molecules/chain-card';
import Text from 'app/components/atoms/text';

/* eslint-disable-next-line */
export interface SearchResultTemplateProps {}

const StyledSearchResultTemplate = styled.div`
  min-height: 100vh;
  margin-bottom: 20vh;
  background-color: white;
`;

export function SearchResultTemplate(props: SearchResultTemplateProps) {
  const dispatch = useDispatch();
  const device = useDeviceType();
  const chainClickHandler = (chain: string) => {
    dispatch(
      searchActions.changeLocation({ type: 'City', name: 'jaipur', id: '1' })
    );
    dispatch(searchActions.changeQuery(chain));
  };
  return (
    <StyledSearchResultTemplate>
      {device.greaterThan('md') && (
        <Container
          Width="100%"
          Position={{ Type: 'sticky', Top: '0' }}
          Padding={
            device.greaterThan('md')
              ? '3rem 0rem 3rem 0rem'
              : '1rem 0rem 1rem 0rem'
          }
          CenterMA
          BG="White"
          Index={2}
        >
          <Container Width="var(--search-page-width)">
            <Filters />
          </Container>
        </Container>
      )}
      <Container CenterMA MarginTop="6rem">
        <Container Column Width="var(--search-page-width)">
          <Container>
            <Text H1 B>
              Top chains for you
            </Text>
          </Container>
          <Slider Padding="1rem">
            {config.content.Home.HeroSectionChainsJaipur.map((chain, index) => {
              return (
                <ChainCard
                  ClickHandler={chainClickHandler}
                  key={index}
                  Image={chain.image}
                  Name={chain.name}
                  Link="/search"
                  Size="S"
                />
              );
            })}
          </Slider>
        </Container>
      </Container>
      <Container Column CenterCA Index={1} MarginTop="2rem">
        <Gallery />
      </Container>
    </StyledSearchResultTemplate>
  );
}

export default SearchResultTemplate;
