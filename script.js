let notes = [];
let checkedNotes = [];

function renderNotes() {
    let contentRef = document.getElementById("notes-content");
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }

    getLocalStorage();
}

function getLocalStorage(){
    let data = localStorage.getItem('notes');
    let myArr = JSON.parse(data);

    if(myArr != null){
        notes = myArr;
    }
}

function renderCheckedNotes() {
    let checkedContentRef = document.getElementById("checked-content");
    checkedContentRef.innerHTML = "";

    for (let indexCheckedNote = 0; indexCheckedNote < checkedNotes.length; indexCheckedNote++) {
        checkedContentRef.innerHTML += getCheckedNoteTemplate(indexCheckedNote);
    }
}

function getNoteTemplate(indexNote) {
    return `<input type="checkbox" onclick="checkNote(${indexNote})"> ${notes[indexNote]}</br>`;
}

function getCheckedNoteTemplate(indexCheckedNote) {
    return `<input type="checkbox" checked> ${checkedNotes[indexCheckedNote]} <button onclick="expungeNote(${indexCheckedNote})">&#10006;</button></br>`;
}

function addNote() {
    let noteInputRef = document.getElementById("note-input");
    let noteInput = noteInputRef.value;

    if(noteInputRef.value != ""){
        notes.push(noteInput);
        localStorage.setItem("notes", JSON.stringify(notes));
    }
    renderNotes();

    noteInputRef.value = "";
}

function checkNote(indexNote) {
    let checkedNote = notes.splice(indexNote, 1);

    checkedNotes.push(checkedNote);
    localStorage.setItem("checkedNotes", JSON.stringify(checkedNotes));

    renderNotes();
    renderCheckedNotes();
}

function deleteNote(indexNote) {
    checkedNotes.splice(indexNote, 1);
    renderCheckedNotes();
}