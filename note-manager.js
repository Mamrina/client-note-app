import { Note } from './note.js';

export class NoteManager {
  // méthode de classe
  static async list() {
    const response = await fetch('http://localhost:3000/notes/')
    // interprète la donnée reçue
    const data = await response.json();
    // retourne le tableau d'obj en tableau d'obj notes
    return data.map(obj => new Note(obj.id, obj.text));
  }

  static async create(note) {
    console.log('create for note : ', note);
    const response = await fetch('http://localhost:3000/notes/', {
        method: "POST",
        // body = La donnée, le corps du json
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    });
    const data = await response.json();
    return data;
  }

  static async remove(id) {
    const response = await fetch('http://localhost:3000/notes/' + id, {
        method: "DELETE",
        // body = La donnée, le corps du json
        headers: {
            'Content-Type': 'application/json'
        }
    });
  }

  static async update(note) {
    const response = await fetch('http://localhost:3000/notes/' + id, {
      methode: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    });
  }
}
