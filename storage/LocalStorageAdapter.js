export class LocalStorageAdapter {
    save(id, content) {
        localStorage.setItem(id, content);
    }

    delete(id) {
        localStorage.removeItem(id);
    }

    load(id) {
        return localStorage.getItem(id);
    }

    loadAll() {
        const notes = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i); // Get the key of the current item
            const note = this.load(key); // Load the note content by key
            if (note) {
                notes.push({ id: key, content: note }); // Push to notes array
            }
        }
        return notes; // Return all notes as an array
    }
}