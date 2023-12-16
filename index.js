// Create variables for <div elements> 07/04
const name = document.getElementById('name')
const id = document.getElementById('id')
const baseexperience = document.getElementById('base_experience')
const height = document.getElementById('height')
const abilities = document.getElementById('abilities')
const stats = document.getElementById('stats')

//Create query selector,eventListener and fetch for button 07/04

document.querySelector('.randomPokemon').addEventListener('click', (click) => {
  click.preventDefault()
  name.innerHTML = '<em>Catching Pokemon...</em>'
  id.innerHTML = '<em>Catching Pokemon...</em>'
  baseexperience.innerHTML = '<em>Catching Pokemon...</em>'
  height.innerHTML = '<em>Catching Pokemon...</em>'
  abilities.innerHTML = '<em>Catching Pokemon...</em>'
  stats.innerHTML = '<em>Catching Pokemon...</em>'
  console.log('Pokemon Caught')

  const randomNumber = Math.ceil(Math.random() * 1279)

  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then((response) => response.json())
    .then((pokemon) => {
      debugger

      let abilitiesList = ''

      pokemon['abilities'].forEach((ability) => {
        abilitiesList = abilitiesList + ' ' + ability.ability.name
        // console.log(ability);
      })

      let statsList = ''

      pokemon['stats'].forEach((stat) => {
        statsList =
          statsList + ' ' + stat.stat.name + ':' + ' ' + stat['base_stat']
        console.log(stat['base_stat'])
      })

      name.innerHTML = pokemon['name']
      id.innerHTML = pokemon['id']
      baseexperience.innerHTML = pokemon['base_experience']
      height.innerHTML = pokemon['height']
      abilities.innerHTML = abilitiesList
      stats.innerHTML = statsList
    })
})
//Cant get abilities/stats to work at this stage - comes up with 'object' information because there is more than one piece of data to return
