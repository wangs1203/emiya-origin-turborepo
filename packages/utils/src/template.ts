import _forEach from 'lodash/forEach';
import _slice from 'lodash/slice';
import _flatMap from 'lodash/flatMap';
import _map from 'lodash/map';
import _isFunction from 'lodash/isFunction';
import _get from 'lodash/get';

export interface APITemplate {
  strings: string[];
  keys: string[];
  getPatternedString: (pattern?: (key: string) => string) => string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- don't need lint this
  toStringURL: (dict?: Record<string, any>) => string;
}

export type APIType = APITemplate | string;
type TemplateParamType = APITemplate | string;

export const templateString = (
  strings: TemplateStringsArray,
  ...keys: TemplateParamType[]
): APITemplate => {
  const resultStrings = [strings[0]];
  _forEach(keys, (k, i) => {
    if (typeof k === 'string') {
      resultStrings.push(strings[i + 1]);
    } else {
      let lastString = resultStrings.pop();
      resultStrings.push(
        `${lastString}${k.strings[0]}`,
        ..._slice(k.strings, 1),
      );
      lastString = resultStrings.pop();
      resultStrings.push(`${lastString}${strings[i + 1]}`);
    }
  });
  const resultKeys = _flatMap(keys, (k) =>
    typeof k === 'string' ? k : k.keys,
  );
  const getPatternedString: APITemplate['getPatternedString'] = (pattern) => {
    const result = [resultStrings[0]];
    resultKeys.forEach((k, i) => {
      result.push(k, resultStrings[i + 1]);
    });
    return [
      resultStrings[0],
      ..._map(resultKeys, (k, i) =>
        _isFunction(pattern)
          ? `${pattern(k)}${resultStrings[i + 1]}`
          : // eslint-disable-next-line no-useless-escape -- no lint for this
            `\$\{${k}\}${resultStrings[i + 1]}`,
      ),
    ].join('');
  };

  const toStringURL: APITemplate['toStringURL'] = (dict) =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return -- don't need lint this
    getPatternedString((key: string) => _get(dict, key, key));

  return {
    strings: resultStrings,
    keys: resultKeys,
    getPatternedString,
    toStringURL,
  };
};
