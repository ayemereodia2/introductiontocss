import { NoteManager } from "./notecontroller.js";
import { NoteContent } from "./notemodel.js";
import { LocalStorageAdapter } from "./storage/LocalStorageAdapter.js"

class Note {
  init() {
    const storage = new LocalStorageAdapter();
    const noteManager = new NoteManager(storage, (id, content) => {
      console.log(`Auto-saved Note: ${id} -> ${content.title} -> ${content.content}`);
    });
    
    const textInput = document.querySelector("#newNoteContent");
    const noteTitle = document.querySelector("#newNoteTitle");
    let noteContent = new NoteContent();

    // Debounce logic for creating notes only after typing stops
    let typingTimeout;

    textInput.addEventListener("input", (event) => {
      noteContent.content = event.target.value;
      
      clearTimeout(typingTimeout);
      typingTimeout = setTimeout(() => {
        const noteId = Date.now(); // generate a unique ID
        noteManager.createNote(noteId, noteContent);
      }, 500);
    });

    noteTitle.addEventListener("input", (event) => {
      noteContent.title = event.target.value;
    });
  }
}

/*document.addEventListener("DOMContentLoaded", () => {
  const note = new Note();
  note.init();
});*/

document.addEventListener("DOMContentLoaded", () => {
    const note = new Note();

    const noteTitle = document.querySelector("#newNoteTitle");
    const noteInput = document.querySelector("#newNoteContent");
    const notesList = document.querySelector(".notes-list");
    const createNewNoteButton = document.querySelector("#createNewNote");
    const createNoteForm = document.querySelector("#createNoteForm");
    const newNoteTitleInput = document.querySelector("#newNoteTitle");
    const newNoteContentInput = document.querySelector("#newNoteContent");
    const saveNewNoteButton = document.querySelector("#saveNewNote");
    const cancelNewNoteButton = document.querySelector("#cancelNewNote");
  
    const notes = [
      { id: 1, title: "Note One", content: "This is the first note." },
      { id: 2, title: "Note Two", content: "This is the second note." },
      { id: 3, title: "Note Three", content: "This is the third note." }
    ];
  
    // Populate sidebar with notes
    function loadNotes() {
      notesList.innerHTML = "";
      notes.forEach(note => {
        const noteDiv = document.createElement("div");
        noteDiv.textContent = note.title;
        noteDiv.addEventListener("click", () => {
         console.log(`${note.content} -> ${note.title}`);
          createNoteForm.classList.remove("hidden");
          noteTitle.value = note.title;
          noteInput.value = note.content;
        });
        notesList.appendChild(noteDiv);
      });
    }
  
    // Handle the "Create New Note" button click
    createNewNoteButton.addEventListener("click", () => {
      createNoteForm.classList.remove("hidden"); // Show the form
      noteTitle.value = "";
      noteInput.value = "";
    });
  
    // Handle cancel button
    cancelNewNoteButton.addEventListener("click", () => {
      createNoteForm.classList.add("hidden"); // Hide the form
    });
  
    // Handle save new note button
    saveNewNoteButton.addEventListener("click", () => {
      const newNote = {
        id: notes.length + 1,
        title: newNoteTitleInput.value,
        content: newNoteContentInput.value
      };
      notes.push(newNote);
      createNoteForm.classList.add("hidden"); // Hide the form
      loadNotes(); // Refresh the sidebar with the new note
    });


   note.init();
  
    // Load initial notes
    loadNotes();
  });
  



