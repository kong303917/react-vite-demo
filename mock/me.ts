import type { MockMethod } from '@vitjs/vit';

export default [
  {
    url: '/api/me',
    method: 'get',
    timeout: 240,
    response: () => {
      return {
        code: 0,
        data: {
          address: '浙江杭州',
          avatar:
            '',
          email: 'kongcheng_303917@sina.com',
          name: 'zkc',
          position: '前端开发工程师',
        },
      };
    },
  },
] as MockMethod[];
