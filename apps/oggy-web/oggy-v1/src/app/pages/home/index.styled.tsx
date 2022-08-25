import styled from 'styled-components';

export const StyledHome = styled.div`
  min-height: 100vh;
  height: 100%;
  color: white;
  background-color: black;
  /* display: grid; */
`;

export const SectionWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledHero = styled.div`
  font-family: Raleway;
  font-weight: 100;
  font-size: 1.3rem;
  width: 100vw;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  img {
    position: absolute;
    width: 100vw;
    filter: brightness(55%);
    transform: scale(1.1) rotate(-14deg);
    z-index: 100;
  }
  div {
    z-index: 101;
  }
`;

export const StyledTopChains = styled.div``;

export const StyledLocalities = styled.div``;

export const StyledAppDownloadCTA = styled.div``;
