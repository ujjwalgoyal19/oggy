import * as config from '../../config';
import HomeTemplate from '../../components/templates/home.template';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <HomeTemplate
      HomeImages={config.images.Home}
      HomeContent={config.content.Home}
    />
  );
}

export default Home;
