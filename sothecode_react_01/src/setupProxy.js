const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      // 도메인, api 호출
      target: "http://localhost:3002", // 통신할 서버의 도메인 주소
      changeOrigin: true,
    })
  );
};
