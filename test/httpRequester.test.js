const httpRequester = require('../httpRequester');
const nock = require('nock');
const fixtures = {
  getGoogleOk : '<html>google ok</html>',
}
test('should expect that true is true', () => {
  expect(true).toBe(true);
});

test('should expect that false is false', () => {
  expect(false).toBe(false);
});

describe('HttpRequester', () => {
  beforeEach(() => {
    nock('http://www.google.com')
      .get('/')
      .reply(200, fixtures.getGoogleOk)
  });
  afterEach(() => {
    nock.restore();
  });
  test('should expect httpRequester to return sent url', async () => {
    const url = 'http://www.google.com';
    const response = await httpRequester.request(url);
    expect(response).toBe(fixtures.getGoogleOk);
  });
});
