import config from 'app/config';
import HomeTemplate from 'app/components/templates/home-template';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return <HomeTemplate HomeContent={config.content.Home} />;
}

export default Home;
