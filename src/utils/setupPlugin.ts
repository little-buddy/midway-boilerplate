/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IMidwayContainer } from '@midwayjs/core';
import * as axios from '@midwayjs/axios';

export const setupAxios = async (container: IMidwayContainer) => {
  // 配置 全局axios
  // @ts-ignore
  const httpService = await container.getAsync(axios.HttpService);
  // 配置 自定义zxios key根据自定义
  const httpServiceFactory = await container.getAsync(axios.HttpServiceFactory);
  // @ts-ignore
  const customAxios = httpServiceFactory.get('customAxios');
  /*
    配置
      interceptors.require.use(config=>config,error=>error)
      interceptors.response.use(response=>response,error=>error)
   */
};

/*
  语言的配置有三种方法
    - query 中带 locale=en-US
    - cookie 中带 locale
    - header Accept-Language:lang
 */
export const setupI18n = mainConf => {
  // 启动服务，根据情况动态配置语言
  // mainConf.i18nService.addLocale('')
  // 手动配置语言
  // mainConf.i18nService.saveRequestLocale(lang)
  // 如果这里开启了 writeCookie，会保存到Cookie中，下次请求会使用该参数
  /*
    语言优先级
    i18nSerivice.translate > @Validate > saveRequestLocale
    > Query\Cookie\Header > i18n默认配置
   */
};

export const setupQueue = async mainConf => {
  const queue = mainConf.bullFramework.getQueeu('test');
  const job = await queue.runJob();
  await job.process(); /* 获取进度 */
  await job.getState(); /* 获取任务状态 */
};
