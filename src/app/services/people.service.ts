import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  name: String;
  surname: String;
  sex?: String;
  picture: String; // not yet showed
  constructor() {}
}
