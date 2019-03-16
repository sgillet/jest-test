const request = require('request-promise');

class HttpRequester {
  constructor() {
  }

  async request (url) {
    const response = await request.get(url);
    return response;
  };
}

module.exports = new HttpRequester();
