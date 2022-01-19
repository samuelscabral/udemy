module.exports = {
  reactStrictMode: true,
  env: {
    REACT_APP_MONGODB_USERNAME: process.env.REACT_APP_TMDB_API_KEY_V3,
    REACT_APP_MONGODB_PASSWORD: process.env.REACT_APP_MONGODB_PASSWORD,
    REACT_APP_MONGODB_DBNAME: process.env.REACT_APP_MONGODB_DBNAME,
  },
};
