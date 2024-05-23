export const formatValueToLabelValue = (
  arr: string[],
): { label: string; value: string }[] =>
  arr.map((value) => ({ label: value, value }));
