const config = {
  development: {
    backendUrl: import.meta.env.VITE_DEV_URL,
  },
  production: {
    backendUrl: import.meta.env.VITE_PROD_URL,
  },
};

export default config;
