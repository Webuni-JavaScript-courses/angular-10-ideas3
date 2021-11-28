import { Idea } from './models/idea.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdeasService {
  private _baseUrl = `${environment.baseUrl}/ideas`;

  constructor(private http: HttpClient) { }

  getIdea(id: string) {
    return this.http.get<Idea>(`${this._baseUrl}/${id}`);
  }

  listIdeas() {
    return this.http.get<Idea[]>(`${this._baseUrl}`);
  }

  upvoteIdea(idea: Idea) {
    return this.http.patch<{id: string}>(`${this._baseUrl}/${idea.id}/upvote`, null);
  }

  downvoteIdea(idea: Idea) {
    return this.http.patch<{id: string}>(`${this._baseUrl}/${idea.id}/downvote`, null);
  }

  deleteIdea(idea: Idea) {
    return this.http.delete<{id: string}>(`${this._baseUrl}/${idea.id}`);
  }

  createIdea(name: string, description: string) {
    return this.http.post<Idea>(`${this._baseUrl}`, {name, description});
  }

  updateIdea(id: string, name: string, description: string) {
    return this.http.put<Idea>(`${this._baseUrl}/${id}`, {name, description});
  }
}
