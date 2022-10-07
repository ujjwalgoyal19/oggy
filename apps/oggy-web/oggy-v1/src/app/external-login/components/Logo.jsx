import { Link } from "react-router-dom";
import Image from "app/components/atoms/image";
import config from "app/config";
import Container from "app/components/atoms/container";

const Logo = () => {
  return (
    <Container CenterCA CenterMA PaddingBottom="2rem">
      <Link to="/">
        <Image Image={config.images.Oggy.Logo}  alt="logo" />
      </Link>
    </Container>
  );
};

export default Logo;