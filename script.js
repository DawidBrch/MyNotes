//VARIABLES SECTION


const addButton = document.querySelector('.add')
const deleteButton = document.querySelector('.delete-all')
const deleteNoteButton = document.getElementsByClassName('delete-note')
const textArea = document.querySelector('#text')
const error = document.querySelector('.error')
const saveButton = document.querySelector('.save')
const cancelButton = document.querySelector('.cancel')
const noteArea = document.querySelector('.note-area')
const notePanel = document.querySelector('.note-panel')
const selectCategory = document.querySelector('#category')
let selectedValue
let cardId = 0




//FUNCTIONS SECTION



const openPanel = () => {
	notePanel.style.display = 'flex'
}

const closePanel = () => {
	notePanel.style.display = 'none'
	error.style.visibility = 'hidden'
	textArea.value = ''
	selectCategory.selectedIndex = 0
}

const saveNote = () => {
	if (textArea.value === '' || selectCategory.selectedIndex === 0) {
		error.style.visibility = 'visible'
	} else {
		createNote()
		error.style.visibility = 'hidden'
		notePanel.style.display = 'none'
		textArea.value = ''
		selectCategory.selectedIndex = 0
	}
}

const createNote = () => {
	const newNote = document.createElement('div')
	newNote.classList.add('note')
	newNote.setAttribute('id', cardId)

	newNote.innerHTML = `
	
            <div class="note-header">
                <h3 class="note-title">${selectedValue}</h3>
                <button class="delete-note" onclick="deleteNote(${cardId})">
                    <i class="fas fa-times icon"></i>
                </button>
            </div>

            <div class="note-body">${textArea.value}</div>

	`
	noteArea.appendChild(newNote)
	cardId++
	checkColor(newNote)
}

const selectValue = () => {
	selectedValue = selectCategory.options[selectCategory.selectedIndex].text
}

const checkColor = note => {
	switch (selectedValue) {
		case 'Zakupy':
			note.style.backgroundColor = 'rgb(72,205,100)'
			break
		case 'Praca':
			note.style.backgroundColor = 'rgb(0,255,0)'
			break
		case 'Inne':
			note.style.backgroundColor = 'rgb(202,255,212)'
			break
	}
}

const deleteNote = id => {
	const noteToDelete = document.getElementById(id)
	noteArea.removeChild(noteToDelete)
}

const deleteAllNotes = () => {
	noteArea.textContent = ''
}


//LISTENERS SECTION


addButton.addEventListener('click', openPanel)
cancelButton.addEventListener('click', closePanel)
saveButton.addEventListener('click', saveNote)
deleteButton.addEventListener('click', deleteAllNotes)
