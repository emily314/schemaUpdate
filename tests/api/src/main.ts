import path from 'path';
import runner from '@ibm-ics/common-lib-test-node';
const project = require('../package.json');

const relPath = __dirname.replace(process.cwd(), '');
const fullPath = path.join(relPath, `tests`);
export default {
  run_tests: params => {
    params.testsPath = fullPath;
    params.serviceName = project.name;
    return runner.run_tests(params);
  },
};
