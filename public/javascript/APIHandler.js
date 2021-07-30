class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return this.BASE_URL.get('/characters');
  }

  getOneRegister () {
    return this.BASE_URL.get('/characters/:id');
  }

  createOneRegister () {
    return this.BASE_URL.post('/characters');
  }

  updateOneRegister () {
    return this.BASE_URL.patch('/characters');
  }

  deleteOneRegister () {
    return this.BASE_URL.delete("/characters/:id");
  }
}
