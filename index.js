const camelCase = require('camel-case');
const snakeCase = require('snake-case');
const changeCase = require('./impl.js');

module.exports = {
  camelToSnake: changeCase(snakeCase),
  snakeToCamel: changeCase(camelCase)
};
