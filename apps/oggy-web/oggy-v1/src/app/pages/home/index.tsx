import config from 'app/config';
import HomeTemplate from 'app/components/templates/home-template';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'app/store';
import { useEffect } from 'react';
import { fetchLocality } from 'app/store/locality/index.slice';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  const Localities = useSelector((state: RootState) => state.locality);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchLocality(1));
  }, []);
  return (
    <HomeTemplate
      HomeImages={config.images.Home}
      HomeContent={config.content.Home}
      Localities={Localities.entities}
    />
  );
}

export default Home;
