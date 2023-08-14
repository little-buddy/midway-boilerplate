import { Controller, Get, Query } from '@midwayjs/core';

// swagger 会根据 @Body @Query @Param 修饰器提取 路由方法参数和类型

@Controller('/')
export class HomeController {
  @Get('/')
  async home(
    @Query('uid') uid: number,
    @Query('tid') tid: string,
    @Query('isBoolean') isBoolean: boolean
  ): Promise<string> {
    return 'Hello Midwayjs!';
  }
}
