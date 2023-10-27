/**
 * Вам необхідно написати додаток Todo list, використовуючи синтаксис класів. 
 * У списку нотаток повинні бути методи для додавання нової нотатки, видалення, редагування та отримання повної інформації про нотатку, 
 * а так само отримання списку всіх нотаток. Крім цього, у користувача має бути можливість позначити замітку, як виконану, 
 * і отримання інформації про те, скільки всього нотаток у списку і скільки залишилося невиконань. 
 * Нотатки не повинні бути порожніми.
 */

class ToDoList {
  static DEFAULT_COMPLETED = false;

  constructor() {
    this.notes = [];
  }

  addNote(text) {
    if (true === this.checkIsEmptyStr(text)) {
      return;
    }

    const newNote = {
      text: text,
      completed: ToDoList.DEFAULT_COMPLETED
    };

    this.notes.push(newNote);

    console.log(`New note "${newNote.text}" with index ${this.notes.indexOf(newNote)}.`);
  }

  removeNote(index) {
    if(false === this.checkIndex(index)) {
      return;
    }

    this.notes.splice(index, 1);

    console.log('Removed');
  }

  editNote(index, newText) {
    if(false === this.checkIndex(index) || true === this.checkIsEmptyStr(newText)) {
      return;
    }

    this.notes[index].text = newText;

    console.log('Edited');
  }

  getNoteInfo(index) {
    if(false === this.checkIndex(index)) {
      return;
    }

    const note = this.notes[index];

    console.log(`Note text: ${note.text}. Status: ${note.completed ? "Done" : "In Progress"}.`)
  }

  markAsCompleted(index) {
    if(false === this.checkIndex(index)) {
      return;
    }

    this.notes[index].completed = true;

    console.log('Done');
  }

  getAllNotes() {
    if(this.notes.length === 0) {
      console.log('There is empty')
      return;
    } 
    
    console.log('List: ');

    this.notes.forEach(note => {
      console.log(`Note text: ${note.text}. Status: ${note.completed ? "Done" : "In Progress"}.`)
    });
  }

  getNoteCounts() {
    const totalNotes        = this.notes.length;
    const notComplitedNotes = this.notes.filter((note) => !note.completed).length;

    console.log(`Notes count: ${totalNotes}`);
    console.log(`Not completed: ${notComplitedNotes}`);
  }

  checkIndex(index) {
    if(typeof this.notes[index] === 'undefined') {
      console.log('Wrong index.');

      return false;
    }
    return true;
  }

  checkIsEmptyStr(text) {
    if (text.trim() === '') {
      console.log('There is empty');

      return true;
    }

    return false;
  }
}

console.log('---- Task1 ----');

const myTodoList = new ToDoList();

console.log('--- add notes ---');
myTodoList.addNote("Some text");
myTodoList.addNote("More text");
myTodoList.addNote("More some text");

console.log('--- add empty notes ---');
myTodoList.addNote(" ");

console.log('--- mark as completed ---');
myTodoList.markAsCompleted(0);

console.log('--- edit note ---');
myTodoList.editNote(1, "Edited text");

console.log('--- remore note ---');
myTodoList.removeNote(2);
myTodoList.removeNote(5);

console.log('--- get notes info ---');
myTodoList.getNoteInfo(0);
myTodoList.getAllNotes();
myTodoList.getNoteCounts();

/**
 * Вам необхідно розширити можливості вашого списку і додати методи для пошуку замітки на ім'я, 
 * а також методи для сортування нотаток за статусом (спочатку виконані і навпаки).
 */

class ToDoList_1_0 extends ToDoList {
  addNote(text, name) {
    if (true === this.checkIsEmptyStr(text) || true === this.checkIsEmptyStr(name)) {
      return;
    }

    const newNote = {
      name: name,
      text: text,
      completed: ToDoList.DEFAULT_COMPLETED
    };

    this.notes.push(newNote);

    console.log(`New note "${newNote.text}" with name ${this.notes.name} and index ${this.notes.indexOf(newNote)}.`);
  }

  editNote(index, newText, newName) {
    if(false === this.checkIndex(index) || true === this.checkIsEmptyStr(newText) || true === this.checkIsEmptyStr(newName)) {
      return;
    }

    this.notes[index].text = newText;
    this.notes[index].name = newName;

    console.log('Edited');
  }

  getNoteInfo(index) {
    if(false === this.checkIndex(index)) {
      return;
    }

    const note = this.notes[index];

    console.log(`Note name: ${note.name}. Note text: ${note.text}. Status: ${note.completed ? "Done" : "In Progress"}.`)
  }

  getAllNotes() {
    if(this.notes.length === 0) {
      console.log('There is empty')
      return;
    } 
    
    console.log('List: ');

    this.notes.forEach(note => {
      console.log(`Note name: ${note.name}. Note text: ${note.text}. Status: ${note.completed ? "Done" : "In Progress"}.`)
    });
  }

  getNoteByName(name) {
    const notesByName = this.notes.filter((note) => note.name.toLowerCase() === name.toLowerCase());

    if (notesByName.length === 0) {
      console.log(`Note with "${name}" wasn't found.`);

      return;
    }

    notesByName.forEach(note => {
      console.log(`Note name: ${note.name}. Note text: ${note.text}. Status: ${note.completed ? "Done" : "In Progress"}.`)
    });
  }

  sortNotesByStatus() {
    const statuses = {
      true: 1,
      false:2
    }

    this.notes.sort((a, b) => statuses[a.completed] - statuses[b.completed]);

    this.getAllNotes();
  }
}

console.log('---- Task2 ----');

const myTodoList_1_0 = new ToDoList_1_0();

console.log('--- add notes ---');
myTodoList_1_0.addNote("Some text", "Name1");
myTodoList_1_0.addNote("More text", "Name1");
myTodoList_1_0.addNote("More some text", "Name1");
myTodoList_1_0.addNote("Some text", "Name2");
myTodoList_1_0.addNote("More text", "Name2");
myTodoList_1_0.addNote("More some text", "Name3");
myTodoList_1_0.addNote("Some text", "Name3");
myTodoList_1_0.addNote("More text", "Name4");
myTodoList_1_0.addNote("More some text", "Name4");

console.log('--- add empty notes ---');
myTodoList_1_0.addNote(" ", "name");

console.log('--- edit note ---');
myTodoList_1_0.editNote(1, "Edited text", "new name");

console.log('--- get notes info ---');
myTodoList_1_0.getNoteInfo(0);
myTodoList_1_0.getAllNotes();
myTodoList_1_0.getNoteCounts();

console.log('--- get note by name ---');
myTodoList_1_0.getNoteByName('Name3');

console.log('--- complete notes ---');
myTodoList_1_0.markAsCompleted(1);
myTodoList_1_0.markAsCompleted(3);
myTodoList_1_0.markAsCompleted(7);
myTodoList_1_0.markAsCompleted(8);

console.log('--- sort notes ---');
myTodoList_1_0.sortNotesByStatus();

/**
 * Вам необхідно додати кожній нотатці дату її створення і редагування, 
 * а також розширити можливості пошуку і сортування, включивши в них можливість роботи з датою.
 */

class ToDoList_2_0 extends ToDoList_1_0 {
  addNote(text, name) {
    if (true === this.checkIsEmptyStr(text) || true === this.checkIsEmptyStr(name)) {
      return;
    }

    const newNote = {
      name: name,
      text: text,
      completed: ToDoList.DEFAULT_COMPLETED,
      createdDate: new Date(),
      udatedDate: new Date()

    };

    this.notes.push(newNote);

    console.log(`New note "${newNote.text}" with name ${this.notes.name} and index ${this.notes.indexOf(newNote)}.`);
  }

  editNote(index, newText, newName) {
    if(false === this.checkIndex(index) || true === this.checkIsEmptyStr(newText) || true === this.checkIsEmptyStr(newName)) {
      return;
    }

    this.notes[index].text       = newText;
    this.notes[index].name       = newName;
    this.notes[index].udatedDate = new Date();

    console.log('Edited');
  }

  markAsCompleted(index) {
    if(false === this.checkIndex(index)) {
      return;
    }

    this.notes[index].completed = true;
    this.notes[index].udatedDate = new Date();

    console.log('Done');
  }

  sortNotesByCreatedDate() {
    this.notes.sort((a, b) =>  a.createdDate - b.createdDate);

    this.getAllNotes();
  }

  sortNotesByUpdatedDate() {
    this.notes.sort((a, b) =>  a.updatedDate - b.updatedDate);

    this.getAllNotes();
  }
}

console.log('---- Task3 ----');

const myTodoList_2_0 = new ToDoList_2_0();

console.log('--- add notes ---');
myTodoList_2_0.addNote("Some text", "Name1");
myTodoList_2_0.addNote("More text", "Name1");
myTodoList_2_0.addNote("More some text", "Name1");
myTodoList_2_0.addNote("Some text", "Name2");
myTodoList_2_0.addNote("More text", "Name2");
myTodoList_2_0.addNote("More some text", "Name3");
myTodoList_2_0.addNote("Some text", "Name3");
myTodoList_2_0.addNote("More text", "Name4");
myTodoList_2_0.addNote("More some text", "Name4");

console.log('--- add empty notes ---');
myTodoList_2_0.addNote(" ", "name");

console.log('--- edit note ---');
myTodoList_2_0.editNote(1, "Edited text", "new name");
myTodoList_2_0.editNote(5, "Edited text 2", "new name 1");
myTodoList_2_0.editNote(7, "Edited text 3", "new name 2");
myTodoList_2_0.editNote(9, "Edited text 4", "new name 3");

console.log('--- get notes info ---');
myTodoList_2_0.getNoteInfo(0);
myTodoList_2_0.getAllNotes();
myTodoList_2_0.getNoteCounts();

console.log('--- get note by name ---');
myTodoList_2_0.getNoteByName('Name3');

console.log('--- complete notes ---');
myTodoList_2_0.markAsCompleted(1);
myTodoList_2_0.markAsCompleted(3);
myTodoList_2_0.markAsCompleted(7);
myTodoList_2_0.markAsCompleted(8);

console.log('--- sort notes by created date ---');
myTodoList_2_0.sortNotesByCreatedDate();

console.log('--- sort notes by upated date ---');
myTodoList_2_0.sortNotesByUpdatedDate();