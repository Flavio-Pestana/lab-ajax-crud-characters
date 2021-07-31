const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  const buildCharacterBox = (character) =>{
    const newElement = `
    <div class="character-info">
    <div class="name">${character.name}</div>
    <div class="occupation">${character.occupation}</div>
    <div class="cartoon"> Is a carrton?: ${character.cartoon}</div>
    <div class="weapon"> Character weapon: ${character.weapon}</div>
    </div>
    `;
    document.querySelector('.characters-container').innerHTML += newElement
  } ;

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    document.querySelector('.characters-container').innerHTML = ''
    charactersAPI.getFullList().then( result => {
      result.array.forEach(element => {
        buildCharacterBox(element)
      });
    })
  });
  

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    document.querySelector('.characters-container').innerHTML = ''
    const id = document.querySelector('input[name="character-id"]').value
    charactersAPI.getOneRegister(id).then(result =>{
      buildCharacterBox(result);
    })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let occupation = document.querySelector('#new-character-form input [name="occupation"]').value;
    let name = document.querySelector('#new-character-form input [name="name"]').value;
    let weapon = document.querySelector('#new-character-form input [name="weapon"]').value; 
    let cartoon = document.querySelector('#new-character-form input [name="cartoon"]').value;  

    const newCharacter = {
      name,
      occupation,
      weapon,
      cartoon
    }

  });
});
