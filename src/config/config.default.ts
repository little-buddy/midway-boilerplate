import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1692047285858_214',
  koa: {
    port: 7001,
  },

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
} as MidwayConfig;
