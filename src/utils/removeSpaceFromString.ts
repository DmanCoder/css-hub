const removeSpaceFromString = (str: string): string => {
  const strWithoutSpaces = (str = str.replace(/\s/g, ''));
  return strWithoutSpaces;
};

export default removeSpaceFromString;
