import { Icon } from '@iconify/react';
import { Stack, Button, IconButton } from '@mui/material';
import {
  auth,
  signInWithFacebook,
  signInWithGoogle,
} from '../service/firebase.service.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const SocialAuth = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (loading) return;
      if (user) {
        navigate('/');
      }
    });
  }, [user, loading]);

  return (
    <>
      <Stack direction="row" spacing={2}>
        <IconButton
          sx={{
            border: '2px solid #ccc',
            borderRadius: '8px',
            padding: '0.4rem',
            flex: 1,
          }}
          onClick={signInWithGoogle}
        >
          <FcGoogle size={28} />
          {/* <Icon icon="eva:google-fill" color="#DF3E30" width={25} height={25} /> */}
        </IconButton>
        <IconButton
          sx={{
            border: '2px solid #ccc',
            borderRadius: '8px',
            padding: '0.4rem',
            flex: 1,
          }}
        >
          <Icon
            icon="eva:facebook-fill"
            color="#1877F2"
            width={30}
            height={30}
            onClick={signInWithFacebook}
          />
        </IconButton>
        {/* <IconButton
          sx={{
            border: '2px solid #ccc',
            borderRadius: '5px',
            padding: '0.5675rem',
            flex: 1,
          }}
        >
          <Icon
            icon="teenyicons:otp-outline"
            color="#1C9CEA"
            width={25}
            height={25}
          />
        </IconButton> */}
      </Stack>
    </>
  );
};

export default SocialAuth;
