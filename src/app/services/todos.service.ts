import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private baseUrl : string ="http://mean-2-andrew3.apps.eu45.prod.nextcle.com/";

  constructor(private _HttpClient: HttpClient) { }

  getTodos()
  {
    return this._HttpClient.get(this.baseUrl);
  }


  saveTodo(todo : Todo)
  {
    return this._HttpClient.post(this.baseUrl, todo);
  }
}
