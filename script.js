
// Notizen anzeigen lassen
// Ich brauche Notizen

let notes = ['Bananen einkaufen','Rasen mähen'];
let deletedNotes = [];

// Wann werden sie angezeigt? (am besten onload)
function renderNotes(){
    // Ich muss definieren, wo sie anzuzeigen sind
    let contentRef = document.getElementById('notes-content');
    contentRef.innerHTML = "";

    for(let indexNote = 0; indexNote < notes.length; indexNote++){
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

// Notizen archivieren
function renderDeletedNotes(){
    let delContentRef = document.getElementById('deleted-content');
    delContentRef.innerHTML = "";

    for(let indexDelNote = 0; indexDelNote < deletedNotes.length; indexDelNote++){
        delContentRef.innerHTML += getDelNoteTemplate(indexDelNote);
    }
}

function getNoteTemplate(indexNote){
    return `<input type="checkbox"> ${notes[indexNote]} <button onclick="deleteNote(${indexNote})">&#x1f5d1;</button></br>`;
}

function getDelNoteTemplate(indexDelNote){
    return `<input type="checkbox"> ${deletedNotes[indexDelNote]} <button onclick="expungeNote(${indexDelNote})">&#x1f5d1;</button></br>`;
}

// Notizen hinzufügen
function addNote(){
    // Eingabe vom User definieren (Input-Element?)
    let noteInputRef = document.getElementById('note-input');
    // Eingabe auslesen (Übergabe mit .value?)
    let noteInput = noteInputRef.value;
    // Eingabe speichern
    notes.push(noteInput);
    // Eingabe anzeigen lassen
    renderNotes();
    //Input-Feld leeren - bereit für neuen Input
    noteInputRef.value = "";
}

// Notizen löschen
function deleteNote(indexNote){
    let delNote = notes.splice(indexNote, 1);
    deletedNotes.push(delNote);
    renderNotes(); 
    renderDeletedNotes();
}

function expungeNote(indexNote){
    deletedNotes.splice(indexNote, 1);
    renderDeletedNotes();
}

