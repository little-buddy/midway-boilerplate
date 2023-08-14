# 基于 midway@3.0.0+ 搭建的快速开发模版

## QuickStart

<!-- add docs here for user -->

see [midway docs][midway] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.

[midway]: https://midwayjs.org

### 简单的 HTTP 请求

```JS
import {makeHttpRequest} from "@midwayjs/core"

const result = await makeHttpRequest(url,{
  method: 请求类型
  dataType: 返回数据类型
  contentType: 发送数据类型, post 需要
  data:{} get query
  timeout 超时
  headers
})

还是用 axios 替换保险
```

### swagger 修饰器列表

```js
@ApiBody
@ApiExcludeEndpoint
@ApiExcludeController
@ApiHeader
@ApiHeaders
@ApiOperation
@ApiProperty
@ApiPropertyOptional
@ApiResponseProperty
@ApiQuery
@ApiResponse
@ApiTags
@ApiExtension
@ApiBasicAuth
@ApiBearerAuth
@ApiCookieAuth
@ApiOAuth2
@ApiSecurity
@ApiParam
@ApiExtraModel
```
