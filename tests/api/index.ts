import runner from './src/main';

const server = process.env.SERVER || 'http://localhost:4000';
const params = {
  server: server,
  outputPath: 'test_out',
};
runner
  .run_tests(params)
  .then(output => {
    if (output.report.specs.failed.length > 0) {
      process.exit(1);
    }
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
