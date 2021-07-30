const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    getFullList()

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    getOneRegister()

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    deleteOneRegister();

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    updateOneRegister ();

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    createOneRegister ();

  });
});
