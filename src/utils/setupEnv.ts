const dotEnv = require('dotenv');
const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const pathsDotenv = resolveApp('.env');
const isEnvProduction = process.env.NODE_ENV === 'production';

export default () => {
  dotEnv.config({
    path: `${pathsDotenv}.${isEnvProduction ? 'production' : 'local'}`,
  });
  dotEnv.config({
    path: pathsDotenv,
  });

  isEnvProduction || console.log(process.env);
};
