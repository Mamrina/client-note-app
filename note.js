export class Note {
  constructor(id, text, author, date) {
    this.id = id;
    this.text = text;
    this.author = author;
    this.date = date;
  }

  fullDisplay() {
    const formattedDate = this.date.toLocaleDateString();
    const display = `
      Text: ${this.text} - Author: ${this.author}
       - Date: ${formattedDate}
    `;
    return display;
  }

  length() {
    return this.text.length;
  }
}

// class Author {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   fullDisplay() {
//     return `Name: ${this.name} Surname : ${this.surname}`;
//   }
// }