import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';

import { Box, Button, Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useAuthState } from 'react-firebase-hooks/auth';
import { smsAuthenticationAPI } from '../service/sms.service.js';
import {
  auth,
  checkUserExists,
  logInUser,
} from '../service/firebase.service.js';
import { async } from '@firebase/util';

let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

const LoginForm = ({ setAuth }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (loading) return;
      if (user) {
        navigate('/');
      }
    });
  }, [user, loading]);

  const sendOneTimePassword = async (mobile) => {
    if ((await checkUserExists(mobile)) == false) {
      alert('User does not exist! Redirecting to SignUp');
      navigate('/signup', { replace: true });
    } else {
      const res = await smsAuthenticationAPI.sendOtp(mobile);
      return res.result;
    }
  };

  const [enableLogIn, setEnableLoginIn] = useState(false);
  const [enableOtp, setEnableOtp] = useState(false);
  const [enableSendOtp, setEnableSendOtp] = useState(true);
  const [otpTimer, setOtpTimer] = useState('Send OTP');

  const LoginSchema = Yup.object().shape({
    mobile: Yup.string()
      .length(10, 'Enter a valid mobile number of 10 digits')
      .required('Mobile Number is required'),
    // OTP: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      mobile: '',
      OTP: '',
      // remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      const res = await smsAuthenticationAPI.validateOTP(
        values.mobile,
        values.OTP
      );
      if (res == 'success') {
        alert('OTP Validated');
        alert('You are logged in');
        await logInUser(values.mobile);
        navigate(from, { replace: true });
      } else if (res == 'fail') {
        alert('Incorrect OTP! Enter Again');
      }
    },
  });

  const otpHandler = async () => {
    if (Object.keys(await formik.validateForm()).length === 0) {
      setEnableSendOtp(false);
      if ((await sendOneTimePassword(formik.values.mobile)) == 'success') {
        alert('OTP successfully to your mobile');
        setEnableOtp(true);
        setEnableLoginIn(true);

        let sec = 60;
        let intervalHandle;
        intervalHandle = setInterval(() => {
          setOtpTimer(`Resend OTP (${sec--} s)`);
          if (sec == 0) {
            setEnableSendOtp(true);
            setOtpTimer('Resend OTP');
            clearInterval(intervalHandle);
          }
        }, 1000);
      }
    } else {
      const err = await formik.validateForm();
      alert('Invalid data in input!');
    }
  };

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
          >
            <TextField
              fullWidth
              type="tel"
              label="Mobile Number"
              name="mobile"
              {...getFieldProps('mobile')}
              error={Boolean(touched.mobile && errors.mobile)}
              helperText={touched.mobile && errors.mobile}
            />

            <TextField
              fullWidth
              disabled={enableOtp ? false : true}
              type="number"
              name="OTP"
              label="OTP"
              {...getFieldProps('OTP')}
            />
          </Box>
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            animate={animate}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
          >
            <Button
              fullWidth
              size="large"
              variant="contained"
              style={{ fontSize: '12px', fontWeight: 'bold' }}
              disabled={enableSendOtp ? false : true}
              onClick={(e) => {
                otpHandler();
              }}
            >
              {otpTimer}
            </Button>
            <LoadingButton
              disabled={enableLogIn ? false : true}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              style={{ fontSize: '12px', fontWeight: 'bold' }}
            >
              Log In
            </LoadingButton>
          </Stack>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;
