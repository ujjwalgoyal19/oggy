import styled from 'styled-components';

/* eslint-disable-next-line */
export interface RadioOptionProps {}

const StyledRadioOption = styled.div`
  color: pink;
`;

export function RadioOption(props: RadioOptionProps) {
  return (
    <StyledRadioOption>
      <h1>Welcome to RadioOption!</h1>
    </StyledRadioOption>
  );
}

export default RadioOption;
