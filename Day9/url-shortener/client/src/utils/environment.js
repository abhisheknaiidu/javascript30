const DEFAULT_ENV = "development";

/**
 * Environments
 */
const Environments = {
  "development": {
    url: "http://localhost",
    port: 4000,
  },
  "itg": {
    url: "https://razorurl.herokuapp.com",
    port: 5000,
  },
  "production": {
    url: "https://razorurl.herokuapp.com",
    port: 5000,
  },
};

/**
 * @method getEnvironMentConfig
 * @param {*} env
 */
const getEnvironMentConfig = (env) => {
  let url = "";
  switch (env) {
    case "development":
      url = Environments[env].url + ":" + Environments[env].port;
      break;
    case "itg":
      url = Environments[env].url;
      break;
    case "production":
      url = Environments[env].url;
      break;
    default:
      url = "";
  }
  return url;
};

const BASE_URL = getEnvironMentConfig(process.env.NODE_ENV || DEFAULT_ENV);

/**
 * List of API endpoints
 */

const API_ENDPOINTS = {
  signup: "/users",
  signin: "/auth",
  getProfile: "/getProfile",
  shrinkUrl: "/shrinkUrl",
};

export { BASE_URL, API_ENDPOINTS };
