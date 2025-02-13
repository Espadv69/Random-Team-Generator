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
    loadParticipants() // toDo
  } else {
    alert('Error making participant')
  }
}
