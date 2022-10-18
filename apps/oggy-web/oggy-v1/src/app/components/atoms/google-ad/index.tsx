/* eslint-disable-next-line */
import styled from 'styled-components';
import AdSense from 'react-adsense';

// export interface GoogleAdProps {
//   pubId: String;
// }

const StyledGoogleAd = styled.div`
  color: pink;
`;

export function GoogleAd() {
  return (
    <StyledGoogleAd>
      <div>
        <AdSense.Google
          client="ca-pub-6294460253143872"
          slot="2044374794"
          style={{ display: 'block' }}
          format="auto"
          responsive="true"
        />
      </div>
    </StyledGoogleAd>
  );
}

export default GoogleAd;
