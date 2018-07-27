import Jasmine = require('jasmine');
import { SpecReporter } from 'jasmine-spec-reporter';
import * as reporters from 'jasmine-reporters';

const jrunner = new Jasmine(undefined);
jrunner.env.clearReporters();

const junitReporter = new reporters.JUnitXmlReporter({
  savePath: './tests/out/unit',
  consolidateAll: true,
});

const junitReporterWWS = new reporters.JUnitXmlReporter({
  savePath: '.',
  consolidateAll: true,
});
jrunner.addReporter(junitReporter);
jrunner.addReporter(junitReporterWWS);

jrunner.addReporter(new SpecReporter() as any);

jrunner.loadConfig({
  spec_dir: `./tests/unit/models`,
  spec_files: ['zookeeper.spec.ts'],
  stopSpecOnExpectationFailure: false,
  random: false,
});
jrunner.execute(undefined, undefined);
