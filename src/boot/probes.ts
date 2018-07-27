/* Copyright IBM Corp. 2017  All Rights Reserved. */

module.exports = app => {
  app.use('/healthy', (_, res) => {
    res.status(200);
    res.end();
  });
};
