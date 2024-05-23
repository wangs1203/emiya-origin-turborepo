import type { TableProps } from 'antd';

// Table 默认每页条数
export const DEFAULT_PAGE_SIZE = 20;
export const DEFAULT_PAGE_KEY = 'page';
export const DEFAULT_PAGE_SIZE_KEY = 'size';

export const DEFAULT_PAGINATION: TableProps['pagination'] = {
  defaultPageSize: DEFAULT_PAGE_SIZE,
  showQuickJumper: true,
  showSizeChanger: true,
  pageSizeOptions: [10, 20, 30, 50, 100],
  showTotal: (total: number) => `共 ${total} 条`,
};

// 是否为 debug 模式
export const __DEBUG__: boolean =
  process.env.NODE_ENV === 'development' || process.env.DEBUG === 'true';

// console.log('process.env.NODE_ENV', process.env.NODE_ENV);
// console.log('process.env.DEBUG', process.env.DEBUG);
// eslint-disable-next-line no-console -- for debug
console.log('__DEBUG__', __DEBUG__);

// 获取public path，默认空值，后续所有涉及到public path的都直接使用此变量
const publicPath = process.env.PUBLIC_PATH;
export const __PUBLIC__: string =
  !publicPath || publicPath === '/' ? '' : publicPath;

export const __PUBLIC_API__ = process.env.PUBLIC_API;
