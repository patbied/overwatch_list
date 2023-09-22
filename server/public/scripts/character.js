const nameTag = document.getElementById('name')
const typeTag = document.getElementById('type')
const hpTag = document.getElementById('hp')
const primaryTag = document.getElementById('primary')
const ability_1Tag = document.getElementById('ability_1')
const ability_2Tag = document.getElementById('ability_2')
const ultimateTag = document.getElementById('ultimate')
const header = document.getElementById('header')
const renderCharacter = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/characters')
    const data = await response.json()
    console.log(data)
    let character;
    character = data.find(character => character.id === requestedID)
    if (character.type === 'Damage') {
    header.style.backgroundColor = 'red'
    } else if (character.type === 'Tank') {
    header.style.backgroundColor = 'blue'
    } else {
    header.style.backgroundColor = 'green'
    }
    nameTag.textContent = character.name
    typeTag.textContent = character.type
    hpTag.textContent = character.hp
    primaryTag.textContent = character.primary_weapon
    ability_1Tag.textContent = character.ability_one
    ability_2Tag.textContent = character.ability_two
    ultimateTag.textContent = character.ultimate
    document.title = character.name

}

renderCharacter()