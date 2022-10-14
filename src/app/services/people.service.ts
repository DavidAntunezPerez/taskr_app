import { Injectable } from '@angular/core';
import { People } from '../models/people.model';
@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor() {}
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
      picture: '',
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
      picture: '',
      phone: '622119833',
    },
  ];
  public getPerson(): People[] {
    // return person
    return this.person;
  }

  public getPersonsById(id: number): People {
    // returns person by ID
    return this.person[id];
  }
}
