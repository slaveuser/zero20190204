const {get} = require("../request")
const cheerio = require('cheerio')

// JS Lambda
test('JS Lambda in root folder', () => {
  // expect.assertions(1);
  return get("/").then(data => {
    expect(data).toBe('Hello');
  });
});

test('Login and redirect', () => {
  // expect.assertions(1);
  return get("/api/login", {jar: true, json: true}).then(data => {
    expect(data.id).toBe('asad');
  });
});

test('Fetch (relative path)', () => {
  // expect.assertions(1);
  return get("/api/fetch", {jar: true, json: true}).then(data => {
    expect(data.evens[0]).toBe(2);
  });
});
