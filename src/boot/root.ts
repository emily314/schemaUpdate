module.exports = server => {
  const router = new server.loopback.Router();
  router.get('/', server.loopback.status());
  server.use(router);
};
