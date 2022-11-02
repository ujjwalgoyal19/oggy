import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://sms.smsmenow.in/',
});

export const smsAuthenticationAPI = {
  sendOtp: async function (mobile) {
    const response = await axiosInstance.request({
      method: 'GET',
      url: `/generateOtp.jsp?userid=michael&key=08c0161e7eXX&mobileno=${mobile}&timetoalive=90&sms=%7Botp%7D%20is%20your%20verification%20code.%0APlease%20do%20not%20share%20with%20anyone.%0ADiaz%20Cartel%20Pvt%20Ltd`,
    });
    return response.data;
  },
  validateOTP: async function (mobile, otp) {
    const response = await axiosInstance.request({
      method: 'GET',
      url: `/validateOtpApi.jsp?mobileno=${mobile}&otp=${otp}`,
    });
    return response.data.result;
  },
};
