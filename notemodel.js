
export class NoteContent {
    constructor(
        title = "",
        content = "",
        timestamp = new Date(),
        tags = [],
        attachments = []
    ) {
        this.title = title;
        this.content = content;
        this.timestamp = timestamp;
        this.tags = tags; // Array of tags associated with the note
        this.attachments = attachments; // Array of files or links
    }
}
