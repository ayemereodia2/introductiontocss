export class NoteManager {
    constructor(
        storageAdapter,
        autoSaveCallback,
        autoSaveThreshold = 3) {

        this.notes = new Map(); // Store notes in memory using a Map
        this.storageAdapter = storageAdapter; // Abstracted storage mechanism
        this.autoSaveCallback = autoSaveCallback; // Callback to inform UI
        this.autoSaveThreshold = autoSaveThreshold; // Number of characters before auto-save
    }

    createNote(id, content = new NoteContent()) {
        this.notes.set(id, { content, unsavedChanges: 0 });
        this.autoSaveCallback(id, content);
    }

    editNote(id, newContent) {
        if (this.notes.has(id)) {
            const note = this.notes.get(id);
            note.content = newContent;
            note.unsavedChanges += 1;

            // Trigger auto-save if threshold is reached
            if (note.unsavedChanges >= this.autoSaveThreshold) {
                this.saveNote(id);
            }
        } else {
            throw new Error(`Note with id ${id} does not exist.`);
        }
    }

    saveNote(id) {
        if (this.notes.has(id)) {
            const note = this.notes.get(id);
            this.storageAdapter.save(id, note.content);
            note.unsavedChanges = 0; // Reset unsaved changes counter
        } else {
            throw new Error(`Note with id ${id} does not exist.`);
        }
    }

    deleteNote(id) {
        if (this.notes.has(id)) {
            this.notes.delete(id);
            this.storageAdapter.delete(id);
        } else {
            throw new Error(`Note with id ${id} does not exist.`);
        }
    }

    getNote(id) {
        if (this.notes.has(id)) {
            return this.notes.get(id).content;
        }
        throw new Error(`Note with id ${id} does not exist.`);
    }
}