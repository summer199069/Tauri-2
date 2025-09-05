import axios from "axios";
import CryptoJS from "crypto-js";

const itouAxios = axios.create({
  baseURL: "https://apic.91bixin.net",
  timeout: 30000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json;charset=uft-8",
  },
});

itouAxios.interceptors.response.use(
  function (response) {
    console.log("response:", response);
    const { code, data, msg } = response.data;
    if (code === 0) {
      return data;
    } else {
      return Promise.reject(response.data);
    }
  },
  function (error) {
    console.log("error-response:", error.response);
    console.log("error-config:", error.config);
    console.log("error-request:", error.request);
    return Promise.reject(error);
  }
);

export const itouService = {
  get: (path, params) => {
    return new Promise((resolve, reject) => {
      itouAxios
        .get(path, { params })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  post: (path, params) => {
    return new Promise((resolve, reject) => {
      itouAxios
        .post(path, params)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

const hhAxios = axios.create({
  baseURL: "https://match-api.51honghuodian.com",
  timeout: 30000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
hhAxios.interceptors.response.use(function (response) {
  console.log("response:", response);
  const { errcode, data, msg } = response.data;
  if (errcode === 0) {
    return data;
  } else {
    return Promise.reject(response.data);
  }
});

export const hhService = {
  post: (path, params) => {
    return new Promise((resolve, reject) => {
      let param = {
        header: {
          uuid: "ekqd2awn2jaoc3b6t1dcocsu84wgrodpnxre",
          appVersion: "1.0.0",
          platformVersion: "1.0.0",
          platformCode: "h5mobile",
          userID: "",
          userType: "1",
          cmdId: "0",
          cmdName: "h5_itou",
          token: "",
        },
        body: params,
      };
      // 密钥和IV - 实际应用中应该安全地生成和存储
      const key = CryptoJS.enc.Utf8.parse("d3YmI1BUOSE2S2YmalBVZUQ="); // 16字节
      const iv = CryptoJS.enc.Utf8.parse("0000000000000000"); // 16字节
      const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(param), key, {
        iv: iv,
        mode: CryptoJS.mode.CBC, // 使用CBC模式需要IV
        padding: CryptoJS.pad.Pkcs7,
      }).toString();

      hhAxios
        .post(path, {
          request: encryptedData,
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
