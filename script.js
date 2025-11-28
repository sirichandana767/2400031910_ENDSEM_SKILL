// Load notes from localStorage
function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const list = document.getElementById("notesList");

    list.innerHTML = ""; // Clear previous list

    notes.forEach((note, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            <p>${note}</p>
            <div class="note-actions">
                <button class="edit" onclick="editNote(${index})">Edit</button>
                <button class="delete" onclick="deleteNote(${index})">Delete</button>
            </div>
        `;

        list.appendChild(li);
    });
}

// Add a new note
function addNote() {
    const input = document.getElementById("noteInput");
    const note = input.value.trim();

    if (note === "") return alert("Please write something!");

    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);

    localStorage.setItem("notes", JSON.stringify(notes));

    input.value = "";
    loadNotes();
}

// Edit an existing note
function editNote(index) {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const newText = prompt("Edit your note:", notes[index]);

    if (newText === null || newText.trim() === "") return;

    notes[index] = newText;
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
}

// Delete a note
function deleteNote(index) {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
}

// Load notes when page opens
window.onload = loadNotes;
