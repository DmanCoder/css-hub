/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const isEmpty = (value: any): boolean =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0) ||
  (Object.entries(value).length === 0 && value.constructor === Object);

export default isEmpty;
