'use strict';
/* Copyright IBM Corp. 2017  All Rights Reserved.                    */
/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
const NEWRELIC_LICENSE = process.env.NEWRELIC_API_KEY;
const NEWRELIC_ENABLED = process.env.NEWRELIC_ENABLED == 'true';

exports.config = {
  /**
   * Array of application names.
   */
  app_name: ['resource-base-service'],
  /**
   * Your New Relic license key.
   */
  license_key: NEWRELIC_LICENSE,
  agent_enabled: NEWRELIC_ENABLED,
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'info',
  },
};
