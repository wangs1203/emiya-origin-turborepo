/* eslint-disable @typescript-eslint/no-explicit-any -- wait a few time to refactor */
import _isFunction from 'lodash/isFunction';
import _isArray from 'lodash/isArray';
import _isString from 'lodash/isString';
import _omit from 'lodash/omit';
import _cloneDeep from 'lodash/cloneDeep';

/**
 * 一维数组转树
 * todo：refactor type to Generics
 * @param data - input array data
 * @param options - field key options
 * @returns
 */
export function transformArrayToTree(
  data?: any[],
  options?: { itemKey: string; parentKey: string; childKey: string },
): any[] {
  const {
    itemKey = 'id',
    parentKey = 'pid',
    childKey = 'children',
  } = options ?? {
    itemKey: 'id',
    parentKey: 'pid',
    childKey: 'children',
  };

  const result: any[] = [];

  const map: any = {};
  if (!Array.isArray(data)) {
    return [];
  }

  for (const item of data) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access -- wait a few time to refactor
    map[item[itemKey]] = { ...item, [childKey]: [] };
  }
  for (const item of data) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access -- wait a few time to refactor
    const pId = item[parentKey];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- wait a few time to refactor
    if (data.find((ele) => ele[itemKey] === pId)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call -- wait a few time to refactor
      map?.[pId]?.[childKey]?.push(map[item[itemKey]]);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- wait a few time to refactor
      result.push(map[item[itemKey]]);
    }
  }
  return result;
}

/**
 * 将树转为一维数组
 * todo：refactor type to Generics
 * @param tree - input tree
 * @param selector - node selector
 * @example flattenNodes(tree, 'id')
 * @example flattenNodes(tree, ['id', 'name', 'value'])
 * @example `flattenNodes(tree, node => node.id)`
 */
export function flattenNodes(
  tree: any,
  selector: any,
  childrenKey = 'children',
): any[] {
  const arr: any = [];
  let getNewNode = (node: any): any => node;
  if (selector) {
    if (_isFunction(selector)) {
      getNewNode = selector;
    } else if (_isArray(selector)) {
      getNewNode = (node) => {
        const newNode = {};
        selector.forEach((key) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment -- wait a few time to refactor
          (newNode as any)[key] = node[key];
        });
        return newNode;
      };
    } else if (_isString(selector)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access -- wait a few time to refactor
      getNewNode = (node) => node[selector];
    }
  }
  function loop(nodes: any): void {
    if (!Array.isArray(nodes) || nodes.length === 0) {
      return;
    }
    nodes.forEach((node) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access -- wait a few time to refactor
      arr.push(getNewNode(node));
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- wait a few time to refactor
      loop(node[childrenKey]);
    });
  }
  loop(tree);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return -- wait a few time to refactor
  return arr;
}

/**
 * 过滤树
 * @param tree - input tree
 * @param comparator - node comparator
 */
export function filterTree(tree: any, comparator: any): any {
  const ret: any = [];
  function loop(data: any, newTree: any): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access -- wait a few time to refactor
    data.forEach((node: any) => {
      const item = _omit(node, 'children');
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call -- wait a few time to refactor
      if (comparator?.(node)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access -- wait a few time to refactor
        newTree.push(item);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- wait a few time to refactor
        if (node.children) {
          item.children = [];
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- wait a few time to refactor
          loop(node.children, item.children);
        }
      }
    });
  }
  loop(tree, ret);
  return ret;
}
