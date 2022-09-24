import Container from 'app/components/atoms/container';
import Text from 'app/components/atoms/text';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LocalitySuggestionsProps {
  Data: any[];
  ChangeHandler: (loc: any) => void;
}

const StyledLocalitySuggestions = styled.div`
  overflow-x: hidden;
`;

export function LocalitySuggestions(props: LocalitySuggestionsProps) {
  return (
    <StyledLocalitySuggestions>
      <Container Column Width="100%">
        {props.Data.map((loc) => {
          console.log(loc);
          return (
            <Container Row CenterCA Height="6rem" Hover={{ BG: '#F8F8F8' }}>
              <span
                onClick={() => props.ChangeHandler(loc)}
                style={{
                  cursor: 'pointer',
                  display: 'inline-block',
                  padding: '2rem',
                  width: '90%',
                  borderBottom: '1px solid rgba(0,0,0,.1)',
                }}
              >
                <Text H4 N>
                  {loc.loc_name}
                </Text>
              </span>
            </Container>
          );
        })}
      </Container>
    </StyledLocalitySuggestions>
  );
}

export default LocalitySuggestions;
