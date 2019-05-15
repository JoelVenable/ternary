export class API {
  constructor(url) {
    this.url = url
  }
  fetchJson(endpoint) {
    this.promise = fetch(this.url + endpoint)
      .then(response => response.json())
  }
}

