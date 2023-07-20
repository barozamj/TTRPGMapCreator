const addCharacterButton = document.getElementById('addCharacter');
const moveCharacterButton = document.getElementById('moveCharacter');
const mapDiv = document.getElementById('map');
let characters = [];

function addCharacter() {
    //create a new character element on the map
    const characterDiv = document.createElement('div');
    characterDiv.className = 'character';
    characterDiv.textContent = characters.length + 1;

    //set the random starting position for the character within the grid
    characterDiv.style.left = `${Math.floor(Math.random() * 28) * 50 - 30}px`;
    characterDiv.style.top = `${Math.floor(Math.random() * 14) * 50 - 35}px`;

    //append the character to the map
    mapDiv.appendChild(characterDiv);
    characters.push(characterDiv);
}

function moveCharacter() {
    //set new position for character based on input grid coordinates
    const characterId = document.getElementById('characterId').value - 1;
    const xCoordinate = document.getElementById('xCoordinate').value;
    const yCoordinate = document.getElementById('yCoordinate').value;

    if (characterId >= 0 && characterId < characters.length) {
        characters[characterId].style.left = `${xCoordinate * 50 - 30}px`;
        characters[characterId].style.top = `${yCoordinate * 50 - 35}px`;
    }
}

//add listeners to buttons
addCharacterButton.addEventListener('click', addCharacter);
moveCharacterButton.addEventListener('click', moveCharacter);

// Add gridlines to the map
mapDiv.style.backgroundImage = 'linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)';
mapDiv.style.backgroundSize = '50px 50px';