import uniqid from 'uniqid'

interface Note {
  name: string;
  id: string;
  image: string;
}

let arr: Note[] = [];
let count: Note[] = [];

// Check if localStorage is available
if (typeof localStorage !== 'undefined') {
  arr = JSON.parse(localStorage.getItem('localStorageArray') || '[]');
  count = JSON.parse(localStorage.getItem('count') || '[]');
}
// Function to add a new note to the array and update localStorage
const localStorageArray = (newNote: Note) => {
  arr.push(newNote);
  count.push(newNote);
  localStorage.setItem('localStorageArray', JSON.stringify(arr));
  localStorage.setItem('count', JSON.stringify(count));
};

export const addNote = () => {
  const name: string = `note ${count.length + 1}`
  const id: string = uniqid()
  const image: string = '/menu.svg'

  const noteObject: Note = {
    name: name,
    id: id,
    image: image
  };

  localStorageArray(noteObject);

  // note structure for Lexical editor
  const contentStructure = {
    "root": {
      "children": [
        {
          "children": [],
          "direction": null,
          "format": "",
          "indent": 0,
          "type": "paragraph",
          "version": 1
        }
      ],
      "direction": null,
      "format": "",
      "indent": 0,
      "type": "root",
      "version": 1
    }
  }

  localStorage.setItem(id, JSON.stringify(contentStructure));

  // localStorage.clear()
}

export const deleteNote = (id: string) => {
  // delete note of a specific ID
  localStorage.removeItem(id)

  // find the id and delete the same note from an array and NotesArray.tsx
  const index = arr.findIndex((note) => note.id === id);

  if (index !== -1) {
    arr.splice(index, 1);
    localStorage.setItem('localStorageArray', JSON.stringify(arr)); // Update localStorage after removing the note
  }

  const getId: string = localStorage.getItem(id) || '';

  console.log('getId: ', getId)

  if (getId == null || getId == undefined || getId == '') {
    window.location.href = '/';
  }
}