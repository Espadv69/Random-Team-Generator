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

  participants.map((participant) => {
    const $participant = document.createElement('li')
    $participant.textContent = participant
    $participantList.appendChild($participant)
  })
}
