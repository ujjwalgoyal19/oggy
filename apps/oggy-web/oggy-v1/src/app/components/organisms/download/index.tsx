import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DownloadProps {}

const StyledDownload = styled.div`
  height: 70vh;
`;

export function Download(props: DownloadProps) {
  return <StyledDownload>Hello</StyledDownload>;
}

export default Download;
