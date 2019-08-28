import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  getThings()
  {
    return [

        {"id":1, "name": "bruh", "age": 21},
        {"id":2, "name": "bruh123", "age": 2},
        {"id":3, "name": "bruh222", "age": 221}

    ];
  }


}
