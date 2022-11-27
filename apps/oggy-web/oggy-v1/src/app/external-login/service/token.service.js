import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.oggy.co.in/auth/",
});

export const CustomAuth = {
  getToken: async function (mobile) {
    const response = await axiosInstance.request({
      method: "POST",
      url: `/token`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        mobile: mobile,
      },
    });
    return response.data.token;
  },
};
