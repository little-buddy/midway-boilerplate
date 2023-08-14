import { Job, IJob } from '@midwayjs/cron';
import { FORMAT } from '@midwayjs/core';

@Job({
  cronTime: FORMAT.CRONTAB.EVERY_PER_30_MINUTE,
  start: true,
})
export class DataSyncCheckerJob implements IJob {
  async onTick() {
    console.log('run Job');
  }

  async onComplete(result: any) {
    // 执行完成的生命周期
  }
}
