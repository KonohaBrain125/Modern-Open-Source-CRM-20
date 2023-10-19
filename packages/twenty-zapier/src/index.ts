const { version } = require('../package.json');
import { version as platformVersion } from 'zapier-platform-core';
import createPerson from './creates/create_person';
import createCompany from './creates/create_company';
import company from './triggers/company';
import authentication from './authentication';
import 'dotenv/config';

export default {
  version,
  platformVersion,
  authentication: authentication,
  triggers: {
    [company.key]: company,
  },
  creates: {
    [createPerson.key]: createPerson,
    [createCompany.key]: createCompany,
  },
};
