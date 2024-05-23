/* eslint-disable @typescript-eslint/no-explicit-any -- wait time to refactor */
/**
 * 填充数组到指定length，长度不足补0，长度超出会截断。
 * @param arr - 数组
 * @param length - 数组长度
 * @param padContent - 填充内容
 */
export function padArray(arr: any[], length: number, padContent: any): any[] {
  return Array.from(
    new Array(length),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return -- wait time to refactor
    (_val, index) => arr[index] ?? padContent,
  );
}
/**
 * 在数组分隔符位置增加新元素，并返回新数组
 */
export function insertToDelimiter<T, V>(arr: T[], value: V): (T | V)[] {
  const result: (T | V)[] = [];
  for (let i = 0; i < arr.length; i += 1) {
    result.push(arr[i]);
    if (i !== arr.length - 1) {
      result.push(value);
    }
  }
  return result;
}
