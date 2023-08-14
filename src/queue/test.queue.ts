import { Processor, IProcessor } from '@midwayjs/bull';

/*
  任务处理器，需要传递一个 Queue的名字
  可用于执行定时任务
 */

@Processor('test')
export class TestProcessor implements IProcessor {
  async execute(data: any) {
    /*  */
  }
}
