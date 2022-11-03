import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
import {
  Stack,
  Box,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { smsAuthenticationAPI } from '../service/sms.service.js';
import {
  auth,
  saveUserWithMobile,
  checkUserExists,
} from '../service/firebase.service.js';
import { useAuthState } from 'react-firebase-hooks/auth';

/////////////////////////////////////////////////////////////
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

const SignupForm = ({ setAuth }) => {
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

  const sendOneTimePassword = async (mobile) => {
    if ((await checkUserExists(mobile)) == true) {
      alert('Mobile number already exists, Please login directly');
      navigate('/login', { replace: true });
    } else {
      const res = await smsAuthenticationAPI.sendOtp(mobile);
      return res.result;
    }
  };

  // const [showPassword, setShowPassword] = useState(false);
  const [enableSignUp, setEnableSignUp] = useState(false);
  const [enableOtp, setEnableOtp] = useState(false);
  const [enableSendOtp, setEnableSendOtp] = useState(true);
  const [otpTimer, setOtpTimer] = useState('SEND OTP');

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First name required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Last name required'),
    mobile: Yup.string()
      .length(10, 'Enter a valid mobile number of 10 digits')
      .required('Mobile Number is required'),
    // OTP: Yup.number(),
    // password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      mobile: '',
      OTP: NaN,
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      const res = await smsAuthenticationAPI.validateOTP(
        values.mobile,
        values.OTP
      );
      if (res == 'success') {
        alert('OTP Validated');
        await saveUserWithMobile(
          values.firstName + ' ' + values.lastName,
          values.mobile
        );
        alert('You are logged in');
        navigate('/', { replace: true });
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
        setEnableSignUp(true);

        let sec = 60;
        let intervalHandle;
        intervalHandle = setInterval(() => {
          setOtpTimer(`RESEND OTP (${sec--}s)`);
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
      // setErrors({ firstName: 'Required' });
    }
  };

  const {
    // values: { firstName, lastName, mobile },
    errors,
    touched,
    handleSubmit,
    getFieldProps,
  } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            animate={animate}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
          >
            <TextField
              fullWidth
              label="First name"
              name="firstName"
              // value={firstName}
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              label="Last name"
              name="lastName"
              // value={lastName}
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>

          <Stack
            spacing={3}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
          >
            <TextField
              fullWidth
              type="tel"
              label="Mobile Number"
              name="mobile"
              // value={mobile}
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
          </Stack>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
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
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  borderRadius: 5,
                  backgroundColor: '#FF9800',
                  textTransform: 'none',
                  // padding: '18px 36px',
                }}
                disabled={enableSendOtp ? false : true}
                onClick={(e) => {
                  otpHandler();
                }}
              >
                {otpTimer}
              </Button>
              <LoadingButton
                disabled={enableSignUp ? false : true}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                style={{ fontSize: '12px', fontWeight: 'bold' }}
                //loading={isSubmitting}
              >
                Sign up
              </LoadingButton>
            </Stack>
          </Box>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default SignupForm;
