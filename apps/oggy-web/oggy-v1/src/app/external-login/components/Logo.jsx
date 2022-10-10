import { Link } from "react-router-dom";
import Image from "app/components/atoms/image";
import Container from "app/components/atoms/container";
import Images from "app/constants/images";

const Logo = () => {
  return (
    <Container CenterCA CenterMA PaddingBottom="2rem">
      <Link to="/">
        <Container Height="6rem">
          <Image Src={Images.Logo.Oggy}  alt="logo" />
        </Container>
      </Link>
    </Container>
  );
};

export default Logo;