const dotEnv = require('dotenv');
const fs = require('fs');
const path = require('path');
const { Bootstrap } = require('@midwayjs/bootstrap');

// config dotenv
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const pathsDotenv = resolveApp('.env');
const isEnvProduction = process.env.NODE_ENV === 'production';

dotEnv.config({
  path: `${pathsDotenv}.${isEnvProduction ? 'production' : 'development'}`,
});

dotEnv.config({
  path: pathsDotenv,
});

/* run -> */
Bootstrap.run();
