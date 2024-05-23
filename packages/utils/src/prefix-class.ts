/**
 * 更方便的 className 前缀
 * const listClassName = prefixClass('list')
 * listClassName() // 'list'
 * listClassName('item') // list-item
 *
 * const itemClassName = prefixClass(listClassName('item'))
 * itemClassName('title') // list-item-title
 */
export function prefixClass(prefix: string, defaultHyphen = '-') {
  return function classNameWithPrefix(
    className?: string,
    hyphen = defaultHyphen,
  ): string {
    if (!className) return prefix;
    return `${prefix}${hyphen}${className}`;
  };
}
