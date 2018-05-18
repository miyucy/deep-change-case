import assert from "assert";
import { camelToSnake, snakeToCamel } from "./index.mjs";

[
  { a: { foo: "foo" }, e: { foo: "foo" } },
  { a: { fooBar: "foo" }, e: { foo_bar: "foo" } },
  { a: { fooBarBaz: "foo" }, e: { foo_bar_baz: "foo" } },
  { a: [1, { two: 2 }, 3], e: [1, { two: 2 }, 3] },
  { a: [1, { intNum: 2 }, 3], e: [1, { int_num: 2 }, 3] }
].forEach(testcase => {
  assert.deepEqual(camelToSnake(testcase.a), testcase.e);
});

[
  { a: { foo: "foo" }, e: { foo: "foo" } },
  { a: { foo_bar: "foo" }, e: { fooBar: "foo" } },
  { a: { foo_bar_baz: "foo" }, e: { fooBarBaz: "foo" } },
  { a: [1, { two: 2 }, 3], e: [1, { two: 2 }, 3] },
  { a: [1, { int_num: 2 }, 3], e: [1, { intNum: 2 }, 3] }
].forEach(testcase => {
  assert.deepEqual(snakeToCamel(testcase.a), testcase.e);
});
