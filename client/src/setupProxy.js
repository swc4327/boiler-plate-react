const { createProxyMiddleware } = require("http-proxy-middleware");

//proxy하면 안됨

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
