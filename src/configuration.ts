import { join } from 'path';
import { Configuration, App, IMidwayContainer, Inject } from '@midwayjs/core';
import * as axios from '@midwayjs/axios';
import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
import * as i18n from '@midwayjs/i18n';
import * as swagger from '@midwayjs/swagger';
import * as bull from '@midwayjs/bull';
import * as cron from '@midwayjs/cron';
import * as jwt from '@midwayjs/jwt';
import * as security from '@midwayjs/security';
import * as upload from '@midwayjs/upload';

// import { DefaultErrorFilter } from './filter/default.filter';
// import { NotFoundFilter } from './filter/notfound.filter';
import { ReportMiddleware } from './middleware/report.middleware';

import { setupAxios, setupI18n } from '@/utils/setupPlugin';

@Configuration({
  imports: [
    koa,
    validate,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
    axios,
    i18n,
    // see http://127.0.0.1:7001/swagger-ui/index.html
    swagger,
    // queueu
    bull,
    cron,
    jwt,
    security,
    upload,
  ],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle {
  @App()
  app: koa.Application;

  @App('bull')
  bullApp: bull.Application;

  @Inject()
  bullFramework: bull.Framework;

  async onReady(container: IMidwayContainer) {
    // add middleware
    this.app.useMiddleware([ReportMiddleware]);
    // add filter
    // this.app.useFilter([NotFoundFilter, DefaultErrorFilter]);
    setupAxios(container);
    setupI18n(this);
  }

  async onServerReady() {
    // 启动任何
  }
}
