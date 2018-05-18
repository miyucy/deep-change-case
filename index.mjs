import snakeCase from "snake-case";
import camelCase from "camel-case";
import changeCase from "./impl.js";

export const camelToSnake = changeCase(snakeCase);
export const snakeToCamel = changeCase(camelCase);
