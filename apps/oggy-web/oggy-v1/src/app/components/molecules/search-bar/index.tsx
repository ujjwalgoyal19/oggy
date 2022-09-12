import Image from 'app/components/atoms/image';
import styled from 'styled-components';
import config from 'app/config';

/* eslint-disable-next-line */
export interface SearchBarProps {
  type: string;
  size?: string;
}

const StyledSearchBar = styled.div`
  color: black;
  background-color: white;
  height: 3.5vh;
  padding: 1vh 0.5vw 1vh 0.5vw;
  width: auto;
  text-align: center;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 0.1rem solid rgb(232, 232, 232);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.04);
`;

interface IStyledInputWrapper {
  width: string;
}

const StyledInputWrapper = styled.div<IStyledInputWrapper>`
  display: flex;
  width: ${(props) => props.width};
  font-size: 1.6rem;
  img {
    margin-right: 0.5vw;
  }
  input {
    border: none;
    width: 100%;
    &:focus {
      outline: none;
    }
  }
`;

const StyledSeparator = styled.p`
  margin-left: 1vw;
  margin-right: 1vw;
  width: 1px;
  height: 70%;
  background-color: grey;
`;

export function SearchBarHero(props: SearchBarProps) {
  return (
    <StyledSearchBar>
      {props.type === 'combined' ? (
        <>
          <StyledInputWrapper width="25%">
            <Image Image={config.images.LocationIcon} />
            <input
              placeholder={config.content.SearchBarLocationPlaceholder}
            ></input>
          </StyledInputWrapper>
          <StyledSeparator />
        </>
      ) : null}
      <StyledInputWrapper width="75%">
        <Image Image={config.images.SearchIcon} />
        <input placeholder={config.content.SearchBarRestaurantPlaceholder} />
      </StyledInputWrapper>
    </StyledSearchBar>
  );
}

export default SearchBarHero;
