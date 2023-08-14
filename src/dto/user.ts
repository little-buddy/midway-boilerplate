import { Rule, RuleType } from '@midwayjs/validate';

// See https://midwayjs.org/docs/extensions/validate
export class UserDTO {
  @Rule(RuleType.number().required())
  id: number;

  @Rule(RuleType.string().required())
  firstName: string;

  @Rule(RuleType.string().max(10))
  lastName: string;

  @Rule(RuleType.number().max(10))
  age: number;
}

/*
  @Validate 可以单独配置校验错误码
 */
