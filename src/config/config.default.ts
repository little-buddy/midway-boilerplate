import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1692047285858_214',
  koa: {
    port: 7001,
  },
  /* axios */
  axios: {
    default: {
      /* 所有实例复用的配置 */
    },
    clients: {
      default: {
        /* 默认实例 */
      },
      customAxios: {
        /* 自定义实例 */
      },
    },
  },
  /* i18n */
  i18n: {
    localeTable: {
      en_US: {
        default: require('../locales/en_US'),
      },
      zh_CN: {
        default: require('../locales/zh_CN'),
      },
    },
    resolver: {
      // query:
      // cookie:
      // accept-language:
    },
  },
  /*
    配置 cron 日志
   */
  // midwayLogger: {
  //   // ...
  //   clients: {
  //     // ...
  //     cronLogger: {
  //       fileLogName: 'midway-cron.log',
  //     },
  //   },
  // },
  // config jwt
  jwt: {
    secret: '',
    expiresIn: '2d',
  },
} as MidwayConfig;
