import { IMidwayContainer } from '@midwayjs/core';
import * as axios from '@midwayjs/axios';

export const setupAxios = async (container: IMidwayContainer) => {
  // 配置 全局axios
  const httpService = await container.getAsync(axios.HttpService);
  // 配置 自定义zxios key根据自定义
  const httpServiceFactory = await container.getAsync(axios.HttpServiceFactory);
  const customAxios = httpServiceFactory.get('customAxios');
  /*
    配置
      interceptors.require.use(config=>config,error=>error)
      interceptors.response.use(response=>response,error=>error)
   */
};
