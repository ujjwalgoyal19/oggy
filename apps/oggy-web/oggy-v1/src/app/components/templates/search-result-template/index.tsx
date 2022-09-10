import styled from 'styled-components';

//* Service

// * Imports
import Section from 'app/components/atoms/section';
import Filters from 'app/components/organisms/filters';
import Gallery from 'app/components/organisms/gallery';

/* eslint-disable-next-line */
export interface SearchResultTemplateProps {
  Heading: string;
  Filters: Array<{
    Name: string;
    List: {
      command: string;
      text: string;
    }[];
    Type: string;
  }>;
  ActiveFilters: Array<object>;
  Data: any;
  ApplyFilterHandler: (filter: Map<string, object>) => void;
}

const StyledSearchResultTemplate = styled.div`
  min-height: 100vh;
  padding-top: 20vh;
  background-color: inherit;
`;

export function SearchResultTemplate(props: SearchResultTemplateProps) {
  return (
    <StyledSearchResultTemplate>
      <Section Width="70%" Sticky Padding="3rem 0rem 3rem 0rem">
        <Filters
          FilterList={props.Filters}
          ActiveFilters={props.ActiveFilters}
          ApplyFilterHandler={props.ApplyFilterHandler}
        />
      </Section>
      <Section Width="70%">
        <Gallery Heading={props.Heading} Data={props.Data} />
      </Section>
    </StyledSearchResultTemplate>
  );
}

export default SearchResultTemplate;
