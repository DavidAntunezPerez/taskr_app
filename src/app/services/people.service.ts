import { Injectable } from '@angular/core';
import { People } from '../models/people.model';
@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  person: People[] = [
    {
      id: 0,
      name: 'Paquito',
      surname: 'Potentus',
      picture: '',
      phone: '611122336',
    },
    {
      id: 1,
      name: 'Pepe',
      surname: 'Pérez',
      sex: 'Male',
      picture: 'https://cdn-icons-png.flaticon.com/512/206/206854.png',
    },
    {
      id: 2,
      name: 'Juana',
      surname: 'Lopez',
      sex: 'Female',
      picture: '',
    },
    {
      id: 3,
      name: 'Juanjo',
      surname: 'Jimenez',
      picture: 'https://cdn-icons-png.flaticon.com/512/3770/3770431.png',
      phone: '622119833',
    },
  ];
  id: number = this.person.length + 1;

  constructor() {}

  public getPerson(): People[] {
    // return person
    return this.person;
  }

  public getPersonsById(id: number) {
    // returns person by ID
    return this.person.find((ppl) => ppl.id == id);
  }

  deletePersonById(id: number) {
    // delete person by ID
    this.person = this.person.filter((ppl) => ppl.id != id);
  }

  addPerson(ppl: People) {
    ppl.id = this.id++;
    this.person.push(ppl);
  }

  updatePerson(ppl: People) {
    var peopl = this.person.find(p=>p.id==ppl.id);
    if (peopl) {
      peopl.name = ppl.name;
      peopl.surname = ppl.surname;
      peopl.sex = ppl.sex;
      peopl.phone = ppl.phone;
      peopl.picture = ppl.picture;
    }
  }
}
