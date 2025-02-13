// Participants
let participants = []

// Add participant
function addParticipant() {
  const $name = document.querySelector('.name')
  const nameInput = $name.value

  if (nameInput.trim()) {
    participants.push(nameInput)
    console.log(participants)
    $name.value = ''
    displayParticipants()
  } else {
    alert('Error making participant')
  }
}

function displayParticipants() {
  const $participantList = document.querySelector('.participants')
  $participantList.innerHTML = ''

  participants.forEach((participant) => {
    const $participant = document.createElement('li')
    $participant.textContent = participant
    $participantList.appendChild($participant)
  })
}

function generateTeams() {
  if (participants.length <= 2)
    return console.error('You need at least 3 participants to generate a team')

  const shuffled = [...participants].sort(() => Math.random() - 0.5)

  const teams = []
  while (shuffled.length > 0) {
    const team = shuffled.splice(0, 2)
    teams.push(team)
  }
  displayTeams() // toDo
}

/**
 * @param {Array} teams
 */

function displayTeams(teams) {
  const $container = document.querySelector('.teams')
  $container.innerHTML = ''

  teams.forEach((team, index) => {
    const $div = document.createElement('div')
    $div.innerHTML = `
      <strong>Team ${index + 1}:</strong> ${team.join(' - ')}
    `
    $container.appendChild($div)
  })
}
