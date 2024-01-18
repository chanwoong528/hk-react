import axios from "axios";

const DEV_BASE_RESTAPI = "https://dev-api.hankookilbo.com/api";
// const DEV_API_BASE = "http://localhost:9080";
console.log(window?.location.origin);
console.log(process.env.NODE_ENV);

const MODE_SET = {
  "localhost:517": DEV_BASE_RESTAPI,
  "localhost:90": window.location.origin,
  "localhost:80": window.location.origin,
  digitest: window?.location.origin,
  dev: window?.location.origin,
  stg: window?.location.origin,
};

function getModeFromLocation() {
  const href = window.location.origin;
  for (const mode in MODE_SET) {
    if (href.includes(mode)) {
      return MODE_SET[mode];
    }
  }
  return window?.location.origin;
}

///api/users/me
export const http = axios.create({
  baseURL: getModeFromLocation(),
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const setHttpHeaderToken = (token: string) => {
  http.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}
