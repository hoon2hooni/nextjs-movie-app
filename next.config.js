const BASE_URL = "https://api.themoviedb.org/3";
const path = "/movie/popular";
const getPopularMoviesEndPoint = `${BASE_URL}${path}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: getPopularMoviesEndPoint,
      },
    ];
  },
};
