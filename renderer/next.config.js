module.exports = {

  reactStrictMode: false,
  // main process' webpack config
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        path: false
      };
    }

    // do some stuff here
    return config;
  },
};
