function changeCase(converter) {
  const convertKeys = object => {
    if (Array.isArray(object)) {
      return object.map(convertKeys);
    } else if (typeof object === "object" && object !== null) {
      return Object.entries(object).reduce((memo, pair) => {
        memo[converter(pair[0])] = convertKeys(pair[1]);
        return memo;
      }, {});
    } else {
      return object;
    }
  };
  return convertKeys;
}
module.exports = changeCase;
