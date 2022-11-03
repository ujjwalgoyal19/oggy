import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logout } from 'app/external-login/service/firebase.service.js';
import { Link } from 'react-router-dom';
import Text from 'app/components/atoms/text';
import Container from 'app/components/atoms/container';
import Image from 'app/components/atoms/image';
import Images from 'app/constants/images';
import { useState } from 'react';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';
import Modal from 'app/components/atoms/modal';
import { BiUserCircle } from 'react-icons/bi';

/* eslint-disable-next-line */
export interface UserProfileProps {}

export function UserProfile(props: UserProfileProps) {
  const device = useDeviceType();
  const [user, loading, error] = useAuthState(auth);
  const [popup, setPopup] = useState(false);
  const popupHandler = () => {
    setPopup(!popup);
  };
  if (user) {
    return (
      <Container
        Width="fit-content"
        Position={{ Type: 'relative' }}
        style={{ overflow: 'initial' }}
      >
        <Container
          Width="4rem"
          Height="4rem"
          Shape="Circle"
          ClickHandler={popupHandler}
        >
          <Image
            Src={
              (user && user.photoURL && user.photoURL) ||
              Images.User.ProfileThumb
            }
          />
        </Container>
        {popup && device.greaterThan('md') && (
          <>
            <Container
              ClickHandler={popupHandler}
              Position={{
                Type: 'fixed',
                Top: '0',
                Bottom: '0',
                Left: '0',
                Right: '0',
              }}
              BG="transparent"
            />
            <Container
              Index={100000}
              Position={{ Type: 'absolute', Top: '130%' }}
              Column
              BG="white"
              Width="10rem"
              Elevation={{ L1: true }}
              PaddingTop=".2rem"
              PaddingBottom=".2rem"
              Height="fit-content"
              Shape="CS1"
              Border={{ Style: 'Solid', L1: true }}
            >
              <Container
                Padding="1rem"
                ClickHandler={() => {
                  Promise.resolve(logout());
                }}
                Hover={{ BG: 'LightGrey' }}
              >
                <Text H5>Logout</Text>
              </Container>
            </Container>
          </>
        )}
        {device.lessThan('md') && (
          <Modal Close={popupHandler} Open={popup} Animation="GrowFromBottom">
            <Container
              Position={{
                Type: 'fixed',
                Top: '0',
                Left: '0',
                Right: '0',
              }}
              Height="calc(85 * var(--vh))"
              ClickHandler={popupHandler}
            />
            <Container
              ClickHandler={popupHandler}
              Column
              BG="white"
              Width="calc(100 * var(--vw))"
              Padding="1rem"
              Height="calc(11 * var(--vh))"
              MarginTop="calc(85 * var(--vh))"
              CenterCA
              CenterMA
            >
              <Container
                BG="var(--primary-color)"
                Padding="1.5rem"
                ClickHandler={() => {
                  Promise.resolve(logout());
                }}
                CenterMA
                Height="fit-content"
                Shape="CS1"
              >
                <Text H3 EB Color="white">
                  Logout
                </Text>
              </Container>
            </Container>
          </Modal>
        )}
      </Container>
    );
  } else {
    return (
      (device.greaterThan('md') && (
        <>
          <Link to="/login">
            <Text H4 N>
              Log In
            </Text>
          </Link>
          <Link to="/register">
            <Text H4 Color="Primary" N>
              Sign Up
            </Text>
          </Link>
        </>
      )) || (
        <Link to="/login">
          <BiUserCircle size="4rem" color="var(--primary-color)" />
        </Link>
      )
    );
  }
}

export default UserProfile;
